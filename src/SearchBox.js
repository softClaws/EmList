import React from 'react';

const SearchBox=({search, searchChange})=>{
	return (
		<div>
		<input type='search' 
		placeholder='Search staff'
		onChange={searchChange}
		value={search}
		/>
		</div>
		);


}
export default SearchBox;