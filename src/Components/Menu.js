import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'

export const Menu = ({ items, toggle, classNames }) => (
	<header>
		<nav className="site-navigation">
		<ul className={classNames}>
			{ 
				items.map( (item) => (
					<li key={item.id} className="menu__item">
						<Link to={ '/' + item.href}>{item.text}</Link>
					</li>
					) 
				) 
			}
		</ul>
		<button onClick={toggle} className="menu__toggle-button">Menu</button>
		</nav>	
	</header>
)