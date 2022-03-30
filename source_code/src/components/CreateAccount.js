import styled from "styled-components";
import {useState, useEffect} from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { BrowserRouter as Router, Route } from "react-router-dom";


const CreateAccount = (props) => {
	
	const [isAuth, setIsAuth] = useState(0);
	const [Login, setLogin] = useState({
		FullName: "",
		Picture: "",
		email: "",
	})

	const responseFacebook = (response) => {
		const User = {
			FullName: response.name,
			Picture: response.picture,
			email: response.email
		}
		setLogin(User);
		console.log(User);
	}

	return (
		<Container>
			<Content>
				<Box>
					<SignUp>
						Sign Up
					</SignUp>
					<FacebookLogin
						appId="718152709208551"
						autoLoad="false"
						callback={responseFacebook}
						fields="name, email, picture"
						render={renderProps => (
							<Btn onClick={renderProps.onClick}>Login With Facebook</Btn>
						)}
					/>
					<Btn2>Login With Google</Btn2>
				</Box>
			</Content>
		</Container>
	)
}

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;

const Box = styled.div`
	height: 50%;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

`;

const Btn = styled.a`
	font-weight: bold;
	color: #f9f9f9;
	background-color: #0063e5;
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.5px;
	font-size: 19px;
	padding: 16.5px 0;
	border: 1px solid transparent;
	border-radius: 4px;
	cursor: pointer;
	&:hover{
		background-color: #0483ee;
	}
`;

const Btn2 = styled.a`
	font-weight: bold;
	color: black;;
	background-color: white;
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.5px;
	font-size: 19px;
	padding: 16.5px 0;
	border: 1px solid transparent;
	border-radius: 4px;
	cursor: pointer;
	&:hover{
		background-color: #bdbdbd;
		color: white;
	}
`;

const Content = styled.div`
	margin-bottom:10vw;
	margin-top: -100px;
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
`;

const SignUp = styled.h1`
	font-size: 60px;

	@media
`;


export default CreateAccount;
