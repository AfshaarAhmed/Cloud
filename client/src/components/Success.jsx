import React, { Component } from 'react';

class Success extends Component {

    render() {

        return (
            <div>
                <div className="alert alert-success mt-3">
                    <strong>{this.props.title}</strong><br />
                    <span>{this.props.message}.</span>
                </div>
            </div>
        );

    }

}


export default Success;