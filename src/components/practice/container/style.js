import React from "react"
import Styledbutton from '../button/Button.js';
import Cardstyle from '../card/Card.js'

function Style() {
    return (
      <div className="App">
        <Cardstyle varient='outline'>
        <Styledbutton>Styled Button</Styledbutton>
         <div>
            <br/>
         </div>
         <Styledbutton varient='outline'>Styled Button</Styledbutton>
        </Cardstyle>
        <div><br/></div>
        <Cardstyle>
        <Styledbutton>Styled Button</Styledbutton>
         <div>
            <br/>
         </div>
         <Styledbutton varient='outline'>Styled Button</Styledbutton>
        </Cardstyle>
        
      </div>
    );
  }

  export default Style
  