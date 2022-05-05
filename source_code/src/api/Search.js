import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Recommends from "../components/Recommends";
import NewDiseny from "../components/NewDiseny";
import Originals from "../components/Originals";
import Trending from "../components/Trending";
import axios from 'axios'
import { Link } from "react-router-dom";
import { upcoming } from "../store/UserSlice";

const switchArray = (data) => {
	const res = data.data.results;
	return res;
}

const Search = (props) => {

	const [value, setValue] = useState("");
	const [movieSearch, setMovieSearch] = useState(0);
	const endPoint = "https://api.themoviedb.org/3/search/movie?api_key=25c04db285e4cde923dc81adbfaff8d0";

	const onChangeHandler = (e) =>{
		const inputValue = e.target.value;
		axios.get(endPoint, {params: {
			query: inputValue
		}}
		).then((res)=>setMovieSearch((state) => switchArray(res)));
	}

	if (movieSearch != 0)
		console.log(movieSearch);

	return (
		<All1>
			<All2>
				<h1>Search</h1>
				<SearchInput placeholder="Search Movie" onChange={onChangeHandler} />
			</All2>
			<Container>
			<Content>
				{
					movieSearch != 0  && movieSearch.map((data, key) => { 
					{
						const imgUrl = "https://image.tmdb.org/t/p/original//";
						const newUrl = imgUrl + data.poster_path;
						// console.log(newUrl);
						return ( 
							<Wrap key={key}>
								<Link 
								// to={`/movie/${ data.id }`}
								to={{
									pathname: `/moviesearch/${ data.id }`,
									query: data
								  }}
								>
									<img  src={newUrl} />
								</Link>
							</Wrap>);
					}

					})
				}
			</Content>
		</Container>
		</All1>
	);
}

const SearchInput = styled.input`
	width: 60%;
	height: 100%;
	padding: 10px 4px;
	border-radius: 5px;
`;

const All1 = styled.div`

  margin-top: 100px;
  padding: 0 0 26px;
  `;

const All2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;



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
  width:100%;
  height: 100%;
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
  width:100%;
  height:100%;
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

export default Search;