export const ProjectsProto = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <h1>Projects</h1>
                <p>Here are some projects that we have worked on:</p>
                <span className="viewMore">View More</span>
            </div>
            <div className="project-container">
                <div className="project">
                    <h2>Project 1</h2>
                    <p> <strong> Q-Fly Agent</strong>, a <em>smart AI enabled Drone</em> which delivers the courier on the customer's doorstep on time having 99.67% accuracy and improving each day.</p>
                </div>
                <div className="project">
                    <h2>Project 2</h2>
                    <p> <strong> PaiseBachao</strong>, a useful chrome extension used for <em>comparing past and present prices</em> of the products available on e-commerce and alerts you when price gets low.</p>
                </div>
                <div className="project">
                    <h2>Project 3</h2>
                    <p> <strong> Enjoy Buddy</strong>, an <em>AI enabled Mental Health</em> product that enables/helps you enjoy every bit of life and also assits to tackle depression and lonliness. </p>
                </div>
            </div>
        </div>
        )
}