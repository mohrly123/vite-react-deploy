import { Link } from "react-router-dom";

function Main(){
    return(
        <>
            <p>Das ist die Startseite</p>
            <Link to="/page2">
                <button type="button">Zur Seite 2</button>
            </Link>
        </>
    );
}

export default Main;