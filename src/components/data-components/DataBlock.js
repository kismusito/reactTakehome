import React from "react";
import './DataBlock.css'

const DataBlock = ({percentChange, data, title }) => {
	return (
		<div className='block-wrapper'>
			<h3>{percentChange }</h3>
			<h1>{data }</h1>
			<h2>{title }</h2>
		</div>
	);
};

export default DataBlock;