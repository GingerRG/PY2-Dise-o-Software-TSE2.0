import './ConsultasCiviles.css'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CedulaLayout from '../layouts/CedulaLayout';

function ConsultasCiviles() {

    const { tipo } = useParams;

    return(
        <div className="body-consultas">
            <div className="above">
                <Header/>
            </div>
            <div className="below">
                <CedulaLayout/>
            </div>
        </div>
    );
}

export default ConsultasCiviles;