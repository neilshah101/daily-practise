import { Component } from 'react'
import './Books.css'

class Books extends Component {
    render () {

        const books = this.props.books
        const bookItems = books.map((book,index) =>{
            return <div className = "book-container">
                
                <div>
                    <h2>{book.title}</h2>
                </div>
                <div>
                    <img src= {`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}?raw=true`} alt =""/>
                </div>
                <div>
                    <p><b>Author: {book.author}</b></p>
                </div>
                <div>
                    <p><b>Language: {book.language}</b></p>
                </div>
                <div>
                    <p><b>Country: {book.country}</b></p>
                </div>
                <div>
                    <p><b> Total Pages : {book.pages}</b></p>
                </div>
                <div>
                    <p><b>Pushlished Year: {book.year}</b></p>
                </div>
                <div>
                    <button><a href={book.link}><b>Read Here </b></a></button>
                </div>
            </div>
        })
        return (
            <div>
                <div>
                   <h1>Best books Of the Month</h1>
                </div>
                <div className ="all-book-container">
                    {bookItems}
                </div>
            </div>
        )
    }
}

export default Books