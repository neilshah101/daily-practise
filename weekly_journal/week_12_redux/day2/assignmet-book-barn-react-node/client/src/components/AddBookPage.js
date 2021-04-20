import { Component } from "react"


class AddBookPage extends Component {
    constructor () {
        super()

        this.state ={
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
        fetch ('http://localhost:8080/add-book',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imagelink: this.state.imagelink
            })
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                // take the user to the movies page to show all movies 
                this.props.history.push('/all-books')
            }
        })
    }

    render() {
        return(
            <div>
                <div>
                    <h1> Add Book </h1>
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
                    <button onClick = {this.handleSave}>Save</button>
                </div><br></br>
            </div>
        )
    }
}

export default AddBookPage