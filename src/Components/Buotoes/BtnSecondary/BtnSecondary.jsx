import './BtnSecondary.css'

export const BtnSecondary = ({texto, ...props}) => {
    return ( 
        <>
        <button className='btnSecondary' style={props.style}>{texto}</button>
        </>
     );
}