import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import { ShipmentBlockStyle } from './styles';

export default class ShipmentBlock extends Component {
  state = {
    title: this.props.name,
    newTitle: '',
    editable: false,
  };

  textEditForm = () => {
    const { newTitle } = this.state;
    this.setState({ title: newTitle, editable: true });
  };

  titleUpdate = () => {
    const { newTitle } = this.state;
    this.setState({
      editable: false,
      title: newTitle,
    });
  };

  handleInputChange = e => {
    this.setState({
      newTitle: e.target.value,
    });
  };

  render() {
    const { id, edit } = this.props;
    const { title, editable } = this.state;

    return (
      <ShipmentBlockStyle key={id}>
        <span>{id}</span>

        {editable ? (
          <form>
            <input type="text" onChange={this.handleInputChange} />
            <FaCheck onClick={this.titleUpdate} />
          </form>
        ) : (
          <div>
            <h3>{title}</h3>
            <small onClick={this.textEditForm}>{edit}</small>
          </div>
        )}

        <Link to={`/shipment/${encodeURIComponent(id)}`}>Details</Link>
      </ShipmentBlockStyle>
    );
  }
}
