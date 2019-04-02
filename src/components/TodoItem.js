import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{

    getStyle = () => {
        return{
            textAlign:'left',
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' 
        }
    }

    render(){
        // Descructure todo prop
        const { _id, userId, description} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" className="btn_checkbox" onChange={this.props.toggleComplete.bind(this, _id)} />
                    {' '}
                    {description}
                    <button onClick={this.props.delTodo.bind(this, _id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle ={
    background:'#ff0000',
    color:'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem