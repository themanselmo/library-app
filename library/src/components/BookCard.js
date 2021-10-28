import {useState} from 'react'
import noImage from '../images/noImage.jpeg'
import styled from 'styled-components'
function BookCard({book, book:{image,title,author,genre, description, checkedOut}, handleRentBook}) {

    const [rent, setRented] = useState(checkedOut)
    const [face, setFace] = useState(false)


    const HandleClick = (book) => {
        setRented(!rent)
        handleRentBook(book)
    }
    const handleFlip = () => {
        setFace(!face)
    }
    return(
        
        <Card id="card">
            {face ?  
                <Back>
                    <h3>Book Description:</h3>
                    <p id='description'>{description}</p>
                    <button onClick={() => handleFlip()}>Show Book Info</button>
                </Back>

                   :     
                <div>
                   {image === '' ? image = noImage : null}
           
                   <img id='card-image' src={image}/>
                   <h3>{title}</h3>
                   <h4>{author}</h4>
                   <h4>{genre}</h4>
                   <button onClick={() => handleFlip()}>Synopsis</button>

                    <div className='rent'>
                       { 
                           rent ? <p>Unavailable</p> :
                               <button onClick={()=> HandleClick(book)}>Rent Me</button>
                       }
                    </div>
                    
                </div>    
                }

                
            

             
                
            
        
        </Card>

    )
}
export default BookCard
const Back = styled.div`
    text-align:center;

`
const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    height: 450px;
    background-color: white;
    color: black;
    border-radius: 25px 25px 25px 25px;
    border-style: outset;
    border-color: red;
    
    #description{
        font-size: 75%;
    }
    .rent{
        margin-top: 30px;
    }
    button{
        
        font-family: Merriweather, serif;
        color:white;
        border-style: inset;
        border-radius: 25px 25px 25px 25px;
        border-color: white;
        background-color: red;
    }
    :hover {
        width: 320px;
        
    }

    img{
        width:200px;
        height: 200px;
        }
    
   
    
    
`