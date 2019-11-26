import React, {Component} from 'react';
import Request from '../../helpers/request';

class ShipCreateForm extends Component{
  constructor(props){
    super(props);
    this.state={
      pirates: [],
      shipName: ""
    }
    this.handleShipName = this.handleShipName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/pirates')
    .then((data) => {
      this.setState({pirates: data._embedded.pirates})
    })
  }

  handleShipName(event){
    this.setState({shipName: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newShip = {
      shipName: this.state.shipName,
      pirate: event.target.pirate.value
    }
    this.props.onFormSubmit(newShip);
  }

  render(){
    if(!this.state.pirates.length === 0){
      return <p>Loading...</p>
    }

    const pirateOptions=this.state.pirates.map((pirate, index) => {
      return <option key={index} value={pirate._links.self.href}>{pirate.firstName} {pirate.lastName}</option>
    })

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text"
      placeholder="Ship Name"
      name="shipName"
      onChange={this.handleShipName}
      value={this.state.shipName} />

      <select name="pirate">
      {pirateOptions}
      </select>

      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}

export default ShipCreateForm;
