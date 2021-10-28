import {useState} from 'react'
import noImage from '../images/noImage.jpeg'
import styled from 'styled-components'
function ReturnBookCard({book, book:{image,title,author,genre, checkedOut}, handleReturnBook}) {

    const [rent, setRented] = useState(checkedOut)

    const HandleClick = (book) => {
        setRented(!rent)
        handleReturnBook(book)
    }
    return(
        
        <Card id="card">
            {image === '' ? image = noImage : null}
            <img id='card-image' src={image}/>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h4>{genre}</h4>
            { 
                !rent ? <p>Back in Stock</p> :
                    <button onClick={()=> HandleClick(book)}>Return Me</button>
            }
        </Card>

    )
}
export default ReturnBookCard

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    height: 450px;
    background-color: white;
    color:black;
    border-radius: 25px 25px 25px 25px;
    border-style: outset;
    border-color: red;
    
    button{
        font-family: Merriweather, serif;
        color:white;
        border-style: inset;
        border-radius: 25px 25px 25px 25px;
        border-color: white;
        background-color: red;

          :hover {
            background-color: darkred;
        }
    }
    img{
        width:200px;
        height: 200px;
    }

    :hover {
        width: 320px;
        
    }

    /* #card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } */
    
    
`