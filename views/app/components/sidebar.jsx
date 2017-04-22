import React from 'react';
import Sidebar from 'react-sidebar';
require('./sidebar.css');

export default class Sidebarleft extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen (open) {
    this.setState({sidebarOpen: open});
    }

    render () {

    let sidebarContent =
        <b>Sidebar content</b>;


    return (
        <div>
            <Sidebar sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     onSetOpen={this.onSetSidebarOpen}>
            </Sidebar>
        </div>
    );
}}
