import './SectionFinalizarCompra.css'

export const SectionFinalizarCompra = ({children, ...props}) => {
    return ( 
        <>
            <section className="sectionInputs" style={props.style}>
                {children}
            </section>
        </>
     );
}