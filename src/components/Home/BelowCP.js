import { SubChaptersProto } from '../SubChapters';
import { EventsProto } from '../Events';
import { AluminiProto } from '../Alumni';
import { useEffect } from 'react';
import { appendScript } from '../../AppendScript';

const BelowCP = () => {
    useEffect(() => {
        appendScript('./gradientBackground.js');
        appendScript('./navLinksAnimate.js');
    }, [])
    return (
        <>
            <SubChaptersProto />
            <EventsProto />
            <AluminiProto />
        </>
    )
}

export default BelowCP;