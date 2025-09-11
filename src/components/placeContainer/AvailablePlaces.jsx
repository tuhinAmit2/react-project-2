import { useEffect, useState } from "react";
import Place from "./place/Place";
import Error from "../errorContainer/Error";
import { sortPlacesByDistance } from "../loc";
import {useFetch} from "../../hooks/useFetch";

export default function AvailablePlaces() {
    const [places, setPlaces] = useState([]);
    const {isFetching,error} = useFetch(setPlaces);

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