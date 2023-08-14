import './hero.css';
import vite from '/images/Vite.png';

export default Hero => {
    return (
        <div className="hero-container">
            <div className={'hello-vite'}>
                <h1>Hello Vite</h1>
            </div>
            <div className="vite">
                <a href="https://vitejs.dev/" target="_blank">
                <img src={vite}/>
                </a>
            </div>
            <div className={'des'}>
                <p>Simple blog template with Vite and Peract.</p>
            </div>
        </div>
    )
}