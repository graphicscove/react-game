import React, { Component } from 'react';

class CityInfo extends Component {
    render() {
        return (
            <>
                City Name: {this.props.name},
                City Location: {this.props.location}
            </>
        );
    }
}

export default CityInfo;
