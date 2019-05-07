import React from 'react';

const EventItem = (props) => {

  const eventData = `Name: ${props.events.name}, Date: ${props.events.date}, Description: ${props.events.description}`
  return (
    <p>{eventData}</p>
  )

}



export default EventItem;
