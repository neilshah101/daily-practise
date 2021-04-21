import React from 'react';
import { connect } from 'react-redux'
// import { useState } from 'react'
// import * as actionCreators from './stores/creators/actionCreators'


function RandomImage (props) {

        const handleGetRandomImage = () => {

            const randomImages = `https://picsum.photos/200/300?random=${new Date().getTime()}`
            props.onAddRandomImage(randomImages)
        } 

        const images = props.images 
        const imageItems = images.map((image) => {
        return <img src = {image} />
    })


    return(
        <div>
            <div>
                <h1>Images</h1>
            </div>
            <div>
                <button onClick ={handleGetRandomImage} >get random image</button>
            </div>
            <div>
                {imageItems}
            </div>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        images: state.imageR.randomImages 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRandomImage: (url) => dispatch({type: 'ADD_RANDOM_IMAGE', payload: url})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImage)