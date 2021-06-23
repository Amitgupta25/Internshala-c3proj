import React from 'react'
import Card from './Card'
import Midintro from './Midintro'

function Middlepart6(props) {
    return (
        <div  className="variousparts">

                        < Midintro
                        number="7"
                        subintro="Advanced Knights and Knaves"
                        subintrodescription="Uncover liars on this island of logic! Collapse"
                    />


                    <div className="middlepartdescription1" onClick = {props.showmodal}>
                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Indirection-PZKKoF.png"
                        title="Indirection"
                        des="Can you trick a liar into telling you the truth?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves_En_Masse-7DRnSV.png"
                        title="Knights and Knaves En Masse"
                        des="What happens when you try to do logic at a big island party?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jokers-wSQW6c.png"
                        title="Jokers"
                        des="Solve tricky variants of knights and knaves puzzles where some residents can behave like either."
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Oher_Variations-PnIvJz.png"
                        title="Other Variations"
                        des="Twist your mind around these unusual variants."
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Humans_and_Vampires-zhcWOo.png"
                        title="Humans and Vampires"
                        des="Now there are four types of island resident: can you still work out the truth?"
                         islocked={props.islocked}
                        />

                        < Card 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Challenges-o42cgt.png"
                        title="Challenges"
                        des="Challenge yourself with our hardest selection of logic puzzles."
                         islocked={props.islocked}
                        />
                </div>

            
        </div>
    )
}

export default Middlepart6
