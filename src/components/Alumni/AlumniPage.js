// import { AluminiProto } from "../Alumni"
import Footer from "../Footer"
import { Helmet } from 'react-helmet';
import CoverPage from "../Home/CoverPage"
import AlumniBg from "./alumniBg"
import "./alumni.css";
const AlumniPage = ()=>{
    return(
        <div className="alumni-page">
            <Helmet>
        <title>BVP-ISTE-Alumini</title>
      </Helmet>
        <CoverPage />
        <AlumniBg />
        <Footer />
        </div>
    )
}

export default AlumniPage;