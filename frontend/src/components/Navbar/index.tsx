import {ReactComponent as GithubIncon} from "assets/img/github.svg";
import './styles.css';


function Navbar(){

return(
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/vinicius1994" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIncon/>
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </a>
        </div>
    </nav>
</header>
);
}

export default Navbar; 