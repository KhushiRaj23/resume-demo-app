
import { techStackRowOne, techStackRowTwo } from '../../constants';
import TechStackIconContainer from './TechStackIconContainer/techstackicon';


import './techstack.css';
function TechStack() {


    return (
        <div id='Tools' className="techstack_container">
            <p className="techstack_title">Tech Stack</p>
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