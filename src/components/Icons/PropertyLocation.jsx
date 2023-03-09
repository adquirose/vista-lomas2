import React from 'react';

function PropertyLocation({width, height}) {
	
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polyline fill="none" points="2 21 24 3 46 21" stroke="#000000" strokeLinecap="butt"/>
                <polyline fill="none" points="7 24 7 45 29 45" stroke="#000000"/>
                <path d="M46,32.634C46,37.366,38,45,38,45s-8-7.634-8-12.366C30,27.748,34.16,25,38,25S46,27.748,46,32.634Z" fill="none"/>
                <circle cx="38" cy="33" fill="none" r="1"/>
            </g>
        </svg>
	);
};

export default PropertyLocation;