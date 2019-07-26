import React from 'react';
import Search from '../components/search/search'
import Filter from '../components/filter/filter';
import List from '../components/list/list';
import axios from 'axios';

let filtersChange = ['All','Developers', 'UX Designers', 'Visual Designers', 'Infra', 'IOS', 'PHP'];
let filters = [];
export default class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        users: [],
        filters: filters,
        filteredList: [],
        selectedFilter: 'all',
      };


    }
    
    componentWillMount(){
      axios.get('https://sheetdb.io/api/v1/smyv5xfvpjqeh',
      {
        auth: {
          username: "srpwcqp2",
          password: "ej7s62xt2mrtefkqrepm"
        }
      }
      )
      .then(response => {
        this.setState({
          users: response.data,
          filteredList: response.data,
          loading: false
          });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    selectFilter = filter => {
      const searchText = filter.toLowerCase()
      filters = filtersChange.filter(row => {
        return row.toLowerCase().indexOf(searchText) !== -1;
      });
      console.log(filters)
      const filteredTexts = this.state.users.filter(row => {
        return row.function.toLowerCase().indexOf(searchText) !== -1;
      });
      this.setState({
        selectedFilter: filteredTexts.length > 1 ? 'all' : searchText,
        filteredList:
        searchText === 'all'
            ? this.state.users
            : filteredTexts
      })
    }
  
    render() {
      const {loading} = this.state
        if (loading === true){
            return(
                <div>
                    <p>loading</p>
                </div>
            )
        }
      return (
        <div className="App-Container">
            <Search 
              selectFilter={this.selectFilter} 
              filteredList={this.state.filteredList}
              selectedFilter={this.state.selectedFilter}
              filters={filters}
            />
            <Filter 
              selectFilter={this.selectFilter}
              selectedFilter={this.state.selectedFilter}
              filters={filtersChange}
            />
            {this.state.filteredList.length}
            <List 
              users={this.state.filteredList}
            />
        </div>
      );
    }
  }