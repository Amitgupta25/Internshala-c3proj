import React from 'react'
import Midintro from './Midintro'
import Card from './Card'

function Middlepart1(props) {
    return (
        <div className="variousparts">


            < Midintro
                    number="2"
                    subintro="The Rational Detective"
                    subintrodescription="Eliminate the impossible and uncover the truth! Collapse"
                />


                <div className="middlepartdescription1" onClick = {props.showmodal}>
                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png"
                    title="Riddles of Order"
                    des="What order do these racers finish in?"
                    islocked={props.islocked}
                    />

                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png"
                    title="Crafty Counting"
                    des="Learn strategies for counting that go far beyond just counting."
                    islocked={props.islocked}
                    />

                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png"
                    title="Mystery Containers"
                    des="What's in each of these mystery boxes?"
                    islocked={props.islocked}
                    />

                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png"
                    title="Futoshiki"
                    des="Arrange the numbers to match the inequalities."
                    islocked={props.islocked}
                    />

                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png"
                    title="Shuffles"
                    des="Where did everything get shuffled to?"
                    islocked={props.islocked}
                    />

                    < Card 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png"
                    title="False Information"
                    des="Solve problems where the people giving you hints might be lying."
                    islocked={props.islocked}
                    />
            </div>



        
            
        </div>
    )
}

export default Middlepart1
