import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Features = ()=>{

    return (
        <div className="Featured ">
            <div className="top ">
                <div className="title flex ">
                    <h2>Total</h2>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
            <div className="bottom flex column">
                <div className="chart-container">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
                </div>
            </div>
        </div>
    )
}

export default Features