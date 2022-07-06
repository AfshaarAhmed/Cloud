import React, { Component } from 'react'
import Navbar from '../components/Navbar';

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            auth: false,
        }

    }

    logout = () => {
        this.setState({ auth: false });
    }

    render() {

        const auth = localStorage.getItem("user");
        if (!auth) {
            console.log(auth);
            this.props.history.push("/login");
        }

        return (
            <div className="container">
                <Navbar onChange={this.logout} />
                <h3 style={{ textAlign: "center" }}>Home</h3>
            </div>
        );
    }

    componentDidMount() {
        // console.log("Component did mount");

        // this.setState({ auth: auth });
    }

}

export default Home;