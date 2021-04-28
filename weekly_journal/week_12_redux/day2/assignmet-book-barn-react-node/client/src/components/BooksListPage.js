import axios from "axios"
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


        axios.get(`http://localhost:8080/all-books/${user_id}`)
        .then (response => {
            console.log(response)
            if (response.data.error){
                console.log(response.data.error)
            }else{
                this.setState({
                    books:response.data
                })
            }
            
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










