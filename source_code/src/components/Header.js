import React from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logOut } from "../store/UserSlice";

const Header = (props) => {

	const user = useSelector(state => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logOutHandler = () => {
		dispatch(logOut());
		navigate("/login");
	}
	

	return (
		<Nav>
			<Logo to="/">
				<img src="/images/logo.svg" alt="logo" />
			</Logo>
			{
				user.isLogged && <NavMenu>
				<Link to="/home">
					<A>
						<img src="/images/home-icon.svg" alt="HOME" />
						<span>Home</span>
					</A>
				</Link>
				<Link to="/recommended">
					<A>
						<img src="/images/series-icon.svg" alt="HOME" />
						<span>Recommended</span>
					</A>
				</Link>
				<Link to="/trending">
					<A>
						<img src="/images/watchlist-icon.svg" alt="HOME" />
						<span>Trending</span>
					</A>
				</Link>
				<Link to="/upcoming">
					<A>
						<img src="/images/movie-icon.svg" alt="HOME" />
						<span>Upcoming</span>
					</A>
				</Link>
				<Link to="/search">
					<A>
						<img src="/images/search-icon.svg" alt="HOME" />
						<span>Search</span>
					</A>
				</Link>
			
		</NavMenu>
			}
				{
					!user.isLogged  ?
					(<Login to="/login">Login</Login>) : 
					(<SignOut>
					<UserImg src={user.userInfo.picture.data.url} />
						
						<DropDown>
							<span onClick={logOutHandler}>Sign out</span>
						</DropDown>
					</SignOut>  )
				}
				

				
		</Nav>
	)
}

const Nav = styled.nav`
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`;

const Logo = styled(Link)`
	padding: 0;
	width: 80px;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;
	img {
		display: block;
		width: 100%;
	}
`;

const A = styled.div`
display: flex;
align-items: center;
padding: 0 12px;

img {
	height: 20px;
	min-width: 20px;
	width: 20px;
	z-index: auto;
	margin-right: 5px;
}

span {
	color: rgb(249, 249, 249);
	font-size: 16px;
	letter-spacing: 1.42px;
	line-height: 1.08;
	padding: 2px 0px;
	white-space: nowrap;
	position: relative;

	&:before {
		background-color: rgb(249, 249, 249);
		border-radius: 0px 0px 4px 4px;
		bottom: -6px;
		content: "";
		height: 2px;
		left: 0px;
		opacity: 0;
		position: absolute;
		right: 0px;
		transform-origin: left center;
		transform: scaleX(0);
		transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
		visibility: hidden;
		width: auto;
	  }
	}
	&:hover {
	  span:before {
		  transform: scaleX(1);
		  visibility: visible;
		  opacity: 1 !important;
		  }
	  }

`;
const NavMenu = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	height: 100%;
	justify-content: flex-end;
	padding: relative;
	margin:0;
	margin-top:10px;
	margin-right: auto;
	margin-left: 25px;

	@media (max-width: 768px){
		display: none;
	}

`;

const Login = styled(Link)`
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transisition: all 0.2s ease 0s;

	&:hover {
		background-color: #f9f9f9;
		color: black;
	}
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;