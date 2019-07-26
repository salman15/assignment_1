import React from 'react';
import Search from '../components/search/search'
import Filter from '../components/filter/filter';
import List from '../components/list/list';
import axios from 'axios';

let users = [
  {
      "name": "Gandalf",
      "function": "Developers",
      "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
  },
  {
      "name": "Gandalf",
      "function": "PHP",
      "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
  },
  {
      "name": "Gandalf",
      "function": "Infra",
      "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
  },
  {
      "name": "Gandalf",
      "function": "IOS",
      "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
  },
]

export default class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        loading: 'true',
        users: users,
        filteredList: users,
        selectedFilter: 'all',
      };
    }
    
    componentWillMount(){
      axios.get('https://sheetdb.io/api/v1/smyv5xfvpjqeh', {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          'Authorization': 'Basic',
          "Accept": "application/json",
          "Content-Type": "application/json",

          

        }
      },
      {
        auth: {
          username: "srpwcqp2",
          password: "ej7s62xt2mrtefkqrepm"
        }
      }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
        loading: 'false'
      });
    }
    selectFilter = filter => {
      const searchText = filter.toLowerCase()
      const filteredTexts = this.state.users.filter(row => {
        return row.function.toLowerCase().indexOf(searchText) !== -1;
      });
      this.setState({
        selectedFilter: filteredTexts.length > 1 ? 'all' : searchText,
        filteredList:
        searchText === 'all'
            ? users
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

            />
            <Filter 
              selectFilter={this.selectFilter}
              selectedFilter={this.state.selectedFilter}
            />
            {this.state.users.length}
            <List 
              users={this.state.filteredList}
              url={users[0].url}
            />
        </div>
      );
    }
  }