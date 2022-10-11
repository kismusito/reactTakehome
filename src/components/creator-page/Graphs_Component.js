import React, { Component } from "react";

import './Graphs.css'
import { DataBlock, DataGraph } from '../DataComponents';

const Graphs_Component = () => {
	return (
		<div className='container-wrapper'>
			<div className='container-graphs'>
				<DataGraph />
				<DataGraph />
			</div>

			<div className='container-blocks'>
				<DataBlock
					percentChange= "3% up"
					data= "12"
					title= "New Followers"
				/>
				<DataBlock
					percentChange="4% down"
					data="352$"
					title="Earnings"
				/>
				<DataBlock
					percentChange="3% up"
					data="32"
					title="Followers"
				/>
				<DataBlock
					percentChange="10% up"
					data="73"
					title="Likes"
				/>
				<DataBlock
					percentChange="2% down"
					data="28"
					title="Comments"
				/>
			</div>
		</div>
	);
};

export default Graphs_Component;