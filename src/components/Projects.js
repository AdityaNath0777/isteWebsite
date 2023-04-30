import {softech} from './Alumni/images';
export const ProjectsProto = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <h1>Student Interests Groups (SIG)</h1>
                <p>Here are some projects that we have worked on:</p>
            </div>
            <div className="project-container">
                <div className="project">
                    <h2>ELECTRONIKA</h2>
                    <img className='electronika' src={process.env.PUBLIC_URL + "/subchaps/electronika.jpg"} alt="electronika logo" />
                    <p>This SIG controls all the electrical and robotics related events. It has successfully conducted many workshops on Drone making, home automation and self driving cars.</p>
                </div>
                <div className="project">
                    <h2>SOFTECH</h2>
                    <img src={softech} alt="softech logo" />
                    <p>All coding related events are hosted by this SIG. It has conducted workshops on web development and machine learning and plans to continue with the tradition. </p>
                </div>
                <div className="project">
                    <h2>SAHITYE</h2>
                    <img src={process.env.PUBLIC_URL + "/subchaps/sahitye.png"} alt="sahitye logo" />
                    <p>The literary SIG of ISTE. This is for all the closeted poets and writers. Here we provide a platform for all the non-technical ideas that your mind can fathom. We organise workshops on public speaking and other literary skills.</p>
                </div>
                <div className="project">
                    <h2>PIXEL CRAFT</h2>
                    <img className='pixelcraft' src={process.env.PUBLIC_URL + "/subchaps/pixelcraft (1).png"} alt="pixel craft logo" />
                    <p>This SIG deals with all the designing work of the society. This SIG is behind all the eye-catching posters and stories that we see on ISTE's social media handles. One  can say that this SIG works as an ornament to the society.</p>
                </div>
            </div>
        </div>
        )
}