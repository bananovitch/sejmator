import React from 'react';
import { Link } from 'react-router-dom'
export const Menu = ({ items }) => (
	<ul className="menu">
		{ 
			items.map( (item) => (
				<li key={item.id}>
					<Link to={ '/' + item.href}>{item.text}</Link>
				</li>
				) 
			) 
		}
	</ul>
)