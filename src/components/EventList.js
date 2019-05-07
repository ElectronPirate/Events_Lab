import React from 'react';
import EventItem from './EventItem';

const EventList = (props) =>{

  const events = props.events.map((event)=>{
    return <EventItem events ={event} key ={event.id} />
  });

  return(
    <div className = "event-list">
      {events}
    </div>
  );
}


export default EventList;
