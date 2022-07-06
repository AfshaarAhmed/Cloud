import React, { Component } from 'react';

class Warning extends Component {

    render() {

        return (
            <div>
                <div className="alert alert-danger mt-3">
                    <strong>{this.props.title}</strong><br />
                    <span>{this.props.message}.</span>
                </div>
            </div>
        );

    }

}


export default Warning;