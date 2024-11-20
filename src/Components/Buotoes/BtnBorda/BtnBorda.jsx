import './BtnBorda.css'

export const BtnBorda = ({texto, ...props}) => {
    return ( 
        <>
         <button style={props.style} className='btnBorda'>{texto}</button>
        </>
     );
}