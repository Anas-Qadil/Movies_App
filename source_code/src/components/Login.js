import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
	
	const user = useSelector(state => state);
	const navigate = useNavigate();

	useEffect(() => {
		user.isLogged && navigate("/home");
	}, []);

	return(
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src="/images/cta-logo-one.svg" alt="logo" />
					<Signup>Get All There</Signup>
					<Descrition>Get Premier Access to Raya and the Last Dragon for an additional fee with Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</Descrition>
					<CTALogoTwo src="/images/cta-logo-two.png" alt="logo two" />
				</CTA>
				<BgImage />
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

const BgImage = styled.div`
	height: 100%;
	z-index: -1;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-image: url("/images/login-background.jpg");
`;

const Content = styled.div`
	margin-bottom:10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const CTA = styled.div`
	max-width: 650px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const CTALogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

const Signup = styled.a`
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

const Descrition = styled.p`
	color: hsla(0, 0%, 95.3%, 1.0);
	font-size: 11px;
	margin: 0 0 42px;
	line-height: 1.5em;
	letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
	max-width: 600px;
	margin-bottom: 20px;
	display: inline-block;
	vertical-align: bottom;
	width: 100%;
`;

export default Login;