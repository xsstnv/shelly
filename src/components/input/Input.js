import React from 'react';
import classes from './Input.module.css'

class Input extends React.Component {
    render() {
        return (
            <input 
                type="text" 
                maxLength={this.props.maxit }
                className={classes.Input} 
                placeholder={'Enter your ' + this.props.keyword} 
                onChange={(event) => this.props.changed(event)}
            />
        );
    }
}

export default Input;