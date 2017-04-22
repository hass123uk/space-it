import React from 'react';
import ReactDOM from 'react-dom';
import Sidebarleft from './components/sidebar.jsx';
import UserSidebar from './components/usersidebar.jsx';
require("./css/style.css");


class Maincontainer extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
      <div>
      {/*Main Nav bar*********************************************************/}
        <nav>
          <div className="floatright">
            <ul className="user">
              <li>
                <a href="#"><h1><i className="icon-user"></i>UserName</h1></a>
              </li>
              <li className="expand_toggle">
                <a href="#"><h1>-</h1></a>
              </li>
            </ul>
            <ul className="notifications">
              <li >
                <a href="#"><h1><i className="icon-user"></i>NodeName</h1></a>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <img src="./img/spaceit_logo.svg"  alt="spaceit"/>
            </li>
            <li>
              <a className="nav_logo" href="#"><h1><i className="icon-spaceit_logo"></i>SPACE<b>IT</b></h1></a>
            </li>
          </ul>
        </nav>
        <div className="navpush"></div>
        <div className="sidebar">
          <div className="head">
            <div className="node_op">
              <div className="img_con"></div><p>Node Creator:</p>
              <h3>NameOfCreator_OP</h3>
            </div>
            <ul className="node_stats">
              <li>O* 2</li>
              <li>O* 4</li>
              <li>O* 6</li>
            </ul>
          </div>
          <div className="node_info">
            <h1>Name of Node</h1>
            <p>
              NodeDescription Gravida in tincidunt. Lectus neque donec consectetuer.
              Hac wisi, quis nam, nulla lacinia vel, nisl sit, lorem platea dui massa arcu litora doloribus.
            </p>
          </div>
        </div>
        {/*User side panel*********************************************************/}
        <main>
          <div className="usersidepanel">
            <ul>
              <li className="head">
                <div className="inner">
                  MEMBERS
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="img_con"></div><h3>UserName_1</h3>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="img_con"></div><h3>UserName_2</h3>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="img_con"></div><h3>UserName_3</h3>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="img_con"></div><h3>UserName_4</h3>
                </div>
              </li>
            </ul>
          </div>
        {/*Sidebar*********************************************************/}
        </main>
      </div>
    );
  }
}


ReactDOM.render(
  <Maincontainer />,
  document.body.appendChild(document.createElement('div'))
);
