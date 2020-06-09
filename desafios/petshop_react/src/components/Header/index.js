import React from 'react';
import { Navbar } from 'react-bootstrap';

import Logo from '../../assets/logo.svg';

export default ({ title, logo = Logo }) => (
	<Navbar bg='dark' variant='dark'>
		<Navbar.Brand href='#home' className='d-flex align-items-center'>
			<img
				alt=''
				src={logo}
				width='60'
				height='60'
				className='d-inline-block align-top'
			/>
			<h1 className='ml-3 mb-0'>{title || 'Home'}</h1>
		</Navbar.Brand>
	</Navbar>
);
