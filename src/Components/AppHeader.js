import React from 'react';
import './AppHeader.css';

export const AppHeader = ({ children }) => (
	<div className="hero-section">
		<h1 className="App-title">{children}</h1>
	</div>
)