import './style.css'

export const Edit =()=>{
    return(
        <div className='editing'>   
        <input 
            value={this.state.newTask} 
            onChange={(e)=>this.setState({newTask:e.target.value})}/>
        <button onClick={()=>{
            this.onEdit()
        }}>OK</button>
    </div>
    )
}