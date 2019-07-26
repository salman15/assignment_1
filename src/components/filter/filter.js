import React from 'react';
import FilterItem from './filterItem';

export default function Filter(props){
    return(
        <form className="formContainer">
            <FilterItem 
                items={props.filters} 
                selectedFilter={props.selectedFilter} 
                selectFilter={props.selectFilter}/>
        </form>
    );
}
