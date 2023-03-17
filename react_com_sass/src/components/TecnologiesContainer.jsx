import { DiHtml5, DiCss3,DiJsBadge,DiNodejsSmall,DiMysql,DiReact } from 'react-icons/di';
import { SiFlutter, SiPhp,SiAdobecreativecloud, SiMicrosoftoffice,SiDotnet,SiPython } from 'react-icons/si';

import '../styles/components/tecnologiescontainer.scss';

const technologies = [
    {id: "html",name:"HTML5",icon: <DiHtml5 />},
    {id: "css",name:"CSS3",icon: <DiCss3 />},
    {id: "js",name:"JavaScript",icon: <DiJsBadge />},
    {id: "node",name:"Node.js",icon: <DiNodejsSmall />},
    {id: "mysql",name:"MySQL",icon: <DiMysql />},
    {id: "react",name:"React",icon: <DiReact />},
    {id: "flutter",name:"Flutter",icon: <SiFlutter />},
    {id: "php",name:"Php",icon: <SiPhp />},
    {id: "adobe",name:"Pacote Adobe",icon: <SiAdobecreativecloud />},
    {id: "office",name:"Pacote Ofice",icon: <SiMicrosoftoffice />},
    {id: "dotnet",name:".Net",icon: <SiDotnet />},
    {id: "python",name:"Python",icon: <SiPython />},
];

const TecnologiesContainer = () => {
    return (
        <section className='techonolies-container'>
            <h2>Tecnologias</h2>

            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={ tech.id } key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Nemo quod aspernatur omnis placeat, natus enim sunt.
                            </p>
                        </div>
                    </div>  
                ))}
            </div>

       </section>
);
};
export default TecnologiesContainer;