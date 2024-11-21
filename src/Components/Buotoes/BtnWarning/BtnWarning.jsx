import './BtnWarning.css'

export const BtnWarning = ({children, ...props}) => {
    return ( 
        <>
            <button style={props.style} className='btnWarning'>{children}</button>
        </>
     );
}