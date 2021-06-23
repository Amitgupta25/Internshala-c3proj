import React from 'react'

function NextCard(props) {
    return (
        <div className="footerside">
            <div className="nextimage">
                <a href="#">
                    <img src={props.src} alt="" />
               
                </a>
            </div>
            <div className="nextdata">
                <h2>
                    <a href="#" className="sameclass" >

                        {props.heading}
                        
                    </a>

                   
                </h2>

                <a href="#" className="data">{props.info}</a>

                            
                  
            </div>
            
        </div>
    )
}

export default NextCard
