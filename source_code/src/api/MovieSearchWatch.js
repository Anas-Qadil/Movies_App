import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import data from "../disneyPlusMoviesData.json"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"

const MovieSearchWatch = () => {

	const  movies = useSelector(state => state.Movies);
	const user = useSelector(state => state);
	if (user.isLogged == false)
    	navigate("/");
	const [trailer, setTrailer] = useState("null");
	const {id} = useParams();

	const baseUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=25c04db285e4cde923dc81adbfaff8d0`;

	useEffect(() => {
		axios.get(baseUrl)
		.then(res => {
			const key = res.data.results[res.data.results.length - 1].key;
			setTrailer((state) => key);
		}).catch((e)=>{
			alert(e);
			navigate("/home");
		  });;
	}, []);

	const YoutubeBaseUrl = "https://www.youtube.com/embed/";

	return (
		<Container>
		<Wrap>
			
			{/* <video autoPlay={true} loop={true} playsInline={true} controls>
			<source
				src={trailer != "null" ? YoutubeBaseUrl + trailer : "/videos/1564674844-disney.mp4"}
				type="video/mp4"
				/>
			</video> */}
			<iframe
				src={YoutubeBaseUrl + trailer}
				frameborder="0"
				allow="autoplay; encrypted-media"
				allowfullscreen
				title="video"
			/>
			</Wrap>
		</Container>
	)
}

const Container = styled.div`
  padding: 0 0 26px;
  margin-top: 100px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 48.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  iframe {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
export default MovieSearchWatch;