import {useState} from 'react'
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
            <form onSubmit={HandleSubmit} id='form' >
                <label>Enter Book Title:</label>
                    <input type="text" name='title' value={formData.title} onChange={HandleChange}></input>
                <label>Enter Book author:</label>
                    <input type="text" name="author" value={formData.author} onChange={HandleChange}></input>
                <label>Insert cover image URL:</label>
                    <input type="text" name='image' value={formData.image} onChange={HandleChange}></input>
                <label>Enter Book Genre:</label>
                    <input type="text" name='genre' value={formData.genre} onChange={HandleChange}></input>
                <br></br>

                <button>Donate!</button>
            </form>



        </div>
    )
}
export default Donate