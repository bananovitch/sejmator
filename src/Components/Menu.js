import React from 'react';

export const Menu = ({ items }) => (
	<ul>
		{ items.map( (item) => (
			<li key={item.id}>{item.text}</li>
		) ) }
	</ul>
)