import { ProjectsProto } from './Projects';
import { EventsProto } from './Events';
import { AluminiProto } from './Alumni';
import { useEffect } from 'react';
import { appendScript } from '../AppendScript';

const Home = () => {
    useEffect(() => {
        appendScript('./gradientBackground.js');
        appendScript('./navLinksAnimate.js');
    }, [])
    return (
        <>
            <ProjectsProto />
            <EventsProto />
            <AluminiProto />
        </>
    )
}

export default Home;