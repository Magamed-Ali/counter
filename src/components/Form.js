import React from 'react'
import {
    Box,
    Button,
    Checkbox, CircularProgress,
    Fab,
    FormControl,
    FormControlLabel,
    InputLabel, LinearProgress, MenuItem,
    Radio, Select,
    Switch,
    TextField
} from "@mui/material";



class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: '',
        gender: 'male'
    }

    /**получает водимые символы и передает в стейт*/
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    /**проверка на количество водимых символов @mail*/
    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert('Your first name can\`t be less than 5 letters')
        }
    }

    /**проверка на валидацию*/
    validateEmail = () => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            alert('email is not valid')
        }
    }

    /** проверка чекида*/
    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    render() {
        const {firstName, email, message, select, subscription, gender} = this.state;
        return <div>
            <div>{+this.state.select + 2}</div>
            /** простой инпут*/
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}          /*подключение проверки*/
            />
            /** простой инпут*/
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}         /*подключение проверки*/
            />
            <hr style={{margin: "20px"}}/>

            /** простой инпут textarea*/
            <textarea name="message" value={message} onChange={this.handleChange}/>

            <hr style={{margin: "20px"}}/>

            ////
            <select name="select" value={select} onChange={this.handleChange}> /** выбор из выподаюшего списка*/
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <hr style={{margin: "20px"}}/>

            ////
            <label>
                <input                                                        /*работа чекида*/
                    type="checkbox"
                    name="subscription"
                    checked={subscription}
                    onChange={this.handleCheckboxChange}
                />
                Subscription
            </label>
            <br/>

            /// /*радио переключалка*/
            <input
                type="radio"
                name="gender"
                value="male"
                onChange={this.handleChange}
                checked={gender === "male"}/>
            <input
                type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
                checked={gender === "female"}
            />

            <div>
                <Button variant="contained">Hello World</Button>
                <div>
                    <TextField variant="standard" label="Username" />
                    <TextField variant="filled" label="Password" type="password" />
                </div>
                <div style={{margin: "50px"}}>
                    <TextField variant="outlined" label="Name" type="Name" />
                </div>
                <div style={{margin: "50px"}}>
                    <TextField variant="outlined" label="Password" type="Password" />
                </div>
            </div>
            <div>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="age"
                        label="Age"
                        /*onChange={handleChange}*/
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </div>

            <div>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </div>

        </div>
    }
}

export {Form}