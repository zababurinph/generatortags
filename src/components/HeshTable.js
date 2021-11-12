import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

function HeshToStr(props) {
    return(
        props.arr.map(hesh => <span key={hesh.toString()}>#{hesh}<br/></span>))
}

class MobileTable extends Component {
    render() {
        return(
            <Table className="table-bordered mt-3 mx-auto w-75">
                <thead className="table-dark">
                    <tr className="text-center">
                        {this.props.myHesh.heshM.length === 0 ? <></> : <th>Основные</th>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.myHesh.heshM.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshM }/></td>}
                    </tr>
                </tbody>
                <thead className="table-dark">
                    <tr className="text-center">
                        {this.props.myHesh.heshV.length === 0 ? <></> : <th>Низкочастотные</th>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.myHesh.heshV.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshV }/></td>}
                    </tr>
                </tbody>
                <thead className="table-dark">
                    <tr className="text-center">
                        {this.props.myHesh.heshS.length === 0 ? <></> : <th>Среднечастотные</th>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.myHesh.heshS.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshS }/></td>}
                    </tr>
                </tbody>
                <thead className="table-dark">
                    <tr className="text-center">
                        {this.props.myHesh.heshN.length === 0 ? <></> : <th>Высокочастотные</th>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.myHesh.heshN.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshN }/></td>}
                    </tr>
                </tbody>
            </Table>
        );
    }
}

class DefaultTable extends Component {
    render() {
        return (
            <Table className="table-bordered mt-3 mx-auto w-75">
                <thead className="table-dark">
                    <tr className="text-center">
                        {this.props.myHesh.heshM.length === 0 ? <></> : <th>Основные</th>}
                        {this.props.myHesh.heshV.length === 0 ? <></> : <th>Высокочастотные</th>}
                        {this.props.myHesh.heshS.length === 0 ? <></> : <th>Среднечастотные</th>}
                        {this.props.myHesh.heshN.length === 0 ? <></> : <th>Низкочастотные</th>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.myHesh.heshM.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshM }/></td>}
                        {this.props.myHesh.heshV.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshV }/></td>}
                        {this.props.myHesh.heshS.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshS }/></td>}
                        {this.props.myHesh.heshN.length === 0 ? <></> : <td className="align-top w-25 table-light"><HeshToStr arr={ this.props.myHesh.heshN }/></td>}
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
                {this.props.isMobile ? <MobileTable myHesh={this.props.myHesh}/> : <DefaultTable myHesh={this.props.myHesh}/>}
            </div>
        );
    }
}

export default HeshTable;