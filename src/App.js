import React, {useState} from 'react'
import Previous from './Components/Previous'
import Footer from './Components/Footer'
import Middlepart from './Components/Middlepart'
import Header from './Components/Header'
import About from './Components/About'
import Middlepart1 from './Components/Middlepart1'
import Middlepart2 from './Components/Middlepart2'
import Middlepart3 from './Components/Middlepart3'
import Middlepart4 from './Components/Middlepart4'
import Middlepart5 from './Components/Middlepart5'
import Middlepart6 from './Components/Middlepart6'
import Backgroundlayer from './Components/Backgroundlayer'

function App() {

  const [modaldis , setmodal] = useState("none");
  function showmodal() {
    setmodal("block");
    document.body.style.overflow = "hidden"
  }

  return (
    <div className="overall">

        < Backgroundlayer modalvalue={modaldis} setmodal={setmodal}/>
    
        <div className="backcolor">

             <div className="headerdiv">
                 
                  < Header  showmodal={showmodal} />

              </div>

              <div className=" starting">
                  < Previous />

                  < About showmodal={showmodal} />
              </div>

          </div>
       

        < Middlepart showmodal={showmodal} islocked="false"/>

        < Middlepart1 showmodal={showmodal} islocked="true"/>

        < Middlepart2 showmodal={showmodal} islocked="true"/>

        < Middlepart3 showmodal={showmodal} islocked="true"/>
        
        < Middlepart4  showmodal={showmodal} islocked="true"/>
        
        < Middlepart5  showmodal={showmodal} islocked="true"/>

        < Middlepart6 showmodal={showmodal} islocked="true"/>

        < Footer />

      
    </div>
  )
}

export default App

