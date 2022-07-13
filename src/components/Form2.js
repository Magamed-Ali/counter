import React, {Component} from "react";


/* условия для поля ввода  onSubmit*/


export default class Form2 extends Component{
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
        this.firstNameRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.cardRef.current.value.length <= 16){
            alert('invalid card number');
            return;
        }

        /*if (this.cardRef.current.value.length <= 16){
            alert('invalid card number');
            return;
        }*/
        console.log(this.cardRef.current.value)

        this.cardRef.current.value = '';
        this.firstNameRef.current.value = '';
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="card"
                    placeholder="card"
                    ref={this.cardRef}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    ref={ this.firstNameRef}
                />
                <button >onne</button>
            </form>
        )
    }
}