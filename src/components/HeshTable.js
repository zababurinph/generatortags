import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

function HeshToStr(props) {
    return(
        props.arr.map(hesh => <span key={hesh.toString()}>#{hesh}<br/></span>))
}

class GenerateTable extends Component {
    render() {
        return (
            <Table className="table-bordered mt-3 mx-auto w-75">
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th scope="col">Основные</th>
                            <th scope="col">Низкочастотные</th>
                            <th scope="col">Среднечастотные</th>
                            <th scope="col">Высокочастотные</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-top w-25 table-light" scope="row"><HeshToStr arr={ this.props.myHesh.heshM }/></td>
                            <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshN }/></td>
                            <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshS }/></td>
                            <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshV }/></td>
                        </tr>
                    </tbody>
                </Table>
        );
    }
}

class HeshTable extends Component {
    render() {
        return (
            <div>
                {this.props.isMobile ? 
                <small><GenerateTable myHesh={this.props.myHesh}/></small> : 
                <GenerateTable myHesh={this.props.myHesh}/>}
            </div>
        );
    }
}

export default HeshTable;