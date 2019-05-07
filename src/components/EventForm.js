import React, {Component} from 'react';

class EventForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      date: '',
      description: ''

    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleDateChange(event){
    this.setState({date: event.target.value})
  }

  handleDescriptionChange(event){
    this.setState({description: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name;
    const date = this.state.date;
    const description = this.state.description;
    const newEvent = {name, date, description};
    this.props.handleEventSubmit(newEvent);
    this.setState({name: '', date: '', description: ''})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input
        type='text'
        placeholder='Your name'
        value={this.state.name}
        onChange={this.handleNameChange}
        />

        <input
          type='text'
          placeholder='Date'
          value={this.state.date}
          onChange={this.handleDateChange}
          />

          <input
            type='text'
            placeholder='Description'
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            />

            <input
              className = "ui positive button"
              type='submit'
              value='Post event'/>

      </form>
    )
  }

}

export default EventForm;
