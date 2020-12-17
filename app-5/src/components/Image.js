import React, {Component} from 'react'

class Image extends Component {
    
    render() {
        return(
            <section>
                <img src ={this.props.myImage}/>
            </section>
        )
    }
}

export default Image