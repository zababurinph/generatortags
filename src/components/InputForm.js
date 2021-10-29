import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import { constHeshN, constHeshS, constHeshV } from '../data/Consts';
import generator from '../functions/generator';

class MobileInputForm extends Component {
    render() {
        return (
            <div className="mt-3">
                <div>
                    <em className="me-2">Низкочастотные:</em>
                    <input type="number" className="inputMy" value={this.props.N} onChange={this.props.handleChangeN}/>
                </div>
                <div className="mt-2">
                    <em className="me-2">Среднечастотные:</em>
                    <input type="number" className="inputMy" value={this.props.S} onChange={this.props.handleChangeS}/>
                </div>
                <div className="mt-2">
                    <em className="me-2">Высокочастотные:</em>
                    <input type="number" className="inputMy" value={this.props.V} onChange={this.props.handleChangeV}/>
                </div>
            </div>
        );
    }
}

class DefaultInputForm extends Component {
    render() {
        return (
            <div className="row justify-content-md-center mt-4">
                <div className="col-md-auto">
                    <em className="me-2">Низкочастотные:</em>
                    <input type="number" className="inputMy" value={this.props.N} onChange={this.props.handleChangeN}/>
                </div>
                <div className="col-md-auto">
                    <em className="me-2">Среднечастотные:</em>
                    <input type="number" className="inputMy" value={this.props.S} onChange={this.props.handleChangeS}/>
                </div>
                <div className="col-md-auto">
                    <em className="me-2">Высокочастотные:</em>
                    <input type="number" className="inputMy" value={this.props.V} onChange={this.props.handleChangeV}/>
                </div>
            </div>
        );
    }
}

class InputForm extends Component {
    constructor() {
        super();
        this.state = {
            N: constHeshN,
            S: constHeshS,
            V: constHeshV,
            isMobile: false
        }
        this.handleChangeN = this.handleChangeN.bind(this);
        this.handleChangeS = this.handleChangeS.bind(this);
        this.handleChangeV = this.handleChangeV.bind(this);
    }

    handleChangeN = (event) => {this.setState({N: event.target.value})}
    handleChangeS = (event) => {this.setState({S: event.target.value})}
    handleChangeV = (event) => {this.setState({V: event.target.value})}
    
    render() {
        return (
            <div className="text-center mt-4">
                <h5>Введите количество тегов каждого уровня</h5>
                {this.props.isMobile ? 
                <MobileInputForm 
                    handleChangeN = {this.handleChangeN} N = {this.state.N}
                    handleChangeS = {this.handleChangeS} S = {this.state.S}
                    handleChangeV = {this.handleChangeV} V = {this.state.V}
                /> : 
                <DefaultInputForm 
                    handleChangeN = {this.handleChangeN} N = {this.state.N}
                    handleChangeS = {this.handleChangeS} S = {this.state.S}
                    handleChangeV = {this.handleChangeV} V = {this.state.V}
                />}
                
                <Button className={this.props.isMobile ? "btn btn-primary mt-4 w-50" : "btn btn-primary mt-4 w-25"} onClick={() => generator(
                        this.state.N, 
                        this.state.S, 
                        this.state.V,
                        this.props.myHesh,
                        this.props.generateString
                    )
                }>Сгенерировать</Button>
            </div>
        )
    }
}

export default InputForm;