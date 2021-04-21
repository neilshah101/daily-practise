import React from 'react';
import { connect } from 'react-redux'



function FavoriteBook(props) {


    const favorites = props.favorites 
    const favoriteItems = favorites.map((favorite, index) => {
        return <div  key = {favorite.book_id} className="card" style={{width: "18rem"}}>
                    <div >
                        <div>
                        <img src={`${favorite.imagelink}`} className="card-img-top" alt="..."/>
                        </div>
                        <div>
                            <h2>{favorite.title}</h2>
                        </div>
                        <div>
                            <h5>{favorite.genre}</h5>
                        </div>
                        <div>    
                            <h5>Author: {favorite.publisher}</h5>
                        </div>
                        <div>
                            <h5>Published Year: {favorite.year}</h5>
                        </div>                        
                    </div><br></br>
                </div>
    })
    return(
        <div>
            <div>
                <h1 className="best-book-h1" >Favourite Books</h1>
            </div>
            <div className="card_flex" >
                    {favoriteItems}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteR.favorite
    }
}

export default connect(mapStateToProps)(FavoriteBook)