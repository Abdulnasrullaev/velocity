import React from "react";
import {EndTitle, Section, Service} from "./style";
import service1 from '../../assest/service-1.png'
import service2 from '../../assest/service-2.png'
import image from '../../assest/IMAGE.png'

function About() {
    return (<>
        <Service>
            <p className='title'>
                services <br/>
                <span className='detail'>
                    This is some text
                    inside of a div block.
                    </span>
            </p>
            <div className='card-wraper'>
                <div className='cards'>
                    <img src={service1}/>
                    <p className='service'>
                        SERVICES one
                    </p>
                    <p className='lorem'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Suspendisse varius enim in eros
                        elementum tristique.Lorem ipsum
                        dolor sit amet, consectetur
                        adipiscing elit. Suspendisse
                        varius.
                    </p>
                    <button>
                        learn more
                    </button>
                </div>
                <div className='cards'>
                    <img src={service2}/>
                    <p className='service'>
                        SERVICES two
                    </p>
                    <p className='lorem'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Suspendisse varius enim in eros
                        elementum tristique.Lorem ipsum
                        dolor sit amet, consectetur
                        adipiscing elit. Suspendisse
                        varius.
                    </p>
                    <button>
                        learn more
                    </button>
                </div>
            </div>
        </Service>
        <Section>
            <p className='title'>
                tab section <br/>
                <span>
                        This is some text inside
                        of a div block.
                    </span>
            </p>
            <div className='buttons'>
                <button className='active'>tab button
                    1
                </button>
                <button>tab button 2</button>
                <button>tab button 3</button>
            </div>
            <div className='sections'>
                <img src={image}/>
                <p className='some-text'>
                    some title here <br/>
                    <span>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Suspendisse varius enim
                            in eros elementum tristique.
                            Duis cursus, mi quis viverra ornare,
                            eros dolor interdum nulla,
                            ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus
                            id rutrum lorem imperdiet. Nunc ut
                            sem vitae risus tristique posuere.
                        </span>
                </p>
            </div>
        </Section>
        <EndTitle>
            <div className='cardss'>
                <p>
                    about velocity <br/> <br/>
                    <span>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Suspendisse varius enim in eros
    elementum tristique. Duis cursus,
    mi quis viverra ornare, eros dolor
    interdum nulla, ut commodo diam libero
    vitae erat.
                    </span>
                </p>

            </div>
            <div className='cardss'>
                <p>
                    useful links
                </p>
<nav>
    <li>Phasellus gravida semper nisi</li> <hr/>
    <li>Suspendisse nisl elit</li> <hr/>
    <li>Dellentesque habitant morbi</li> <hr/>
    <li>Etiam sollicitudin ipsum</li> <hr/>
</nav>
            </div>
            <div className='cardss'>
                <p>
                   social
                </p>
<nav>
    <li>twitter</li><hr/>
    <li>facebook</li><hr/>
    <li>pinterest</li><hr/>
    <li>google</li><hr/>
    <li>webflow</li><hr/>
</nav>
            </div>
        </EndTitle>
    </>)
}

export default About
