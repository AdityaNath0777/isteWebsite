export const EventsProto = () => {
    return (
        <div className="events gradBg">
            <div className="events-header">
                <h1>Events</h1>
                <p>Here are some events that we have planned for the future:</p>
                <span className="viewMore">View More</span>
            </div>
            <div className="events-container">
                <div className="event">
                    <img className='img' src={process.env.PUBLIC_URL + "/events/robo_rumble.png"} alt="robombule event" />
                    <div className="event-info">
                        <h3>Robo Rumble</h3>
                        <p>Robotics competition set up to provide aspiring roboticists with a chance to demonstrate their know-how in the subject.
                            Participants in this robotics competition bring their robots to the arena to compete in races and one-on-one combat. Pushing the opponent's robot off the arena and scoring the most points are the goals. There will be defined start and elimination zones for the competition.</p>
                    </div>
                    <div className="event-date">1 Oct</div>
                </div>
                <div className="event">
                <img className='img' src={process.env.PUBLIC_URL + "/events/tri-pysc-el.jpg"} alt="tri-pysc-el event" />
                    <div className="event-info">
                        <h3>TRI - PSYCH - EL </h3>
                        <p>Technological and cultural Ideathon with mental health as the focus. The competition consists of four rounds, during which the competitors' technical proficiency, public speaking prowess, and understanding of mental health will be evaluated. There is no elimination round; instead, competitors will be evaluated based on the judges' overall report.</p>
                    </div>
                    <div className="event-date">2 Oct</div>
                </div>
                <div className="event">
                    <div className="img"></div>
                    <div className="event-info">
                        <h3>Khel Mela</h3>
                        <p>Wanna have fun in your favorite sport? and with your friends too? Then here it is where whether one know about a game or sport they can have fun with as long as friends are with you.</p>
                    </div>
                    <div className="event-date">3 Oct</div>
                </div>
            </div>
        </div>
    )
}
