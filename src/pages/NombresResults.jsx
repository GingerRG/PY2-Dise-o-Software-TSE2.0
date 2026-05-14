import Header from "../components/Header";
import ListaResultados from "../components/ListaResultados";
import './NombresResults.css'

function NombresResults () {

    return (
        <div className="nombres-results">
            <div className="nombres-above-results">
                <Header/>
            </div>
            <div className="nombres-below-results">
                <ListaResultados />
            </div>
        </div>
    );
}

export default NombresResults;