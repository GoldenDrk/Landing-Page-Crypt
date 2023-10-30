import React from 'react';
import '../Styles/style.css';
import ButtonWallet from './Buttons/buttonWallet'

const NavBarCryptPlanet = () => {
  return (<>
		<div className="container-fluid" id="navbar">
			<div className="navbar__brand">
				<span style={{color: "white"}}>Crypt&nbsp;
				<i class="fa-solid fa-earth-americas fa-xl"></i>&nbsp;Planet</span>
			</div>
			<div className="navbar__options">
				<a href="asd">Discover</a>
				<a href="asd">Collection</a>
				<a href="asd">Artist</a>
				<ButtonWallet />
			</div>
		</div>
	</>)
}

export default NavBarCryptPlanet;