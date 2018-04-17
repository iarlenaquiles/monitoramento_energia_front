import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';

const data = [
{name: 'jan', corrente: 2400, amt: 2400},
{name: 'fev', corrente: 1398, amt: 2210},
{name: 'mar', corrente: 9800, amt: 2290},
{name: 'abr', corrente: 3908, amt: 2000},
{name: 'mai', corrente: 4800, amt: 2181},
{name: 'jun', corrente: 3800, amt: 2500},
{name: 'jul', corrente: 4300, amt: 2100},
];

class App extends Component {
	render () {
		return (
			<LineChart
			width={600}
			height={300}
			data={data}
			margin={{top: 5, right: 30, left: 20, bottom: 5}}
			>
			<Line
			type='monotone'
			dataKey='corrente'
			stroke='#8884d8'
			activeDot={{r: 8}}
			/>
			<CartesianGrid strokeDasharray='3 3'/>
			<Tooltip/>
			<YAxis/>
			<XAxis dataKey='name'/>
			<Legend />
			</LineChart>
			);
		}
	}

export default App;
