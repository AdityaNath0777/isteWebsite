// import { AluminiProto } from "../Alumni"
import Footer from "../Footer"
import CoverPage from "../Home/CoverPage"
import AlumniBg from "./alumniBg"
import "./alumni.css";
const AlumniPage = ()=>{
    return(
        <div className="alumni-page">
        <CoverPage />
        <AlumniBg />
        <Footer />
        </div>
    )
}

export default AlumniPage;