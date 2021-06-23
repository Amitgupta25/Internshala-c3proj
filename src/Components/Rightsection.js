import React from 'react'

function Rightsection(props) {
    return (
        <div className="rightsection">
            <div className="image">
                <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png " alt=""/>
            </div>
            <div className="values">
                <div className="leftvalue">
                    <p className="number">37</p>
                    <p className="subheading">Interactive quizzes</p>
                </div>
                <div className="rightvalue">
                    <p className="number">265+</p>
                    <p className="subheading">Concepts and exercises</p>
                </div>
            </div>
            <div className="startcourse">
                <button onClick = {props.showmodal} >Start Course</button>
            </div>
        </div>
    )
}

export default Rightsection
