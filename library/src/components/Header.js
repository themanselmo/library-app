import logo from '../images/BookStop2.png'
import styled from 'styled-components'

function Header(){
    return(
        <Head id="header">
            
            <img src= {logo}/>

        </Head>
    );
}

export default Header;

const Head = styled.div`
    /* position: absolute; */
    margin-left: 12%;
    width: 185px;
    height: 45px;
    float:right;

`