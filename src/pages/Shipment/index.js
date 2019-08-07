import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { ContainerShipment, Form, Title, Tag } from './styles.js';

export default class Shipment extends Component {
  state = {
    title: '',
    newTitle: '',
    titleEditMode: false,
    shipment: {},
    cargo: [],
    services: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const shipmentId = decodeURIComponent(match.params.shipment);
    const [shipment] = await Promise.all([api.get(`/shipments/${shipmentId}`)]);

    this.setState({
      title: shipment.data.name,
      shipment: shipment.data,
      cargo: [...shipment.data.cargo],
      services: [...shipment.data.services],
    });
  }

  componentDidUpdate(_, prevState) {
    const { title } = this.state;

    if (prevState.title !== title) {
      localStorage.setItem('title', JSON.stringify(title));
    }
  }

  titleEdit = () => {
    const { titleEditMode } = this.state;
    this.setState({
      titleEditMode: !titleEditMode,
    });
  };

  textEditSave = () => {
    const { newTitle } = this.state;
    this.setState({
      titleEditMode: false,
      title: newTitle,
    });
  };

  handleInputChange = e => {
    this.setState({
      newTitle: e.target.value,
    });
  };

  render() {
    const { shipment, services, titleEditMode } = this.state;

    return (
      <ContainerShipment>
        <Tag>{shipment.id}</Tag>
        {titleEditMode ? (
          <div>
            <Form>
              <input type="text" onChange={this.handleInputChange} />
              <button type="button" onClick={this.textEditSave}>
                Save edits
              </button>
            </Form>
          </div>
        ) : (
          <div>
            <Title onDoubleClick={this.titleEdit}>{shipment.name}</Title>
          </div>
        )}

        <ul>
          <li>
            <strong>Mode: </strong> <h4>{shipment.mode} </h4>
          </li>

          <li>
            <strong>Type: </strong> <h4>{shipment.type} </h4>
          </li>

          <li>
            <strong>Destination: </strong> <h4>{shipment.destination} </h4>
          </li>

          <li>
            <strong>Origin: </strong> <h4>{shipment.origin} </h4>
          </li>
        </ul>

        <h3>Services:</h3>
        <ul>
          {services.map((s, i) => (
            <li key={i}>
              <strong>Type: </strong> <h4>{s.type}</h4>
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <strong>Total: </strong> <h4>{shipment.total} </h4>
          </li>

          <li>
            <strong>Status: </strong> <h4>{shipment.status} </h4>
          </li>

          <li>
            <strong>User Id: </strong> <h4>{shipment.userId} </h4>
          </li>
        </ul>

        <Link to="/">Return</Link>
      </ContainerShipment>
    );
  }
}
