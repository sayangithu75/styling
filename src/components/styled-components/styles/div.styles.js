import styled , {keyframes} from 'styled-components';
import breakpoint from './breakpoint';


const rotate1 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const rotate2 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;




export const Divstyle=styled.div`
display:inline-block;
width:100wh;
margin:30px 30px;
padding:5px 5px;
background-color:${(props) => props.varient==='outline' ? 'white' :'#4caf50'};
color:${(props) => props.varient==='outline' ? '#4caf50' :'#fff'};
border-radius:20px;
/* animation-name: ${(props)=>props.varient==='outline'?rotate1:rotate2}; */
@media only screen and (${breakpoint.device.xs}){
  animation-name: ${(props)=>props.varient==='outline'?rotate1:rotate2};
} 
@media only screen and (${breakpoint.device.sm}){
  animation-name: ${rotate1};
}
@media only screen and (${breakpoint.device.lg}){
  animation-name:${rotate2};
}
animation-duration: 5s;
animation-timing-function: linear;
animation-iteration-count: infinite;
`

//animation: ${rotate} 2s linear infinite;