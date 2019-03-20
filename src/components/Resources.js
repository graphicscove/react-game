import React, { Component } from 'react';

class Resources extends Component {
    render() {
        return (
            <>
                <span>Food: {this.props.resources.food.value}</span> |
                <span>Wood: {this.props.resources.wood.value}</span> |
                <span>Stone: {this.props.resources.stone.value}</span> |
                <span>Ore: {this.props.resources.ore.value}</span> |
                <span>Gold: {this.props.resources.gold.value}</span>
            </>
        );
    }
}

export default Resources;
