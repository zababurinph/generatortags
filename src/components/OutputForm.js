import React, { Component } from 'react';
import copyIcon from '../images/copy.png'

class OutputForm extends Component {
    constructor() {
        super();
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.props.generateString(event.target.value);
    }    

    render() {
        return (
            <div className="input-group mt-4 w-75 mx-auto">
                <textarea 
                    value={this.props.stringHesh}
                    onChange={this.handleChange} 
                    className="form-control custom-control"
                    rows="5"
                ></textarea>
                <button 
                    type="button"
                    className="btn btn-outline-light btn-sm" 
                    onClick={() => {navigator.clipboard.writeText(this.props.stringHesh)}}
                ><img src={copyIcon} alt=""/></button>
            </div>
        )
    }
}

export default OutputForm;