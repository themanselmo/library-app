import React from 'react'
import ReturnBookContainer from './ReturnBookContainer'



const Return = ({books, handleReturn}) => {

    return (
        <div>
            <h4>Choose a book to return.</h4>
            <ReturnBookContainer books={books} handleReturn={handleReturn}/>
        </div>
    )
}

export default Return
