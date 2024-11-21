import './BtnDisabled.css'

export const BtnDisabled = ({texto, ...props}) => {
    return ( 
        <>
        <button style={props.style} className='btnDisabled'>{texto}</button>
        </>
     );
}