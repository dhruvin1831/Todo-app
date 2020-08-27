import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '12px',
            borderBottom: '1px dotted grey'
        }
    }

    

    render() {
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>

                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/>{'  '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    
    background: 'red',
    border: '2px solid black',
    padding: ' 0 5px',
    color: '#fff',
    marginLeft: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',
    float: 'right'

} 



//PropTypes
TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }

export default TodoItem
