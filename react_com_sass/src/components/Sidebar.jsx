import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.scss'
import Avatar from '../img/foto-3x4.jpg'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Claudinei A. Fernandes" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className='btn'>Download Currículo</a>
        </aside>
    );
};

export default Sidebar;