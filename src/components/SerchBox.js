import React from 'react';

const SerchBox = ({searchfield, searchChange})=>{
	return (
		<div className = 'pa2'>
			<input 
				aria-label = 'Search Robots'
				className = 'pa3 ba b-green bg-lightest-blue'
				type = 'search' 
				placeholder = 'Serch Robots'
				onChange = {searchChange}
			/>
		</div>
	)
}

export default SerchBox;