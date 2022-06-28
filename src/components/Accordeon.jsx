import React, {useState} from 'react'
import ChevronDown from "../assets/Chevron_Down.svg";
import ChevronUp from "../assets/Chevron_Up.svg";

const Accordeon = ({ question }) => {
    const [showReply, setShowReply] = useState(false);
    const { title, reply } = question;


  return (
    <div className="accordeon">
        <header className="accordeon-header">
            <h3>{title}</h3>
            <button className="btn-chevron" onClick={() => setShowReply(!showReply)}>
                <img src={showReply ? ChevronUp : ChevronDown} alt="close/open"/>
            </button>
        </header>
        
        {showReply && <div className="about-reply">
            <p>{reply}</p>
        </div>}
    </div>
  )
}

export default Accordeon