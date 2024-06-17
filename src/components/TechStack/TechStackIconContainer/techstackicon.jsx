import './techstackiconcontainer.css';


function TechStackIconContainer(props){
    console.log(props);
    return (
        <div className="techstack_icon">
                <img src={props.image} alt={props.altProperty}/>
                <p>{props.title}</p>
            </div>
    )
}
export default TechStackIconContainer