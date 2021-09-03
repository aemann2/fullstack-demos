import React from 'react';

interface IProps {
	image: string;
	alt: string;
}

const Window: React.FC<IProps> = (props) => {
	return (
		<div>
			<img src={props.image} alt={props.alt} />
			<div>{props.children}</div>
		</div>
	);
};

export default Window;
