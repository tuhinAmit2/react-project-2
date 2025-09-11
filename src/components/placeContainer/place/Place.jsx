import "./Place.css"

export default function Place({id, name, placeImagePath}) {
    return (<td className="place-content">
            <img src={placeImagePath} alt={name} className="place-image"/>
            <h3>{name}</h3>
        </td>
    );
}