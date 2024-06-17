import ExperienceCard from './ExperienceCard/experiencecard';
import './experiene.css';
import c from '../../assets/c__icon.png';
import JS from '../../assets/js_icon.png';
import css from '../../assets/css_icon.png';

function Experinces(){
    const statements =[
        "1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam sint quaerat excepturi molestias vel. Architecto saepe temporibus veritatis porro magnam optio? Rerum ducimus cupiditate repellat soluta ad mollitia vero.",
        "2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam sint quaerat excepturi molestias vel. Architecto saepe temporibus veritatis porro magnam optio? Rerum ducimus cupiditate repellat soluta ad mollitia vero.",
        "3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam sint quaerat excepturi molestias vel. Architecto saepe temporibus veritatis porro magnam optio? Rerum ducimus cupiditate repellat soluta ad mollitia vero.",
        "4.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam sint quaerat excepturi molestias vel. Architecto saepe temporibus veritatis porro magnam optio? Rerum ducimus cupiditate repellat soluta ad mollitia vero.",
        "5.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam sint quaerat excepturi molestias vel. Architecto saepe temporibus veritatis porro magnam optio? Rerum ducimus cupiditate repellat soluta ad mollitia vero."
    ];

    const iconImages=[c,JS,css];
    return (
        <div id='Experience' className='experience_container'>
            <p className='experience_title'>Experience</p>

            <div className='experience_cards_container'>
                <ExperienceCard
                companyName='ABC Pvt Ltd'
                designation='SDE 2'
                statements={statements}
                iconImages={iconImages}
                />
                <ExperienceCard
                companyName='XYZ Pvt Ltd'
                designation='SDE 1'
                statements={statements}
                iconImages={iconImages}
                />
                <ExperienceCard
                companyName='EFG Pvt Ltd'
                designation='SDE 1'
                statements={statements}
                iconImages={iconImages}
                />
            </div>
        </div>
    )
}
export default Experinces