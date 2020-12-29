import React, {Component} from 'react'
import Todo from './Todo'
class List extends Component {
    constructor(){
        super()
        this.state = {}
    }


    render(){
        let list = this.props.tasks.map((e,i)=>{
            return <Todo key={i} task = {e}/>
        })
        return(
            <div>{list}</div>
        )
    }
}

export default List
