import './ConsultasCiviles.css'
import { useParams } from 'react-router-dom';

function ConsultasCiviles() {

    const { tipo } = useParams

    return(
        <div className="body-consultas">
            <div className="above">
                <h1>Above</h1>
            </div>
            <div className="below">
                <h1>Below</h1>
            </div>
        </div>
    );
}

export default ConsultasCiviles;