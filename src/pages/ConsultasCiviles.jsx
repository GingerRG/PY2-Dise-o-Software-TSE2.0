import './ConsultasCiviles.css'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CedulaLayout from '../layouts/CedulaLayout';
import NombreLayout from '../layouts/NombreLayout';

function ConsultasCiviles() {

    const { tipo } = useParams();

    const renderLayout = () => {
        switch (tipo) {
            case 'cedula':  return <CedulaLayout />
            case 'nombre':  return <NombreLayout />
            case 'matrimonios':  return <NombreLayout />
            case 'defunciones':  return <NombreLayout />
            default:        return <p style={{ color: 'white' }}>Consulta no encontrada</p>
        }
    }

    return(
        <div className="body-consultas">
            <div className="above">
                <Header/>
            </div>
            <div className="below">
                {renderLayout()}
            </div>
        </div>
    );
}

export default ConsultasCiviles;