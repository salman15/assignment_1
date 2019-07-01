import React from 'react';
import FilterItem from './filterItem';

const filters = ['Developers', 'UX Designers', 'Visual Designers', 'Infra', 'IOS', 'PHP'];

export default function Filter(){
    return(
        <form className="formContainer">
            <FilterItem items={filters}/>
        </form>
    );
}
