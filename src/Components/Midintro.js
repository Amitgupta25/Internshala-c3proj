import React from 'react'

function Midintro(props) {
    return (
        <div className="middleintroduction">

            <div className="number">
                <p>{props.number} </p>
            </div>
            <div className="subintro">
                <h3 className="subintroheading">{props.subintro}</h3>
                <p className="subintrodescription">{props.subintrodescription}</p>
                
            </div>
                
        </div>
    )
}

export default Midintro
