import React, {Component} from 'react';
import Request from '../../helpers/request';

class RaidCreateForm extends Component{
  constructor(props){
    super(props);
    this.state={
      pirates: [],
      location: "",
      loot: ""
    }
    this.handleLocation = this.handleLocation.bind(this);
    this.handleLoot = this.handleLoot.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/pirates')
    .then((data) => {
      this.setState({pirates: data._embedded.pirates})
    })
  }

  handleLocation(event){
    this.setState({location: event.target.value})
  }

  handleLoot(event){
    this.setState({loot: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newRaid = {
      location: this.state.location,
      loot: this.state.loot,
      pirate: event.target.pirate.value
    }
    this.props.onFormSubmit(newRaid);
  }

  render(){
    if(!this.state.pirates.length === 0){
      return <p>Loading...</p>
    }

    const pirateOptions=this.state.pirates.maps((pirate, index) => {
      return <option key={index}
      value={pirate._links.self.href}>{pirate.firstName}</option>
    })

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text"
      placeholder="Location"
      name="location"
      onChange={this.handleLocation}
      value={this.state.location} />
      <input type="number"
      placeholder="Loot"
      name="loot"
      onChange={this.handleLoot}
      value={this.state.loot} />

      <select name="pirate">
      {pirateOptions}
      </select>

      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}

export default RaidCreateForm;
