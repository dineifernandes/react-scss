import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment, AiFillMail } from 'react-icons/ai'

import '../styles/components/informationcontainer.scss';

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(43) 9 9999-9999</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillMail id="mail-icon" />
                <div>
                    <h3>E-Mail</h3>
                    <p>email@email.com.br</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Cidade-Estado</p>
                </div>
            </div>
       </section>
);
};
export default InformationContainer;