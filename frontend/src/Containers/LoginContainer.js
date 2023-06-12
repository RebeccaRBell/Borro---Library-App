import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from '../helpers/UserService';
import './LoginContainer.css'
import BurgerMenu from '../Components/BurgerMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


const LoginContainer = ({setPassword, setUsers, setUser, setEmail, users, password, user, email, verifyUser}) => {

	const [hoverMenu, setHoverMenu] = useState(false);

        useEffect(() => {
          getUsers().then(res => res.json()).then(data => setUsers(data))
          console.log(users)
          verifyUser();
        }, [password])

        const handleEmail = (event) => {
                setEmail(event.target.value);
        }

        const handlePassword = (event) => {
                setPassword(event.target.value);
        }

	const handleMenuHover = () => {
		setHoverMenu(true)
	}

	const handleMenuHoverLeave = () => {
		setHoverMenu(false);
	};


  	const hovering = `${hoverMenu ? "hovering" : ""}`;

       
  return (
		<div className="login-container">
			{hoverMenu ? (
				<div onMouseLeave={handleMenuHoverLeave}>
					<BurgerMenu/>
				</div>
			) : null}
			<div className="opening-left">
				<h1 className="logo-text">Borro</h1>
				<h3>Your Online Library</h3>
			</div>
			<div className="opening-right">
				<div>
					<FontAwesomeIcon
						icon={faBars}
						onMouseOver={handleMenuHover}
						id="hamburger"
						className={hovering}
						
					/>
				</div>
				<div className="login">
					<form className="login-form">
						<h3>Log In</h3>
						<input
							type="text"
							placeholder="email"
							onChange={handleEmail}
							autoComplete="email"
						/>
						<input
							type="password"
							placeholder="password"
							onChange={handlePassword}
							autoComplete="current-password"
						/>
						{user ? (
							<Link to="/home">
								<button className="login-button">Come on in!</button>
							</Link>
						) : (
							<button className="login-button">Log In</button>
						)}
						<Link to="/register">
							<button>Register</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginContainer