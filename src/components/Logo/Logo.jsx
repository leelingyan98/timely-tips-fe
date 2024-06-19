import './Logo.css';
import icon from '../../../public/plant-cloud-svgrepo-com.svg';

export default function Logo() {
    return (
        <div className="app-logo">
            <div className="icon">
                <img src={icon} />
            </div>
            <p class="app-name">Timely Tips</p>
        </div>
    )
}
