import { Component } from "react"
import { NavLink } from "react-router-dom";

import './BookListPage.css'


export class BookList extends Component{
    

    render() {
        const books = this.props.books
        console.log(books)
        const bookItems = books.map((book , index) => {
            return <div  key = {book.book_id} className="card" style={{width: "18rem"}}>
                    <div >
                        <div>
                        <img src={`${book.imagelink}`} className="card-img-top" alt="..."/>
                        </div>
                        <div>
                            <h2>{book.title}</h2>
                        </div>
                        <div>
                            <h5>{book.genre}</h5>
                        </div>
                        <div>    
                            <h5>Author: {book.publisher}</h5>
                        </div>
                        <div>
                            <h5>Published Year{book.year}</h5>
                        </div>
                        <div>
                            <button><NavLink to= {`/update-book/${book.book_id}`}>Update-Books</NavLink></button>
                        </div>    
                        
                            <button onClick= {() => this.props.onDelete(book.book_id)}>Delete This Book</button>
                        
                    </div><br></br>
                </div>
        })

        return(
            <div>
                <div >
                   <h1 className="best-book-h1" >Book List</h1>
                </div>
                <div className="card_flex" >
                    {bookItems}
                </div>
            </div>
        )
    }
}

export class BooksListPage extends Component {
    constructor() {
        super()

        this.state = {
            books:[]
        }
    } 

    componentDidMount() {
        console.log(this.props)
        this.getAllBooks()
    }

    getAllBooks = () =>{
        fetch('http://localhost:8080/all-books')
        .then(response => response.json())
        .then (books => {
            this.setState({
                books:books
            })
        })
    }

    handleOnDelete = (bookId) => {
        console.log(bookId)
        fetch(`http://localhost:8080/delete-book/${bookId}`,{
            method:'DELETE'
        
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('/')
               
            }
        })
        
    }


    render() {
        return (
            <div>
                
                <BookList books= {this.state.books} onDelete = {this.handleOnDelete}/>
            </div>
        )
    }
}










