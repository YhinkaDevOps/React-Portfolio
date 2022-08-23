import React from 'react'
import HTML from "../image/html.png"
import CSS from "../image/css.png"
import JavaScript from "../image/javascript.png"
import REACT from "../image/react.png"
import Tailwind from "../image/tailwind.png"


const Skills = () => {
  return (
    <div name='skills'v>
        <div>
            {/* Container */}
            <div>
                <p>Skills</p>
                <p>These are the technologies I've worked with</p>
            </div>
            <div>
                <div>
                    <img src={HTML} alt="" />
                    <p>HTML</p>
                </div>
                 <div>
                    <img src={CSS} alt="" />
                    <p>CSS</p>
                </div>
                 <div>
                    <img src={JavaScript} alt="" />
                    <p>JAVASCRIPT</p>
                </div>
                 <div>
                    <img src={REACT} alt="" />
                    <p>REACT</p>
                </div>
                 <div>
                    <img src={Tailwind} alt="" />
                    <p>TAILWIND</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills