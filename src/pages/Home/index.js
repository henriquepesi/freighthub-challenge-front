import React, { Component } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import api from '../../services/api';

import ShipmentBlock from '../../components/ShipmentBlock';

import Search from '../../components/Search';

import { Container, ShipmentList, SortButtons, NotFound } from './styles';

export default class Shipment extends Component {
  state = {
    shipments: [],
    page: 1,
    filterId: '',
    sortByName: false,
    sortById: false,
  };

  async componentDidMount() {
    const { page } = this.state;

    const response = await api.get('shipments', {
      params: {
        _limit: 20,
        _page: page,
      },
    });

    this.setState({ shipments: response.data });
  }

  shipmentsItem = async () => {
    const { page } = this.state;

    const response = await api.get('shipments', {
      params: {
        _limit: 20,
        _page: page,
      },
    });

    this.setState({ shipments: response.data });
  };

  handlePage = async action => {
    window.scrollTo(0, 0);
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.shipmentsItem();
  };

  handleSearch = e => {
    this.setState({
      filterId: e.target.value,
    });
  };

  sortByNameToggle = () => {
    const { shipments, sortByName } = this.state;

    shipments
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item, i) => <li key={i} data={item} />);

    if (sortByName) {
      this.setState({
        shipments: shipments.reverse(),
        sortByName: !sortByName,
      });
    } else {
      this.setState({
        shipments,
        sortByName: !sortByName,
      });
    }
  };

  sortByIdToggle = () => {
    const { shipments, sortById } = this.state;

    shipments
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((item, i) => <li key={i} data={item} />);

    if (sortById) {
      this.setState({
        shipments: shipments.reverse(),
        sortById: !sortById,
      });
    } else {
      this.setState({
        shipments,
        sortById: !sortById,
      });
    }
  };

  render() {
    const { shipments, page, filterId, sortByName, sortById } = this.state;

    const filterSearch = shipments.filter(shipment => {
      return shipment.id.toLowerCase().indexOf(filterId) !== -1;
    });

    return (
      <Container>
        <Search
          type="text"
          value={filterId}
          placeholder="search by id"
          onChange={this.handleSearch}
        />

        <SortButtons>
          <div onClick={this.sortByNameToggle}>
            <button type="button">Sort by Name</button>
            {sortByName ? <FaArrowDown /> : <FaArrowUp />}
          </div>

          <div onClick={this.sortByIdToggle}>
            <button type="button">Sort by Id</button>
            {sortById ? <FaArrowDown /> : <FaArrowUp />}
          </div>
        </SortButtons>

        {filterSearch.length !== 0 ? (
          <ShipmentList>
            {filterSearch.map(shipment => (
              <div key={shipment.id}>
                <ShipmentBlock
                  id={shipment.id}
                  name={shipment.name}
                  edit="edit"
                />
              </div>
            ))}
          </ShipmentList>
        ) : (
            <NotFound>
              <p>Try another id</p>
            </NotFound>
          )}

        <div>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Back
          </button>
          <span>Page {page}</span>
          {filterSearch.length === 20 ? (
            <button type="button" onClick={() => this.handlePage('next')}>
              Next
            </button>
          ) : (
              <button
                type="button"
                disabled
                onClick={() => this.handlePage('next')}
              >
                Next
            </button>
            )}
        </div>
      </Container>
    );
  }
}
