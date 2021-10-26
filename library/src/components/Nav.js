import {Link} from 'react-router-dom'

function Nav(){
    return (
        <ul id="navBar">
            <Link to={'/'}><li id="home">home</li> </Link>
            <Link to={'/books/search'} ><li id="search">search</li> </Link>
            <Link to={'/books/add'}><li id="donate">Donate</li></Link>
            <Link to={''}><li id="return">return</li></Link>

        </ul>
    )
}

export default Nav