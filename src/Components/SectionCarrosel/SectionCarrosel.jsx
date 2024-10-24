import './SectionCarrosel.css'
import SapatoCarrosel from '../../assets/HomeFotos/Sapatocarrosel.png'

export const SectionCarrosel = () => {
    return ( 
        <>
        <section className='sectionCarrosel'>
            <div>
                <p>Melhores ofertas personalizadas</p>
                <h2>
                Queima de stoque Nike 🔥
                </h2>
                <p>
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <button>teste</button>
            </div>
            <div>
                <img src={SapatoCarrosel} alt="" />
            </div>
        </section>
        </>
     );
}