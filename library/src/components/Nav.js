import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Nav(){
    return (
        <Navi id="navBar">
            <Link to={'/'}><li id="home">Home</li> </Link>
            <Link to={'/books/search'} ><li id="search">Search</li> </Link>
            <Link to={'/books/new'}><li id="donate">Donate</li></Link>
            <Link to={'/books/return'}><li id="return">Return</li></Link>
        </Navi>
    )
}

export default Nav

const Navi = styled.div`
    margin-top:130px;
    background-color: black; 
    display: flex;
    align-items: center;
    border-style: groove;
    border-style: outset;
    border-radius: 0px 0px 25px 25px;
    text-align: center;

    li{
        display:inline-block;
        margin: auto;
        font-size: 35px;
        background-color: red;
        color: white;
        text-decoration: none;
        border-style: inset; 
        border-radius:  15px;

        :hover {
            background-color: darkred;
        }
    }
`
