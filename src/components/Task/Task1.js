import React, {Component} from 'react';

// don't change the Component name "App"
export default class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: '',
            email: '',
            isAgreeWithTerms: false,
        }
        this.cardRef = React.createRef();
        this.firstNameRef = React.createRef();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    validateEmail = () => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            alert('email is not valid')
        }
    }
    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }
    subscription = () => {
        if (this.state.email.length > 0 && this.state.isAgreeWithTerms === true){
            alert("thanks for subscribing")
            this.setState({email: '', isAgreeWithTerms: false})
        }
    }
    componentDidMount() {
        this.firstNameRef.current.focus();
    }

    render() {
        // TODO: implement component
        const {email, isAgreeWithTerms} = this.state;

        return (
            <div>
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
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                    ref={ this.firstNameRef}
                />
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleCheckboxChange}
                    />
                    I agree with terms and conditions
                </label>
                <br/>
                <button onClick={this.subscription}>Send</button>
            </div>
        );
    }
}
