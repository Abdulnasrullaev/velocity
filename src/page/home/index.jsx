import React from "react";
import {Homes, Jobs, Navbar} from "./style";
import detail1 from '../../assest/detail-1.png'
import detail2 from '../../assest/detail-2.png'
import detail3 from '../../assest/detail-3.png'

function Home() {
    return (
        <>
            <Navbar>
                <p className='logo'>
                    velocity
                </p>
                <nav>
                    <li><a href='#'>home</a></li>
                    <li><a href='#'>contact</a></li>
                </nav>
            </Navbar>
            <Homes>
                <p className='title'>
                    this is velocity
                </p>
                <div className='buttons'>
                    <button className='sign-up'>
                        sign up
                    </button>
                    <button className='learn-more'>
                        learn more
                    </button>
                </div>

            </Homes> <br/>
            <Jobs>
                <p className='title'>
                    what we do
                </p>
                <p className='details'>
                    This is some text
                    inside of a div block.
                </p>
                <div className='card-wrapper'>
                    <div className='cards'>
                        <img src={detail1}/>
                        <p className='grapic'>Graphic
                            Design</p>
                        <p className='text'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Suspendisse varius enim
                            in eros elementum tristique.
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={detail2}/>
                        <p className='grapic'>
                            awesome code</p>
                        <p className='text'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Suspendisse varius enim
                            in eros elementum tristique.
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={detail3}/>
                        <p className='grapic'>
                            free template
                        </p>
                        <p className='text'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Suspendisse varius enim
                            in eros elementum tristique.
                        </p>
                    </div>
                </div>
            </Jobs>
        </>
    )
}

export default Home