import CoverPage from "../Home/CoverPage";
import Footer from "../Footer"
import { alumini01 } from '../Alumni/images';
import "./Event.css";

const Events = () => {

    return (
        <div className="event-individual">
            <CoverPage />
            <div className="event-indi-container">
                <div className="event-indi-header" >
                    <h1>
                        Event Name
                    </h1>
                </div>
                <div className="event-indi-description">
                    <div className="about-event">
                        <h1 id="animated-line">About</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus itaque quas eaque, magni dolorem amet corrupti ut minus hic! Voluptate tempore fugit impedit illo placeat dolores, quasi dolore autem.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus itaque quas eaque, magni dolorem amet corrupti

                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis maiores ullam commodi illum minus itaque similique enim accusamus iusto quibusdam aliquid doloribus, ipsa, facilis eaque sed alias exercitationem eveniet, amet quod minima. Incidunt, provident voluptatem? Iste similique laudantium fuganventore, numquam molestias fugiat perspiciatis eum vitae obcaecati ad ea laboriosam, doloribus unde totam porro sapiente reprehenderit. Quasi eligendi mollitia quis sequi optio corrupti necessitatibus unde recusandae itaque dolores. In sapiente commodi quia.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus itaque quas eaque, magni dolorem amet corrupti ut minus hic! Voluptate tempore fugit impedit illo placeat dolores, quasi dolore autem.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus itaque quas eaque, magni dolorem amet corrupti ut minus hic! Voluptate tempore fugit impedit illo placeat dolores, quasi dolore autem.

                        </p>
                    </div>
                    <div className="event-img">
                        <img src={alumini01} alt="event-name" />
                    </div>
                </div>
                <div className="event-register">
                    <div className="register-btn">
                        <button>Register Now</button>
                    </div>
                </div>
                <div className="event-indi-info">
                    <h1>INFORMATION</h1>
                    <div className="info-table-container">
                        <table className="info-table">
                            <tbody>
                                <tr>
                                    <td className="event-info-key" >Date</td>
                                    <td className="event-info-val " id="event-info-date">29 Apr 2023-30 Apr 2023</td>
                                </tr>
                                <tr>
                                    <td className="event-info-key" >
                                        Opening Hours
                                    </td>
                                    <td className="event-info-val " id="event-info-op-hrs">
                                        Monday to Saturday from 11 pm to 6 pm
                                    </td>
                                </tr>
                                <tr>
                                    <td className="event-info-key" >
                                        Location
                                    </td>
                                    <td className="event-info-val " id="event-info-loc">
                                        <a href="https://google.co.in" target={'_blank'} rel={'noreferrer'} >
                                            MEET LINK
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="event-info-key" >
                                        Address
                                    </td>
                                    <td className="event-info-val " id="event-info-addr">
                                        Main Street 2, 12101 Berlin
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;