import styled from "styled-components";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDiseny from "./NewDiseny";
import Originals from "./Originals";
import Trending from "./Trending";

const Home = (props) => {

	const user = useSelector(state => state);

	const navigate = useNavigate();

	useEffect(() => {
		if (!user.isLogged)
			navigate("/login");
	}, [])
	
	return (
		<Container>
			<h1>hello {user.userInfo.fullName} </h1>
			<ImageSlider />
			<Viewers />
			<Recommends />
			<NewDiseny />
			<Trending />
			<Originals />
		</Container>
	);
}

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
	
	&:after {
		background: url(/images/home-background.png) center center / cover no-repeat fixed;
		content: '';
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`

export default Home;