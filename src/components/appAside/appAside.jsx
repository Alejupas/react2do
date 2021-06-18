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
            </div>
        </div> );
    }
}
 
export default AppAside;