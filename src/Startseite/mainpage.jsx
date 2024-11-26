import { Link } from "react-router-dom";

function Main(){
    console.log("Main component rendered");
    return(
        <>
            <p>Das ist die Startseite</p>
            <Link to="/page2">
                <button type="button">Zur Seite 324q42</button>
            </Link>
        </>
    );
}

export default Main;