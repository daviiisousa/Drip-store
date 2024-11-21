import './Input.css'

export const Input = ({...props}) => {
    return ( 
        <>
            <input className="inputComponent" placeholder={props.placeholder} type={props.type} id={props.id} style={props.style} />
        </>
     );
}