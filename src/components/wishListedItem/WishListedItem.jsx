import {Table} from "react-bootstrap";

export default function WishListedItem({children, ...props}) {
    return (<div {...props}>
        <Table>
            <thead>
            <tr>
                <th>WishListed Product</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.link} className="btn btn-primary">Go somewhere</a>
                            {children}
                        </div>

                    </div>
                </td>
                <td>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.link} className="btn btn-primary">Go somewhere</a>
                            {children}
                        </div>

                    </div>
                </td>
                <td>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.link} className="btn btn-primary">Go somewhere</a>
                            {children}
                        </div>

                    </div>
                </td>

            </tr>
            </tbody>
        </Table>
    </div>);

}