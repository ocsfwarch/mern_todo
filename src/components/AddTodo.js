import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

    state = {
        userId:'tpartcal@cox.net',
        description: ''
    }

    onChange = (event) => {
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.userId,this.state.description);
        this.setState({
            description:''
        });
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text"
                    name="description"
                    style={{flex:'10', padding: '5px'}}
                    placeholder="Add Todo ..."
                    value={this.state.description}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;