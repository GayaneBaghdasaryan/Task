import React from 'react'
import { Component } from 'react'
import './style.css'


export default class List extends Component {
  constructor(props){
    super(props)
    this.state={
        list:[],
        task:'',
        editing: false,
        currentid: null,
        newTask: ""
    }
  }

   fillList = () =>{
    if (this.state.task !== "") {
        this.setState({ 
            list:this.state.list.concat({
                task:this.state.task,
                id: Math.random()+1
            })
        })
        this.setState({task:''})
    }
   }
   
   remove = (itemId) =>{
    this.setState({
        list: [...this.state.list].filter((id) => id.id !== itemId),
    })
   }

   edit = (id) => {
    this.state.list.map((index)=>{
     if(index.id === id){
        index.task = this.state.newTask      
      }
    })
    this.setState({newTask:""})
   }
    onEdit = () => {
        this.edit(this.state.currentid);
        this.setState({ editing: false });
      };

      onToggleEdit = (todo) => {
        this.setState({ editing: true });
        this.setState({ currentid: todo.id });
        this.setState({ newTask: todo.task });
      };
   


  render(){
    const myList = this.state.list.map((val,index)=>
        (
            <div className='card' key={index}>
                <h2>{val.task}</h2>
                <div className='btn'>
                    <button onClick={()=>this.remove(val.id)}>Remove</button>
                    <button onClick={()=>{
                        this.onToggleEdit(val)
                        }}>Edit</button>
                </div>
            </div> 
        )
        ) 
  
    return(
        <div className='wrapper'>
            <div className='front'>
            <div className='setTasks'>
                <input 
                    type='text' 
                    value={this.state.task}
                    onChange={(e)=>this.setState({task:e.target.value})}/>
                <button onClick={this.fillList}>Add</button>                
            </div>  
            { this.state.editing && 
            <div className='setEdit'>
                    <input
                        className='editInput' 
                        value={this.state.newTask} 
                        onChange={(e)=>this.setState({newTask:e.target.value})}/>
                    <button onClick={()=>{
                        this.onEdit()
                    }}>OK</button>
             </div>
            }
         <div className='task-card'>
            {myList}
         </div>
         </div>
        </div>
    )
  }
}
