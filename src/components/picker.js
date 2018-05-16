import React, { Component } from 'react'
import Picker from 'react-day-picker'
import "react-day-picker/lib/style.css";
import { DateUtils } from "react-day-picker";


class ReactPicker extends Component {
	

   state = {
        numberOfMonths: 1
   }

   constructor(props) {
        super(props)
        this.state = this.getInitial()
    }

    render() {
        const {from,to} = this.state
        const modifiers = { begin:from,end:to }
        return (
            <div>
			
                <p>                 
                {from && to && `You have selected dates from ${from.toLocaleDateString()}`}
				{from && to && ` until ${to.toLocaleDateString()}`}
                </p>
                <Picker
                    numberOfMonths = {this.state.numberOfMonths}
                    selectedDays = {[from, {from, to}]}
                   	modifiers = {modifiers}
                    onDayClick = {this.handleDayClick}
                />
				
            </div>
       )	
	
}

getInitial= () => ({
        from: null,
        to: null
    })

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }
}

export default ReactPicker

