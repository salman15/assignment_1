import React from 'react';
import Search from '../components/search/search'
import Filter from '../components/filter/filter';
import List from '../components/list/list';

export default class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        loading: 'true'
      };
    }

    componentWillMount(){
        this.setState({
            loading: 'false'
          });
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
            <Search/>
            <Filter/>
            <List/>
        </div>
      );
    }
  }