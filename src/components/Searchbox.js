import React from 'react';

function Searchbox({ searchChange }) {
    return (
        <div>
        <input
            ariaLabel='Enter Robots'
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange={searchChange}
        />
        </div>
    )
}

export default Searchbox;
