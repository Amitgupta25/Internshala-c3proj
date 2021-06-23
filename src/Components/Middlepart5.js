import React from 'react'
import Card from './Card'
import Midintro from './Midintro'

function Middlepart5(props) {
    return (
        <div  className="variousparts">

                        < Midintro
                        number="6"
                        subintro="Logic Machines"
                        subintrodescription="Turn logic into arithmetic machines. Collapse"
                    />


                    <div className="middlepartdescription1" onClick = {props.showmodal}>
                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth_Tables-fQehm6.png"
                        title="Truth Tables"
                        des="If everyone follows the same logic, can you find out what they know?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Basic_Logic_Gates-SuCIgu.png"
                        title="Basic Logic Gates"
                        des="Can you figure out who can figure out the color of their hat?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Combinations-wp6DqR.png"
                        title="Combinations"
                        des="What happens to hat puzzles when there are more hats and more people?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Fredkin_Gates-B8FBqg.png"
                        title="Fredkin Gates"
                        des="Exactly how much can you learn from no one knowing anything?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Binary_Numbers_and_Addition-bJFOa8.png"
                        title="Binary Numbers and Addition"
                        des="Beware! Every pirate is as logical, greedy, and cutthroat as every other pirate"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Creating_a_Mechanical_Adder-yTzxMV.png"
                        title="Creating a Mechanical Adder"
                        des="Solve classic truthteller-liar puzzles where someone else knows the answer."
                         islocked={props.islocked}
                        />
                </div>
            
        </div>
    )
}

export default Middlepart5
