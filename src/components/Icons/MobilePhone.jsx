import React from 'react';

function MobilePhone({width, height}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" strokeLinecap="butt" x1="8" x2="40" y1="10" y2="10"/>
                <line fill="none" strokeLinecap="butt" x1="8" x2="40" y1="36" y2="36"/>
                <path d="M36,46H12a4,4,0,0,1-4-4V6a4,4,0,0,1,4-4H36a4,4,0,0,1,4,4V42A4,4,0,0,1,36,46Z" fill="none" stroke="#000000"/>
            </g>
        </svg>
	);
};

export default MobilePhone;