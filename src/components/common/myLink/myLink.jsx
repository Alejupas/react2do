import React, { Component } from 'react';
import isModuleCssImam from './myLink.module.css'
class MyLink extends Component {
    state = {  }
    render() { 
        return ( <div>
            <a className={this.props.active ? isModuleCssImam.active : isModuleCssImam.link} href="/">
                 <i className={`fa fa-${this.props.icon}`}></i>
            {this.props.children} 
            </a>
           
        </div> );
    }
}
 
export default MyLink;