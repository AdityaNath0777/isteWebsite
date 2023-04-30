import Navbar from "../Navbar";
import './Home.css'

const CoverPage = () => {
    return (
        <div className="cover-page">
            <Navbar />
            <div className="cover-page-content">
                <div className="cover-page-text">I believe there is <br></br>a better way of <br></br><span id="animated-text"> doing things</span></div>
                <iframe title="iste-gif" src="https://giphy.com/embed/WXmx86CVrJAOEwwjPu" width="300" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default CoverPage;