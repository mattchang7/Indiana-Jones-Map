import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Marker extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    static defaultProps = {}

    render() {
        return (
            <div>
                <div className='pin bounce'></div>
                <div className='pulse'></div>
            </div>
        )
    }
}