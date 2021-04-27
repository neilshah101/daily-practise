import { Component } from "react"
import BookList from './BookList'
import './BookListPage.css'




class BooksListPage extends Component {
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
       
        const token = localStorage.getItem('jsonwebtoken')
        const username = localStorage.getItem('username')
        const user_id = localStorage.getItem('user_id')


        fetch(`http://localhost:8080/all-books/${user_id}`,{
            method: 'GET', 
            params:{
                user_id: user_id
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
                alert("Book Is deleted")
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


export default BooksListPage










