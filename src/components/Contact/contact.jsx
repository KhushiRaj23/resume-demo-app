import e from '../../assets/mail.gif';
import './contact.css';


export default function Contact(){
    return (
        <div id='Contact' className='contact_container'>
        <p className='contact_title'>Contact</p>
        <div className='contact_link_container'>
            <p className='contact_info'>Email me at: </p>
        <a href='mailto:khushiraj23k3@gmail.com'>
            <img className='contact_img' src={e} alt='Contact Icon' />
        </a>
        </div>
    </div>
    )
}