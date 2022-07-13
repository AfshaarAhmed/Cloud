import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import Success from '../components/Success';
import Warning from '../components/Warning';

class Login extends Component {

    state = {

        email: '',
        password: '',
        loginStatus: false,
        invalidCredentitials: false,
        invalidMessage: ''

    }

    onChange = (event) => {

        let property = event.target.name;
        let value = event.target.value;
        this.setState({ [property]: value });

    }

    login = (event) => {
        event.preventDefault();

        if (this.state.email.length < 4) {
            this.setState({ invalidCredentitials: true, invalidMessage: "Enter valid email address" });
            return;
        }


        fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })

        }).then(res => res.json()).then((res) => {

            // console.log(res);

            if (!res.success && res.message) {
                this.setState({ invalidCredentitials: true, invalidMessage: res.message });
                console.log(res.message);
            } else if (!res.success && res.err) {
                this.setState({ invalidCredentitials: true, invalidMessage: res.err });
                console.log(res.err);
            } else {

                localStorage.setItem("user", res.user);

                this.setState({ loginStatus: true, invalidCredentitials: false });

                setTimeout(function () {
                    this.props.history.push("/");
                }.bind(this), 2500);

                console.log(res.user);
            }

        }).catch(err => {
            console.log(err.err);
        });

    }

    

    render() {

        return (
            <div>
                <div className="container pt-5">
                    {/* <Navbar path="/signup" linktext="Signup" /> */}
                    <div className="row mt-5">

                        <div className="col-lg-4 mt-5">
                            <h1 className="text-primary">Signup App</h1>
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        </div>
                        <div className="col-lg-5 offset-lg-3 mt-5 pt-5 pl-5 pr-5" style={{ border: "1px solid #e1e1e1", borderRadius: "10px", boxShadow: "0 0 2px #a1a1a1" }}>
                            <form onSubmit={this.login}>

                                <div className="form-group">
                                    <label>Email address:</label>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>

                            </form>

                            <p className="text-center text-primary mt-3"><Link to="/signup">Don't have an account? Signup</Link></p>

                            {this.state.loginStatus ? <Success title="Success" message="Login successful" /> : null}
                            {this.state.invalidCredentitials ? <Warning title="Invalid Credentitials" message={this.state.invalidMessage} /> : <span></span>}

                        </div>

                    </div>
                </div>

            </div>

        );
    }

    componentDidMount() {

        let user = localStorage.getItem("user");

        if (user) {
            this.props.history.push("/");
        }

    }

}

export default Login;