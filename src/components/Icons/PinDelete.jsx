import React from 'react';

function PinDelete({width, height, color}) {
	
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M20,46a1,1,0,0,1-.707-.293C18.627,45.042,3,29.285,3,18A16.836,16.836,0,0,1,20,1,16.836,16.836,0,0,1,37,18c0,11.285-15.627,27.042-16.293,27.707A1,1,0,0,1,20,46Z" fill={color}/>
                <circle cx="20" cy="18" fill="#fff" r="6"/>
            </g>
        </svg>
	);
};

export default PinDelete;