import React, {Component} from 'react'

class FilterStr extends Component {
    constructor() {
        super();
        this.state = {
            players: ['Lebron James', 'Steph Curry', 'James Harden', 'Giannis Antetokounmpo', 'Luka Doncic'],
            userInput: '',
            filteredPlayers: []

        }
    }

    handleChange(val) {
        this.setState({userInput:val })
    }

    filter(str) {
        let players = this.state.players
        let filteredPlayers = []
        for (let i =0; i<players.length; i++) {
            if (players[i].includes(str)) {
                filteredPlayers.push(players[i])
            }
        }
        this.setState({filteredPlayers: filteredPlayers})
    }

    render() {
        return (
            <section>
                <h2>{JSON.stringify( this.state.players, null, 10)}</h2>
                <input onChange={(e)=>this.handleChange(e.target.value)}/>
                <button onClick={()=>this.filter(this.state.userInput)}>Filter</button>
                <h2>{this.state.filteredPlayers}</h2>

            </section>
        )
    }
}

export default FilterStr