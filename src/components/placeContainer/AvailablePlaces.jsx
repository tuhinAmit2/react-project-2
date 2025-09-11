import { useEffect, useState } from "react";
import Place from "./place/Place";
import Error from "../errorContainer/Error";
import { sortPlacesByDistance } from "../loc";

export default function AvailablePlaces() {
    const [isFetching, setIsFetching] = useState(false);
    const [places, setPlaces] = useState([]);
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
                        setPlaces(sortedPlaces);
                        setIsFetching(false);
                    },
                    (geoError) => {
                        console.error("Geolocation error:", geoError);
                        // fallback: just use unsorted data
                        setPlaces(resData);
                        setIsFetching(false);
                    }
                );
            } catch (err) {
                setError({ message: err.message });
                setIsFetching(false);
            }
        }

        fetchPlaces();
    }, []);

    if (error) {
        return <Error title="An Error Occurred" message={error.message} />;
    }

    return (
        <table className="places-table">
            <tbody>
            {isFetching && (
                <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                        Loading...
                    </td>
                </tr>
            )}

            {!isFetching && places.length > 0 && (
                <tr>
                    {places.map((place) => (
                        <Place key={place.id} {...place} />
                    ))}
                </tr>
            )}

            {!isFetching && places.length === 0 && (
                <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                        No places found.
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
}