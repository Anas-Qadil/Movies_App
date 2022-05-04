import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Recommends from "../components/Recommends";
import NewDiseny from "../components/NewDiseny";
import Originals from "../components/Originals";
import Trending from "../components/Trending";
import axios from 'axios'
import { Link } from "react-router-dom";
import { recom } from "../store/UserSlice";

const Recommended = (props) => {

	const user = useSelector(state => state);
	const [state, setState] = useState([]);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		axios.get("https://api.themoviedb.org/3/movie/popular?api_key=25c04db285e4cde923dc81adbfaff8d0")
		.then(res => setState(res.data.results));
	}, [])

	if (state.length > 0)
	{
		dispatch(recom(state));
		console.log(state);
	}

	return (
			<Container>
			<Content>
				{
					state && state.map((data, key) => { 
					{
						const imgUrl = "https://image.tmdb.org/t/p/original//";
						const newUrl = imgUrl + data.poster_path;
						// console.log(newUrl);
						return ( 
							<Wrap key={key}>
								<Link to={{
									pathname: `/movie/${ data.id }`,
									query: data
								  }}>
									<img  src={newUrl} />
								</Link>
							</Wrap>);
					}

					})
				}
			</Content>
		</Container>
	);
}

const Container = styled.div`
margin-top: 100px;
  padding: 0 0 26px;
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
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
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
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommended;