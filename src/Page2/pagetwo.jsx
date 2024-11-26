import { Link } from "react-router-dom";

function Seite2(){
    console.log("Seite2 component rendered");
    return(
        <>
            <p>Das ist Seite2</p>
            <Link to="/">
                <button type="button">Zur Main Page</button>
            </Link>
        </>
    );
}
export default Seite2;