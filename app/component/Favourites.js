import React from "react";
import { useGlobal } from "../context/Global";
import { MdTrendingUp } from "react-icons/md";
import GifItem from "./GifItem";
import Masonry from "react-masonry-css";
import Loader from "./Loader";

const Favourites = ({rendered}) => {

  const { favourites, loading } = useGlobal();

  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    977: 2,
    500: 1,
  };

  return (
    <>
      <div className="main px-16">

        <div className="gif-box border-2 px-16 py-4">
          <h2 className="flex items-center text-xl gap-2" >{<MdTrendingUp />}Favourites</h2>
          {loading && <Loader />}

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >

            {favourites.map((giff) => {
              return <GifItem key={giff.id} rendered={rendered} {...giff} giffItem={giff} />;
            })}
          </Masonry>

        </div>

      </div>
    </>
  );
};

export default Favourites;
