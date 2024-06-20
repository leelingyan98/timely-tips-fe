import './Logo.css';
import icon from '../../assets/plant-cloud-svgrepo-com.svg';

export default function Logo() {
    return (
        <div className="app-logo">
            <div className="icon">
                <img src={icon} />
            </div>
            <p className="app-name">Timely Tips</p>
        </div>
    )
}
