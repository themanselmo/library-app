import {useState} from 'react'
import styled from 'styled-components'

function Donate({HandleDonation, setFormData, formData}){
    // const [formData, setFormData] = useState({
    //     title: '',
    //     author: '',
    //     image: '',
    //     genre: '',
    //     checkedOut: false,

    // })

const HandleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
}
const HandleSubmit = (e) => {
    e.preventDefault();
    HandleDonation(formData)
}

    return(
        <div>


            <h1>Donation Center</h1>
            <h3>Please fill out the form below to donate a book to our inventory!</h3>
            <Don onSubmit={HandleSubmit} id='form' >
                <ul>
                    <label>Enter Book Title:</label>
                        <input type="text" name='title' value={formData.title} onChange={HandleChange}></input>
                    <label>Enter Book author:</label>
                        <input type="text" name="author" value={formData.author} onChange={HandleChange}></input>
                    <label>Insert cover image URL:</label>
                        <input type="text" name='image' value={formData.image} onChange={HandleChange}></input>
                    <label>Enter Book Genre:</label>
                        <input type="text" name='genre' value={formData.genre} onChange={HandleChange}></input>
                        
                    <label>Enter Book Description:</label>
                        <input type="text" name='description' value={formData.description} onChange={HandleChange}></input>
                    <br></br>

                    <button>Donate!</button>
                </ul>
            </Don>



        </div>
    )
}
export default Donate

const Don = styled.form`
    position: flex;
    label{
        display: block;

        font-weight: lighter;
        font-size: 25px;
    }
    input{

        width:10%;
        padding: 8px 20px;
        margin: 10px 0;
        border: 2px solid red;
        border-style: outset;
        border-radius: 25px 25px 25px 25px;
    }

    
`