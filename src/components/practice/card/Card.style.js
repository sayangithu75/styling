import styled from 'styled-components';

export const Cardstyle=styled.button`
margin:30px 30px;
padding:5px 5px;
background-color:${(props) => props.varient==='outline' ? '#fff' :'#4caf50'};
color:${(props) => props.varient==='outline' ? '#4caf50' :'#fff'};
border-radius:20px;

`