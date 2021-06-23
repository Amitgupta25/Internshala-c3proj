import React from 'react'
import NextCard from './NextCard'
function Footer() {
    return (
        <div className= "whole">
             <h4>NEXT STEPS</h4>
            <div className="next-card">
                    < NextCard 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png"
                        heading="Mathematical Fundamentals"
                        info="The essential tools for mastering algebra, logic, and number theory!"
                    />
                    < NextCard 
                        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png"
                        heading="Computer science Fundamentals"
                        info="Wrap your mind around computational thinking, from everyday tasks to algorithms."
                    />
            
            </div>

            
        </div>
    )
}

export default Footer
