import { Component } from "react"
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import * as actionCreators from '../stores/creators/actionCreators'

class BookList extends Component{
    
    handleAddToCart = (book) => {
        this.props.onAddToCart(book)
    }

    handleFavorite = (book) => {
        this.props.onFavorite(book)
    }

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
                            <h5>Genre : {book.genre}</h5>
                        </div>
                        <div>    
                            <h5>Author: {book.publisher}</h5>
                        </div>
                        <div>
                            <h5>Published Year: {book.year}</h5>
                        </div>
                        <div>
                            <button onClick = {() => this.handleFavorite(book)}>Favorite This Book</button>
                        </div>
                        <div>
                            <button onClick = {() => this.handleAddToCart(book)}>Add to Cart</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart :(book) => dispatch(actionCreators.onAddToCart(book)),
        onFavorite :(book) => dispatch(actionCreators.onFavorite(book))
        
    }

}


export default connect(null, mapDispatchToProps)(BookList)


