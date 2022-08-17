import './works.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Works() {
  return (
    <div className="works" id='works'>
      <div className="right">
        <div className="wrapper">
        <AnimationOnScroll animateIn="animate__bounceIn" initiallyVisible={true}>
            <h1>Interests</h1>
            </AnimationOnScroll>
            <h3>I believe technology will continue to play a <br/> 
            pivotal role in reshaping the way we live and <br/>
            I am passionate about using it to create <br/>
            platforms that will enable others to be <br/>
            more productive and innovative. </h3>
        </div>
      </div>
      <div className="left">
        <span className="wave">👋🏾</span>
      </div> 
    </div>
  )
}
 