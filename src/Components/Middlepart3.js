import React from 'react'
import Card from './Card'
import Midintro from './Midintro'

function Middlepart3(props) {
    return (
        <div  className="variousparts">

                        < Midintro
                        number="4"
                        subintro="Multi-Level Thinking"
                        subintrodescription="If you know that I know that you know... what then? Collapse"
                    />


                    <div className="middlepartdescription1" onClick = {props.showmodal}>
                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Perfect_Information-mqTyGs.png"
                        title="Perfect Information"
                        des="If everyone follows the same logic, can you find out what they know?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors-5jioSi.png"
                        title="Hat Colors"
                        des="Can you figure out who can figure out the color of their hat?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png"
                        title="Hat Colors with More People"
                        des="What happens to hat puzzles when there are more hats and more people?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Red-Eyed_Dragons-v4T9FK.png"
                        title="Red-Eyed Dragons"
                        des="Exactly how much can you learn from no one knowing anything?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Pirates-mMDacg.png"
                        title="Logical Pirates"
                        des="Beware! Every pirate is as logical, greedy, and cutthroat as every other pirate"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves-vNOTMQ.png"
                        title="Knights and Knaves"
                        des="Solve classic truthteller-liar puzzles where someone else knows the answer."
                         islocked={props.islocked}
                        />
                </div>
                            
        </div>
    )
}

export default Middlepart3
