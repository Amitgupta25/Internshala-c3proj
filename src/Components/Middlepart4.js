import React from 'react'
import Card from './Card'
import Midintro from './Midintro'

function Middlepart4(props) {
    return (
        <div  className="variousparts">

                    < Midintro
                    number="5"
                    subintro="Competitive Games"
                    subintrodescription="What will your opponent do? Logic it out! Collapse"
                    />


                    <div className="middlepartdescription1" onClick = {props.showmodal}>
                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate-2hzzdS.png"
                        title="Poisoned Chocolate"
                        des="Don't take the last chocolate!"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Luk_Tsut_Ki-YkvdnC.png"
                        title="Luk Tsut K'i"
                        des="Find the complete solution to a classic game "
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Puppies_and_Kittens-MyD5W8.png"
                        title="Puppies and Kittens"
                        des="Solve a fuzzier, livelier variant of the poisoned chocolate game."
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate_II-jCwMSc.png"
                        title="Poisoned Chocolate II"
                        des="What happens when the chocolate comes in rectangles?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Game_Search_Algorithms-8CTK46.png"
                        title="Game Search Algorithms"
                        des="Learn how simple AI systems approach game strategy."
                         islocked={props.islocked}
                        />

                </div>
            
        </div>
    )
}

export default Middlepart4
