import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props); //Llama al constructor de la super clase que es Component - para que las props le lleguen bien al componente. 
        this.state = { email: "", pass: "" };
    }
    
    login() {
        console.log("Hago un log in")
    }

    updateEmail(email,) {
        this.setState({email});
        console.log("Cambio el email")
    }

    updatePass(pass,) {
        this.setState({pass});
        console.log("Cambio el password")
    }

    render() {
        return (
            <div id="login">
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={email => this.updateEmail(this.value)}
                />
                <input
                    type="password"
                    placeholder="Pass"
                    onChange={pass => this.updatePass(this.value)}
                />
                <button
                    onClick={() => {
                    this.login();}}>
                Log in
                </button>
            </div>
        );
    }
}

export default Clock;