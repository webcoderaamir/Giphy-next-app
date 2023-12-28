"use client";
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { globalReducer } from '../reducers/globalReducer';
import axios from 'axios';
import { ADD_FAVOURITES, GET_RANDOM, GET_SEARCH, GET_TRENDING, LOADING, SAVE_FAVOURITES } from '../utils/globalActions';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://api.giphy.com/v1/gifs"
// console.log(apiKey);

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

  const initialState = {
    loading: false,
    searchResults: [],
    trending: [],
    favourites: [],
    random: {}
  }

  const [state, dispatch] = useReducer(globalReducer, initialState)
  // console.log(state)
  
  // get trending gifs
  const getTrending = async () =>{
    dispatch({type: LOADING})
    const res = await axios.get(`${baseUrl}/trending?api_key=${apiKey}&limit=30`)
    dispatch({type: GET_TRENDING, payload: res.data.data})
    // console.log(res.data.data)
  }

  //get random gif
  const randomGiff = async () => {
    dispatch({type: LOADING})
    const res = await axios.get(`${baseUrl}/random?api_key=${apiKey}`)
    dispatch({type: GET_RANDOM, payload: res.data.data})
  }

  //get search-results gif
  const searchGiffs = async (query) => {
    dispatch({type: LOADING})
    const res = await axios.get(`${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=25`)
    dispatch({type: GET_SEARCH, payload: res.data.data})
  } 

  //add to favourites gifs
  const addToFavourites = (gif) => {
    const storedItems = JSON.parse(window.localStorage.getItem('favourites')) || []
    const existingItems = storedItems.find(item => item.id === gif.id)

    if(!existingItems){
      const items = [...storedItems, gif]
      window.localStorage.setItem('favourites', JSON.stringify(items))
      dispatch({type: ADD_FAVOURITES, payload: gif})
      alert('Added to Favourites');
    } else {
      alert('Already Exists');
    }
  }

  const removeFromLocalStorage = (gif) => {
    const storedItems = JSON.parse(window.localStorage.getItem('favourites')) || []
    const items = storedItems.filter((item) => item.id !== gif.id)
    window.localStorage.setItem('favourites', JSON.stringify(items))

    //update_list
    getFromLocalStorage()
  }

  const getFromLocalStorage = () => {
    const storedItems = JSON.parse(window.localStorage.getItem('favourites')) || []
    dispatch({type: SAVE_FAVOURITES, payload: storedItems})
  }
  
  // initial renders
  useEffect(() => {
    getTrending()
    randomGiff()
    getFromLocalStorage()
  }, [])

  return (
    <GlobalContext.Provider value={{
      ...state,
      randomGiff,
      searchGiffs,
      addToFavourites,
      removeFromLocalStorage
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};