import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



class Maincontainer extends React.Component {
    constructor(props) {
        super(props);
    }



  render() {
    return (
        <div>
            <App />
        </div>

    );
  }
}




ReactDOM.render(
  <Maincontainer />,
  document.body.appendChild(document.createElement('div'))
);
