import {useEffect, useState} from "react";
import {sortPlacesByDistance} from "../components/loc";

export function useFetch(fetchFn) {

    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const response = await fetch("http://localhost:8080/shopmate/places");

                if (!response.ok) {
                    throw new Error(`Failed to fetch places: ${response.status}`);
                }

                const resData = await response.json();

                // get user location and then sort
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const sortedPlaces = sortPlacesByDistance(
                            resData,
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        fetchFn(sortedPlaces);
                        setIsFetching(false);
                    },
                    (geoError) => {
                        console.error("Geolocation error:", geoError);
                        // fallback: just use unsorted data
                        fetchFn(resData);
                        setIsFetching(false);
                    }
                );
            } catch (err) {
                setError({ message: err.message });
                setIsFetching(false);
            }
        }

        fetchPlaces();
    }, [fetchFn]);

    return{
        isFetching,
        error
    }
}