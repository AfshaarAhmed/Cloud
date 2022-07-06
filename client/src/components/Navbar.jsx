import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
    logout = () => {
        
        localStorage.removeItem("user");

        if (this.props.onChange) {
            console.log("Child");
            this.props.onChange();
        }

    }

    render() {
        return (
            <div className="container">
                <ul className="nav">
                    <li className="nav-item"><Link to="/"><span className="nav-link">Home</span></Link></li>
                    <li className="nav-item a_hover" onClick={this.logout} style={{cursor: "pointer"}}><span className="nav-link text-primary">Logout</span></li>
                </ul>
            </div>
        );
    }

}

export default Navbar;