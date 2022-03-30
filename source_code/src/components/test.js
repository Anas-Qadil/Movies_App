import React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react'


const Test = (props) => {

	const [state,  setState] = useState(0);
	const [result, setResult] = useState({
		first: 0,
		seconde: 0,
		operator: 0,
		result: 0
	});



	useEffect(() => {
		fetch("https://yts.torrentbay.to/api/v2/list_movies.json")
		  .then(res => res.json())
		  .then(
			(result) => {
				console.log(result);
			}
		  )
	  }, [])


	const check = (result) => {
		if (result.first !== 0)
			return (1);
		return (0);
	}
	
	const update_result = (result, setResult) => {
		let new_result = {
			first: 0,
			seconde: 0,
			operator: 0,
			result: 0
		}
		setResult(new_result);
	}

	return (
		<Tests>
			<All> 
				<Space>{state}</Space>
				{/* <Space>{result.result} | {result.first} | {result.seconde}</Space> */}
				<Cal>
					<Box onClick={()=>setState( state * 10 + 1 )}>1</Box>
					<Box onClick={()=>setState( state * 10 + 2 )}>2</Box>
					<Box onClick={()=>setState( state * 10 + 3 )}>3</Box>
					<Box onClick={() => {setResult(result => {
						if (check(result) === 0)
							return  ({first: state, seconde: 0, result: 0, operator:"+"})
						else
							return  ({first: result.first, seconde: state, result: 0, operator:"+"})
					}
					);  setState(0)}}>
					+
					</Box>
				</Cal>
				<Cal>
					<Box onClick={()=>setState( state * 10 + 4 )}>4</Box>
					<Box onClick={()=>setState( state * 10 + 5 )}>5</Box>
					<Box onClick={()=>setState( state * 10 + 6 )}>6</Box>
					<Box onClick={() => {setResult(result => {
						if (check(result) === 0)
							return  ({first: state, seconde: 0, result: 0, operator:"-"})
						else
							return  ({first: result.first, seconde: state, result: 0, operator:"-"})
					}
					);  setState(0)}}>-</Box>
				</Cal>
				<Cal>
					<Box onClick={()=>setState( state * 10 + 7 )}>7</Box>
					<Box onClick={()=>setState( state * 10 + 8 )}>8</Box>
					<Box onClick={()=>setState( state * 10 + 9 )}>9</Box>
					<Box onClick={()=>setState( state * 10 + 9 )}>/</Box>
				</Cal>
				<Cal>
					<Box onClick={()=>setState(0)}>,</Box>
					<Box onClick={()=>setState( state * 10 + 0 )}>0</Box>
					<Box onClick={()=> {setState(0); update_result(result, setResult)}}>.</Box>
					<Box onClick={() => {
						setState((state) => {
							if (result.first !== 0 && state !== 0)
								result.seconde = state;
							if (result.first !== 0 && result.seconde !== 0)
							{
								if (result.operator === "+")
								{
									result.result = result.first + result.seconde;
									update_result(result, setResult);
									return(setState(result.result));
								}
								if (result.operator === "-")
								{
									result.result = result.first - result.seconde;
									update_result(result, setResult);

									return (setState(result.first - result.seconde));
								}
							}
							return(state);
						})
					}}>=</Box>
				</Cal>
			</All>
		</Tests>
	)
}

const Tests = styled.div`
	margin-top: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: row;
`;

// const Btn = styled.button`
// 	cursor: pointer;
// 	color: white;
// 	background-color: rgba(0, 0, 0, 0.6);
// 	padding: 8px 16px;
// 	text-transform: uppercase;
// 	letter-spacing: 1.5px;
// 	border: 1px solid #f9f9f9;
// 	border-radius: 4px;
// 	transiztion all 0.2s ease 0s;

// 	&:hover {
// 		background-color: #f9f9f9;
// 		color: black;
// 	}
// `;

const Box = styled.div`
	cursor: pointer;
	padding: 3px 18px;
	margin-right: 25px;
	margin-left: 25px;
	border: 1px solid white;
	border-radius: 15%;
	user-select: none;
`;

const All = styled.div`
	display: flex;
	flex-direction: column;
	`;
	
const Cal = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;

`;

const Space = styled.div`
	margin-bottom: 20px;
	padding: 4px 0px;
	font-size: 20px;
`;

export default Test;