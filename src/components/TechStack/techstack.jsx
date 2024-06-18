
import { techStackRowOne, techStackRowTwo } from '../../constants';
import TechStackIconContainer from './TechStackIconContainer/techstackicon';


import './techstack.css';



function TechStack() {


    return (
        <div id='Tools' className="techstack_container">
            <p 
            whileInView={{opacity:1, y:0}}
            intial={{opacity:0, y:-100}}
            transition={{duration:1.5, delay:1}}
            className="techstack_title">Tech Stack</p>
            <div className="techstack_icon_container">

                {
                    techStackRowOne.map(function (element, index) {
                        return (
                            <TechStackIconContainer
                                key={element.iconName}
                                title={element.iconName}
                                altProperty={element.iconAltProperty}
                                image={element.iconImage}
                                
                            />
                        )
                    })
                }
            </div>
            <div className="techstack_icon_container">

                {
                    techStackRowTwo.map(function (element, index) {
                        return (
                            <TechStackIconContainer
                                key={element.iconName}
                                title={element.iconName}
                                altProperty={element.iconAltProperty}
                                image={element.iconImage}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TechStack