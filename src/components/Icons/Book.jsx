import React from 'react';

function Book({width, height}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" strokeLinecap="butt" x1="24" x2="24" y1="8" y2="42"/>
                <path d="M35,4c-6.1,0-11,2.7-11,6 c0-3.3-4.9-6-11-6S2,6.7,2,10v34c0-3.3,4.9-6,11-6s11,2.7,11,6c0-3.3,4.9-6,11-6s11,2.7,11,6V10C46,6.7,41.1,4,35,4z" fill="none" stroke="#000000"/>
            </g>
        </svg>
	);
};

export default Book;