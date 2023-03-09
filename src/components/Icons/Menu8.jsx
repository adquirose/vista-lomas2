import React from 'react';

function Menu8({width, height, color}) {
	
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill={color}>
                <rect height="4" width="44" rx="1" ry="1" x="2" y="22"/>
                <rect height="4" width="44" fill={color} rx="1" ry="1" x="2" y="8"/>
                <rect height="4" width="44" fill={color} rx="1" ry="1" x="2" y="36"/>
            </g>
        </svg>
	);
};

export default Menu8;

