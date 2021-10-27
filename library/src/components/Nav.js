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

const Navi = styled.ul`
    /* position: absolute; */
    margin-left: 10%;
    margin-top:130px;
    background-color: black; 
    height: 80px;
    display: flex;
    align-items: center;
    border-style: groove;
    text-align: center;




    li{

        display:inline-block;

        margin: 100px;
        font-size: 35px;
        background-color: red;
        color: white;
        text-decoration: none;
        border-style: inset;

        
    }
`
