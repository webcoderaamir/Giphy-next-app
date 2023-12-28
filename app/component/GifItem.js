import React, { useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Modal from './Modal';
import { useGlobal } from '../context/Global';
import Loader from './Loader';

const GifItem = ({ id, title, embed_url, rendered, url: link, images: { original: { url } } }) => {

  const [model, setModel] = useState(false);
  const { loading, addToFavourites, removeFromLocalStorage } = useGlobal()

  return (
    <>

      {model && <Modal title={title} giff={url} link={link} embed_url={embed_url} setModel={setModel} />}

      {loading ? <Loader /> :
        <div className='image-box relative max-w-fit mt-4' onDoubleClick={() => {
          setModel(true)
         }} >

          <img className='w-80 rounded' src={url} alt={title} />
          <h2 className='py-2 text-center text-xs' >{title}</h2>

          <div className="icon absolute top-4 right-4 cursor-pointer" onClick={() => {
            if (rendered === 'favourites') {
              removeFromLocalStorage({
                id,
                title,
                url: link,
                images: {
                  original: { url }
                }
              })
            } else {
              addToFavourites({
                id,
                title,
                url: link,
                images: {
                  original: { url }
                }
              })
            }
          }} >
            {rendered === 'favourites' ? <IoMdClose className='heart text-3xl transition .3s ease-in-out' /> : <IoMdHeart className='heart text-3xl transition .3s ease-in-out' />}
            {/* <IoMdHeart className='text-4xl transition .3s ease-in-out' /> */}
          </div>
        </div>
      }

    </>
  )
}

export default GifItem