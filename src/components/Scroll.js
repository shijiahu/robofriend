import React from 'react';

const Scroll = (props)=>{
	return (
		// css way: overflow-y    make elements scrollable
		// jsx way: overflowY
		<div style={{overflowY: 'scroll', border:'1px solid black', height: '900px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;