import React, {Component} from "react";
import {Posts} from "./components/Posts";

export default class App2 extends Component {
    state = {
        posts: [
            {id: "abc1", name: "JS Basics"},
            {id: "abc2", name: "JS Advanced"},
            {id: "abc3", name: "React JS"}
        ]
    };

    handleSomething = () => {
        console.log('это я')
    }
    removePost = (e) => {
            this.setState({posts: this.state.posts.filter(post => post.id !== e)})
    }

    render() {
        const {posts} = this.state

        return(
            <div className="App2">
               <Posts posts={posts} del={this.removePost}/>
            </div>
        )
    }

}