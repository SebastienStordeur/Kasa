import React, {useState} from 'react'
import { ChevronDown, ChevronUp } from '../assets';

const Accordeon = ({ content }) => {
    const [showReply, setShowReply] = useState(false);
    const { title, reply, equipments } = content;

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
            {showReply && reply && <div className="about-content">
                <p>{reply}</p>
            </div>}
            {showReply && equipments && <div className="about-content">
                {equipments.map(equipment => {
                    return <span key={equipment}>{equipment}</span>
                })}
            </div>}
            
        </div>
    )
}

export default Accordeon