import React, { Component } from 'react';
import MyLink from '../common/myLink/myLink';
class AppAside extends Component {
    state = {  }
    render() { 
        return ( <div className='aside'>
            <h2>Aside</h2>
            <div>
                <MyLink active to="/" icon='home'> Home</MyLink>
                <MyLink to="/reminders" icon='bell'> Reminders</MyLink>
                <MyLink to="/archive" icon='plane'> Archive</MyLink>
                <MyLink to="/trash" icon='trash'> Trash</MyLink>
            </div>
        </div> );
    }
}
 
export default AppAside;