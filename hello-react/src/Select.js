import React, { Component } from 'react'

export default class Select extends Component {
    
    state = {
        selectedItem : ""
    }

    handleDivClick = (e) => {
        this.setState(
            {
                selectedItem: e
            }
        )
    }

    render() {

        const items = this.props.items;
        
        const itemsToShow = items.map((v)=>
            
            v.value === this.state.selectedItem ?
            
            (
                <div key={v.value} className="Selected" onClick={()=>this.handleDivClick(v.value)}>
                    &rarr; {v.label}
                </div>
            )
            :
            (
                <div key={v.value} className="item" onClick={()=>this.handleDivClick(v.value)}>
                    {v.label}
                </div>
            )

        )

        return (
            <div className="Select">
                <div className="Items">
                    {itemsToShow}    
                </div>
            </div>
        )
    }
}
