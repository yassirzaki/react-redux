import React, { Component } from 'react'

export default class Clock extends Component {
    state = {
        clock: new Date().toLocaleTimeString(),
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({clock:this.getDate()})
        }, 1000);
    }

    getDate = () =>{
        return new Date().toLocaleTimeString();
    }
    
    render() {
        return (
            <div className="Clock">
                {this.state.clock}
            </div>
        )
    }
}
