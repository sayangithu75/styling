import styled from 'styled-components';


export const Styledbutton=styled.button`
margin:10px 10px;
padding:5px 5px;
background-color:${(props) => props.varient==='outline' ? '#fff' :'#4caf50'};
color:${(props) => props.varient==='outline' ? '#4caf50' :'#fff'};
text-align:center;
text-decoration:none;
border-radius:20px;
`
