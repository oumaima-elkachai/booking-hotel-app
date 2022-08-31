import React from 'react';
import styled from 'styled-components'
import {SearchOutlined } from '@ant-design/icons'
const Container= styled.div`
height:70px;
background-color:white;
`
const Wrapper= styled.div`
padding :10px 20px;
display: flex;
justify-content:space-between;

`
const SearchContainer= styled.div`
border : 1px solid lightgray;
display :flex;
align-items:center;
margin-left:700px;
padding:5px;
border:none;
outline: auto ;

`
const Input= styled.input`
border:none;

`
const Left= styled.div`

`
const Right= styled.div`
 display:flex;
 align-items:center;
 justify-content:flex-end;
`
const Center= styled.div`
`
const Language= styled.div`
font-size:14px;
cursor:pointer;
`
const Logo= styled.h1`
font-weight:bold;
color :blue;

`
const MenuItem= styled.div`
font-size:14px;
cursor: pointer ;
margin-left:25px;

`

const Naavbar = () => {
   
    return (
    <Container>
        <Wrapper>
            <Left><Logo><a href='/home'>TuniBooking.</a></Logo></Left>
            <Center>
                <SearchContainer>
                    <Input/>
                    <SearchOutlined style={{color:"grey" ,fontSize:16}} />
                </SearchContainer></Center>
            <Right>
                 <MenuItem>Register</MenuItem>
                 <MenuItem>Sign In</MenuItem>
            <MenuItem>
                <Language>EN</Language>
            </MenuItem>
            </Right>
            
        </Wrapper>
        
    </Container>
    
    );
};

export default Naavbar;