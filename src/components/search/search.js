import React from 'react';
import AutoComplete from './autocomplete'
let showAutoComplete = false
export default function Search(props){
    return(
        <div className="searchContianer">
            <input 
                className="searchInput" 
                placeholder="Search" 
                //value={props.selectedFilter === "all" ? target.value : props.selectedFilter} 
                onChange={
                    filter => {
                        props.selectFilter(
                        filter.target.value, 
                        filter.target.value.length > 0 ? showAutoComplete = true : showAutoComplete = false
                )
                }
            } />
            {

            }
            {
                showAutoComplete === true ? (<AutoComplete 
            selectFilter={props.selectFilter} 
            items={props.filteredList} />)
            : null
            }
            

        </div>
    );
}