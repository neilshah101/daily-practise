import { Component } from "react"


class UpdateBook extends Component {

    constructor (props) {
        super(props)
        const { book_id } = props.match.params
        this.state ={
            book_id : book_id,
            title:"",
            genre: "",
            publisher: "",
            year: "",
            imagelink: ""

        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSave =() => {

       const book_id = this.state.book_id
       console.log(book_id)
        fetch (`http://localhost:8080/update-book/${book_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                book_id:this.state.book_id,
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imagelink: this.state.imagelink
            })
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('/all-books')
            }
        })
    }


    render() {
        return(
            <div>
                <div>
                    <h1> Update Book </h1>
                </div><br></br>
                <div>
                    <label>Book Title: </label>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Book Title" name="title" />
                </div><br></br>
                <div>
                    <label>Book Genre: </label>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Book Genre" name="genre" />
                </div><br></br>
                <div>
                    <label>Book Publisher: </label>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Book Publisher" name="publisher" />
                </div><br></br>
                <div>
                    <label>Published Year: </label>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Published Year" name="year" />
                </div><br></br>
                <div>
                    <label>Image Url: </label>
                    <input type="text" onChange = {this.handleOnChange} placeholder="Image Url" name="imagelink" />
                </div><br></br>
                <div>
                    <button onClick = {this.handleSave}>Update</button>
                </div><br></br>
            </div>
            
        )
    }
}

export default UpdateBook