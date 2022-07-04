import React, {useState} from 'react'
import ChevronDown from "../assets/Chevron_Down.svg";
import ChevronUp from "../assets/Chevron_Up.svg";

const Accordeon = ({ content }) => {
    const [showReply, setShowReply] = useState(false);
    const { title, reply } = content;

    return (
        <div className="accordeon">
            <header className="accordeon-header">
                <h3>{title}</h3>
                <button 
                    className="btn-chevron" 
                    onClick={() => setShowReply(!showReply)}
                >
                    <img src={showReply ? ChevronUp : ChevronDown} alt="close/open" className="chevron"/>
                </button>
            </header>
            {showReply && <div className="about-content">
                <p>{reply}</p>
            </div>}
        </div>
    )
}

export default Accordeon