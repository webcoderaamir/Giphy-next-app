import React from 'react'
import { useGlobal } from '../context/Global'
import Loader from './Loader'
import GifItem from './GifItem'

const Random = () => {

    const { random, loading } = useGlobal()

    return (
        <>
            <div className="gif-box random">
                {loading ? <Loader /> : <GifItem {...random} />}
            </div>
        </>
    )
}

export default Random