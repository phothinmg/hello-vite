import './hero.css';
import vite from '/images/Vite.png';

export default Hero => {
    return (
        <div className="hero-container">
            <h1>Hello Vite</h1>
            <div className="vite">
                <a href="https://vitejs.dev/" target="_blank">
                <img src={vite}/>
                </a>
            </div>
        </div>
    )
}