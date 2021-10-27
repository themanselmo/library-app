import {useState} from 'react'
import noImage from '../images/noImage.jpeg'
import styled from 'styled-components'
function BookCard({book, book:{image,title,author,genre, checkedOut}}) {

    const [rent, setRented] = useState(checkedOut)

    const HandleClick = () => {
        setRented(!rent)
    }
    return(
        
        <Card id="card">
            {image === '' ? image = noImage : null}
            <img id='card-image' src={image}/>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h4>{genre}</h4>
            <button onClick={()=> HandleClick()}>{rent ? "Checked out!" : "Rent Me!"}</button>
        </Card>

    )
}
export default BookCard

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    height: 450px;
    img{
        width:200px;
        height: 200px;
        }
    /* #card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } */
    
    
`