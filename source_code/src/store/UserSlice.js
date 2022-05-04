import { createSlice, configureStore } from "@reduxjs/toolkit"
import data from "../disneyPlusMoviesData.json"

const  movies = [];
let i = 1;
while (i < 17)
{
	movies.push(data.movies[i])
	i++;
}

const initialState = {
	userInfo: {
		fullName: "default",
		email: "default",
		picture: "default"
	},
	isLogged : false,
	Movies: movies,
	upcomingmovies: "default",
	recommanded: "default",
	trending: "default",

}


const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser : (state, payload) => {
			state.userInfo.fullName = payload.payload.fullName;
			state.userInfo.email = payload.payload.email;
			state.userInfo.picture = payload.payload.picture;
			state.isLogged = true;
		},
		logOut : (state) => {
			state.userInfo.fullName = "default";
			state.userInfo.email = "default";
			state.userInfo.picture = "default";
			state.isLogged = false;
		},
		upcoming : (state, payload) => {
			state.upcomingmovies = payload.payload;
		},
		recom : (state, payload) => {
			state.recommanded = payload.payload;
		},
		trend : (state, payload) => {
			state.trending = payload.payload;
		},
	}
});

const store = configureStore({
	reducer: userSlice.reducer
})

export const {addUser, logOut, upcoming, recom, trend} = userSlice.actions;
export {store};