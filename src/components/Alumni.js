import { alumini01, alumini02, alumini03 } from "./Alumni/images";
export const AluminiProto = () => {
    return (
        <div className="alumini">
            <div className="alumini-header">
                <h1>What Our Student Members Say</h1>
                <h3>Worked with over <span >150+ members  in different branches</span></h3>
            </div>
            <div className="alumnus-container">
                <div className="alumnus">
                    <img className="img" src = {alumini01} alt="alumni ki pic"/>
                    <div className="info">
                        <h3>Tiger Sharma</h3>
                        <p>Cheerful, Supporting and lots of fun while growing together. The envinronment is just so cool. Loved to be a part of it.</p>
                    </div>
                </div>
                <div className="alumnus">
                    {/* <div className="img"></div> */}
                    <img className="img" src = {alumini02} alt="alumni ki pic"/>
                    <div className="info">
                        <h3>Gajraaj Rajput</h3>
                        <p>Best envinronment to develop your social, technical and soft skills. All the events organised are insightful and fun. Really grateful to be a part of this wonderful society.</p>
                    </div>
                </div>
                <div className="alumnus">
                    {/* <div className="img"></div> */}
                    <img className="img" src = {alumini03} alt="alumni ki pic"/>
                    <div className="info">
                        <h3>Mayur Singh</h3>
                        <p>From being a member to executive and then vice-chairperson of the society, I was very grateful for all the support given to me. Thanks a lot everyone.</p>
                    </div>
                </div>
            </div>
            {/* <button id="joinUs">Join Us</button> */}
        </div>
    )
}