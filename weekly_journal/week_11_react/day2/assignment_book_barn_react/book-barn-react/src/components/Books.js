import { Component } from 'react'
import './Books.css'

class Books extends Component {
    render () {

        const books = this.props.books
        const bookItems = books.map((book,index) =>{
            return <div className="card" style={{width: "18rem"}}>
             <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}?raw=true`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Author: {book.author}</li>
              <li className="list-group-item">Language: {book.language}</li>
              <li className="list-group-item">Country: {book.country}</li>
              <li className="list-group-item">Total Pages : {book.pages}</li>
              <li className="list-group-item">Pushlished Year: {book.year}</li>
            </ul>
            <div className="card-body">
              <button><a href={book.link} className="card-link">Read More</a></button>
            </div>
          </div>
                
        })
        return (
            <div>
                <div className="best-book-h1" >
                   <h1>Best books Of the Month</h1>
                </div>
                <div className="card_flex" >
                    {bookItems}
                </div>
            </div>
        )
    }
}

export default Books