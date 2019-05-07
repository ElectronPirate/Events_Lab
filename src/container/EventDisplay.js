import React, { Component } from 'react';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

class EventDisplay extends Component {

  constructor(props){
    super(props)
    this.state = {
      events: [
        {id: 1,
          name: "Pawel",
          date: "06/05/2019",
          description: "A lovely day at CodeClan learning React."
        }
      ]
    }
      this.handleEventSubmit = this.handleEventSubmit.bind(this);

  }

  handleEventSubmit(newEvent){
    const updatedEvent = [...this.state.events, newEvent]
    this.setState({events: updatedEvent})
  }


  render(){
    return(
      <div className = "event-display">
        < EventList events ={this.state.events} />
        <EventForm handleEventSubmit ={this.handleEventSubmit} />
      </div>
    )
  }

}

export default EventDisplay;
