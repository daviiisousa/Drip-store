import './BtnPrimary.css'

export const BtnPrimary = ({children, texto}) => {
    return ( 
        <>
        <button className='btnPrimary' texto={texto}>{children}</button>
        </>
     );
}