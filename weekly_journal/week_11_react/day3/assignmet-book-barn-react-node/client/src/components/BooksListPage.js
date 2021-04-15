import { Component } from "react"
import './BookListPage.css'


export class BookList extends Component{
    

    handleDelete = (book_id) => {
        fetch(`http://localhost:8080/delete-book/${book_id}`,{
            method:'DELETE',
            headers:{

            }
        })
    }




    render() {
        const books = this.props.books
        console.log(books)
        const bookItems = books.map((book , index) => {
            return <div className="card" style={{width: "18rem"}}>
                    <div>
                        <div>
                        <img src={`${book.imagelink}`} className="card-img-top" alt="..."/>
                        </div>
                        <div>
                           <input type ="hidden" value = {`${book.book_id}`} />
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
                            <button onClick= {this.handleDelete}>delete this book</button>
                        </div>
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


    render() {
        return (
            <div>
                
                <BookList books= {this.state.books}/>
            </div>
        )
    }
}










