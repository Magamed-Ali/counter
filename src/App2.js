import React, {Component} from "react";

export default class App2 extends Component {
    state = {
        posts: [
            {id: "abc1", name: "JS Basics"},
            {id: "abc2", name: "JS Advanced"},
            {id: "abc3", name: "React JS"}
        ]
    };

    render() {
        return(
            <div className="App2">
                {this.state.posts.map((post,index) => (
                    <h2 key={index}>{post.name}</h2>
                ))}
            </div>
        )
    }

}