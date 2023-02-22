import React, {useState} from 'react';
import './Navbar.css';
import BurgerButton from '../BurgerButton/BurgerButton.jsx';

const Navbar = () => {

	const [clicked, setClicked] = useState(false)

	const handleClick = () => {
		setClicked(!clicked)
	}

	return (
		<header className='navbar-container'>
			<nav className='nav'>
				<h1>Marcelo Arancibia</h1>
				<ul className={`${clicked ? 'active' : ''}`}>
					<li><a href="/" className={`${clicked ? 'active' : ''}`}>Link</a></li>
					<li><a href="/" className={`${clicked ? 'active' : ''}`}>Link</a></li>
					<li><a href="/" className={`${clicked ? 'active' : ''}`}>Link</a></li>
					<li><a href="/" className={`${clicked ? 'active' : ''}`}>Link</a></li>
				</ul>
				<div className='burger-container'>
					<BurgerButton clicked={clicked} handleClick={handleClick} />
				</div>
				<div className={`bg-menu ${clicked ? 'active' : ''}`} />
			</nav>
		</header>
	)
}

export default Navbar
