import "./contact.scss"
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
// https://calendly.com/mmeli-chukwunwike/15min
export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2 className="font-link" >I am always open to new ideas or opportunities.</h2>
                <button onClick={() => {
                    openInNewTab("https://calendly.com/mmeli-chukwunwike/15min")
                    }} className="font-link2" style={{fontSize:"20px"}}>Get in touch
                </button>
            </div>
        </div>
    )
}

