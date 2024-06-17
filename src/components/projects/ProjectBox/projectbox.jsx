import './projectbox.css'

function ProjectBox({ id, image, title, sentances, link }) {
    return (
        <div className='project_box_container'>
            <div className='project_box_image_container'>
                <img src={image} alt={title} />
            </div>
            <div className='project_box_discription_container'>
                <div className='project_box_title'>{title}</div>

                <div className='project_box_sentances_container'>
                    {sentances.map((sentence, index) => (
                        <p key={id}> {sentence}</p>
                    ))}
                </div>
                <p className='project_box_link'>
                    <span>Link</span>
                    <a href='{link}' target='_blank'>{link}</a>
                </p>
            </div>
        </div>
    )
}
export default ProjectBox