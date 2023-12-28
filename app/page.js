"use client";
import Header from "@/app/component/Header";
import React, { useState } from "react";
import Button from "./component/Button";
import { IoMdHeart } from "react-icons/io";
import { MdTrendingUp } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
import Trending from "./component/Trending";
import Random from "./component/Random";
import { useGlobal } from "./context/Global";
import Search from "./component/Search";
import Favourites from "./component/Favourites";

const page = () => {
  // const globalState = useGlobal()
  // console.log(globalState)
  
  const {randomGiff} = useGlobal()
  const [rendered, setRendered] = useState('trending')

  const content = () => {
    switch (rendered) {
      case 'trending':
        return <Trending />

      case 'favourites':
        return <Favourites rendered={rendered} />

      case 'random':
        return <Random />

      case 'search':
        return <Search />

      default:
        return <Trending />
    }
  }

  return (
    <>

      <h1 className="text-2xl text-center mt-2 text-slate-600">
        Giphy Next App
      </h1>
      <Header setRendered={setRendered} />

      <div className="element-content flex gap-8 items-center justify-center mt-8">
        <Button name={"Favourites"} icon={<IoMdHeart className="text-xl" />} onClick={() => {
          setRendered('favourites')
        }} />
        <Button
          name={"Trending Gifs"}
          icon={<MdTrendingUp className="text-xl" />}
          onClick={() => {
            setRendered('trending')
          }}
        />
        <Button name={"Random Gif"} icon={<FaRandom />} onClick={() => {
          setRendered('random')
          randomGiff()
        }} />
      </div>

      <div className="mt-8">
        {content()}
      </div>

    </>
  );
};

export default page;
