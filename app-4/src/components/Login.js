import React, {Component} from 'react';

class Login extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            password: '',
        }
        
    }

    handleUser(val) {
        this.setState({username: val })
    }

    handlePass(val) {
        this.setState({password: val})
    }

    verify() {
        let username = this.state.username;
        let password = this.state.password;
        alert(`Username: ${username} Password: ${password}`)
    }

    render () {
        return (
            <div>
                <label>Username:</label>
                <input onChange={(e)=> this.handleUser(e.target.value)}/>
                <label>Password:</label>
                <input onChange={e=> this.handlePass(e.target.value)}/>
                <button onClick={()=> this.verify()}>Verify</button>
            </div>
        )
    }
}

export default Login