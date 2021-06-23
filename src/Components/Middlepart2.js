import React from 'react'
import Midintro from './Midintro'
import Card from './Card'

function Middlepart2(props) {
    return (
        <div  className="variousparts">

                    < Midintro
                    number="3"
                    subintro="Puzzles and Riddles"
                    subintrodescription="Even trickier puzzles and the tools you need to solve them. Collapse"
                    />


                    <div className="middlepartdescription1" onClick = {props.showmodal}>
                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png"
                        title="Werewolves"
                        des="Who's a werewolf?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png"
                        title="Logical Language"
                        des="Explore the logical use of the words "
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png"
                        title="If A, then B."
                        des="If you do this quiz, you will learn about sentences like this one."
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Elimination_Grids-bpMmxt.png"
                        title="Elimination Grids"
                        des="Solve classic logic elimination puzzles."
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jigsaw_Map-qFUgaS.png"
                        title="Jigsaw Map"
                        des="Where do the pieces go on the map?"
                         islocked={props.islocked}
                        />

                  </div>
                        
        </div>
    )
}

export default Middlepart2
