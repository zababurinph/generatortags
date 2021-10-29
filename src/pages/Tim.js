import React, { Component } from 'react';
import HeshTable from '../components/HeshTable';
import heshs from '../data/Heshs'
import InputForm from '../components/InputForm';
import OutputForm from '../components/OutputForm';

class Tim extends Component {
    constructor() {
        super();
        this.state = {
            stringHesh: ''
        }
    }

    generateString = (string) => {
        this.setState({stringHesh: string});
    }

    render() {
        return (
            <>
                <HeshTable myHesh={heshs[0]} isMobile={this.props.isMobile}/>
                <InputForm myHesh={heshs[0]} generateString={this.generateString} isMobile={this.props.isMobile}/>
                <OutputForm stringHesh={this.state.stringHesh} generateString={this.generateString}/>
            </>
        );
    }
}

export default Tim;