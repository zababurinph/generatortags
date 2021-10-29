import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Snezh from './pages/Snezh';
import Tim from './pages/Tim';
import './styles.css';
import Basement from './components/Basement';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false
    }
  }
  
  componentDidMount = () => {window.addEventListener("resize", this.resize.bind(this))}
  resize = () => {this.setState({isMobile: window.innerWidth < 768})}
  componentWillUnmount = () => {window.removeEventListener("resize", this.resize.bind(this))}


  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Tim isMobile={this.state.isMobile}/>} />
          <Route exact path="/snezh" component={() => <Snezh isMobile={this.state.isMobile}/>}/>
          <Route exact path="/about" component={() => <About isMobile={this.state.isMobile}/>}/>
        </Switch>
        <Basement />
      </>
    );
  }
}

export default App;
