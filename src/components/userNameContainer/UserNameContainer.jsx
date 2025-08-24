import {useRef, useState} from "react";
import {Button} from "react-bootstrap";

export default function UserNameContainer() {
    const userName = useRef();
    const [enteredUserName, setEnteredUserName] = useState(null);

    function handleClick() {
        setEnteredUserName(userName.current.value);
        /*Manipulating dom via ref*/
        userName.current.value = "";
    }

    return (<div className="userNameContainer">
        {/*{enteredUserName === null ? */}
            <div id="userDiv">
                <input ref={userName} type="text"/> <br/>
                <Button onClick={handleClick} className="btn btn-secondary btn">Set</Button>
            </div>
        {/*: */}
            <h1>Hi {enteredUserName ?? 'Unknown User'}</h1>
        {/*}*/}
    </div>)
};