import {Link} from 'react-router-dom'

function Nav(){
    return (
        <ul id="navBar">
            <Link to={'/'}><li id="home">Home</li> </Link>
            <Link to={'/books/search'} ><li id="search">Search</li> </Link>
            <Link to={'/books/add'}><li id="donate">Donate</li></Link>
            <Link to={''}><li id="return">Return</li></Link>

        </ul>
    )
}

export default Nav