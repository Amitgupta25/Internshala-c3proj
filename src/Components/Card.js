import React from 'react'
import LockIcon from '@material-ui/icons/Lock';

function Card(props) {

        const locklayer =
            <div className="locklayer">
                < LockIcon style={{fontSize:"2rem ",color:"white"}} />

            </div>

            const showmessage =
            <div className="lockedimagemessage">
                <div className="lockedimage">Included with <br />Brilliant premium </div>

            </div>    

    return (
        <div className="importantcard">
            <div className="lockimagecontainer">
                <img src={props.src} alt="" className="cardimage" />
                {props.islocked === "true" ? locklayer: null}
                {props.islocked === "true" ? showmessage: null}
            </div>

            <h2 className="cardheading">{props.title}</h2>
            <p className="carddescription">{props.des}</p>

            <div className="progress"></div>
            
        </div>
    )
}

export default Card
