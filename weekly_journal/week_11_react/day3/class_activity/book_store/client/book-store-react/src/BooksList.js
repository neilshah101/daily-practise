import { Component } from 'react'

class Books extends Component {
    render() {
       const books = this.props.books
       const bookItems = books.map((book,index) =>{
           return<li>{book.title} - {book.author}</li>
       })
        return(
            <div>
                {bookItems}
            </div>
        )
    }
}

export default Books