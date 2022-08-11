import "./intro.scss"
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/esther.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Esther Chukwunwike</h1>
          <h3>
            <span>
              Student 
              <TypeAnimation
                sequence={[
                  ' Engineer', // Types 'One'
                  1500, // Waits 1s
                  ' Developer', // Deletes 'One' and types 'Two'
                  1500, // Waits 2s
                  ' Content Creator', // Types 'Three' without deleting 'Two'
                  1500,
                ]}
                wrapper='span'
                cursor={true}
                speed= {40}
                repeat={Infinity}
                style={{ fontSize: '25px', color: 'crimson' }}
              />
            </span>
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
