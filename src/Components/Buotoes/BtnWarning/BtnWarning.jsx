import './BtnWarning.css'

export const BtnWarning = ({texto, ...props}) => {
    return ( 
        <>
            <button style={props.style} className='btnWarning'>{texto}</button>
        </>
     );
}