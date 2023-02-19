import React , {Component} from 'react'
import Divstyle from "./styles/div"
class Styled extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
           <div className="App">
        <Divstyle varient='outline'>
            <h1>Hi I am Sayan Samanta</h1>
         <div>
            <br/>
         </div>
        </Divstyle>
        <div><br/></div>
        <Divstyle>
            <h3>This is a example of styled-components</h3>
         <div>
            <br/>
         </div>
        </Divstyle>
        
      </div>
            </>
        )
    }

}

export default Styled