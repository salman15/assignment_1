import React from 'react';
import FilterItem from './filterItem';

const filters = ['All','Developers', 'UX Designers', 'Visual Designers', 'Infra', 'IOS', 'PHP'];

export default function Filter(props){
    return(
        <form className="formContainer">
            <FilterItem 
                items={filters} 
                selectedFilter={props.selectedFilter} 
                selectFilter={props.selectFilter}/>
        </form>
    );
}
