// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { DatePicker } from 'antd';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<DatePicker />, mountNode);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './index.css';
import 'antd/dist/antd.css';



import { Drawer, Button } from 'antd';

class App extends React.Component {
    state = { visible: false };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.showDrawer}>
            Additional details
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p><a href="https://www.nhp.gov.in/healthlyliving/healthy-diet" target="_blank" >Regular health diet</a></p>
            <p>Basic Medicines</p>
            <p>Look over weight chart</p>
          </Drawer>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('container'));
