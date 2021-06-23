import React from 'react'
import Card from './Card'
import Midintro from './Midintro'

function Middlepart(props) {
    return (
        <div className="variousparts"  >


                < Midintro
                    number="1"
                    subintro="Introduction"
                    subintrodescription="Put your logic to the test with these warmups"
                />

                <div className="middlepartdescription"  onClick = {props.showmodal}>
                    
                    < Card
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png"
                    title="Warmup Puzzles"
                    des="Get startes with some logic warmups."
                    />

                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png"
                    title="Truth-Seeking"
                    des="Who or what is telling the truth?"
                    />

                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png"
                    title="Strategic Deductions"
                    des="Stretch the information you're given as far as it can go!"
                    />
            </div>
            
        </div>
    )
}

export default Middlepart

