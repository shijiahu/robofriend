import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{
	// if (true){
	// 	throw new Error('Nooooooooo!');
	// }
	// errorboundry test!
	const cardsArray = robots.map((user,i)=>{
		return (
			<Card 
			key={i} 
			// unique key is for react to know which one should be deleted !important
			id={user.id} 
			name={user.name} 
			email={user.email} 
			/>
		);
	})
	return (
		<div>
			{cardsArray}
		</div>
	);
}
export default CardList;