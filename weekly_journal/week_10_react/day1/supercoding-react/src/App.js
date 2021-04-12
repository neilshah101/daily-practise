import React, {Component} from 'react'
import './App.css'
import Menu from './Menu'
import Reviews from './Reviews'
import PostsList from './Posts'










class App extends Component {
  render() {

    const posts=[
      {title:"Hello Watchkit", body:"Last month Apple released the anticipated Watchkit Framework for developers in the form if iOS 8.2 beat SDK release. The WatchKit framwork enables the developers to create Apple Watch application. In this arlicle we are going to focus on the basics of getting started with WatchKit framework and developing apps for the Apple Watch ", comments:" 12 comments", likes:"124 likes"},
      {title:"Introduction to Swift", body:"Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX application. Swift is a fairly new language and still in development but clearly reflects the intentions and the future direction. This article will revolve around the basic concept in the swift language and how can get started. ", comments:"15 comments", likes:"45 likes"}

    ]

    return(
      <div>
        <Menu />
        <Reviews/>
        <PostsList allposts= {posts}/>

      </div>
    )
  }
}














export default App;
