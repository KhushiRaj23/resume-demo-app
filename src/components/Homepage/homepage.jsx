import './homepage.css';
import github from'../../assets/github_icon.png';
import linkedin from '../../assets/linkedin_icon.png';
import bg from '../../assets/download.gif';
function HomePage(){
    return(
        <div id='About' className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi,</span> my name is
                </p>
                <p className='homepage_left_h2'>
                    Khushi Raj
                </p>
                <p className='homepage_left_h3'>
                    Student at <span className='red_color'> Lovely professional University </span>
                </p>
                <p className='homepage_left_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ut nihil cum fugit officiis aperiam ab dolores, nulla, velit, quasi neque nisi nemo eligendi dignissimos cumque laboriosam exercitationem! Esse doloribus veniam repellat distinctio, laborum eligendi soluta quis quidem tenetur. Placeat pariatur id officiis debitis minima molestias cumque aut impedit in.
                </p>
                <div className='homepage_logo_container'>
                <a href='https://github.com/KhushiRaj23' target='_blank'>
                    <img 
                    src={github}
                    alt='github_iconImg'
                    className='homepage_logo'
                    />
                </a>
                <a href='https://www.linkedin.com/in/khushiraj23/' target='_blank'>
                    <img 
                    src={linkedin}
                    alt='github_iconImg'
                    className='homepage_logo'
                    />
                </a>
            </div>

            
            <a href='#'target='_blank' className='homepage_left_button'>
                Get in Touch
            </a>
            </div>
            <div className='homepage_right'>
                <img src={bg} alt='img'></img>
               
            </div>
        </div>
    )
}
export default HomePage