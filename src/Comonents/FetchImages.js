import axios from 'axios'
import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

function FetchImages() {

    const [images, setImages] = useState([])
    // const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(8)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products?skip=0&limit=${limit}`)
        .then(res => {
            setImages(res.data.products)
            //setImages([...images, ...res.data.products])
            //setImages((prev) => [...prev, ...res.data.products])
            //setLoading(false)
        })
        .catch(err => {console.log(err)})
    }, [limit])

    const fetch = () => {
        setLimit((prev) => prev + limit)
    }


    // infinite scroll through scroll event on windows

    // const handelScroll = async () => {
    //     // console.log("scrollHeight" + document.documentElement.scrollHeight);
    //     // console.log("innerHeight" + window.innerHeight);
    //     // console.log("scrollTop" + document.documentElement.scrollTop);
    //     try {
    //       if (
    //         window.innerHeight + document.documentElement.scrollTop + 1 >=
    //         document.documentElement.scrollHeight
    //       ) {
    //         //setLoading(true);
    //         setLimit((prev) => prev + 10)
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    
    //   useEffect(() => {
    //     window.addEventListener("scroll", handelScroll);
    //     return () => window.removeEventListener("scroll", handelScroll);
    //   }, []);
    
    

  return (
    <InfiniteScroll
    dataLength={images.length}
    next={fetch}
    hasMore={true}
    loader={<h4>Loading...</h4>}
    endMessage={
    <p>
      <b>Yay! You have seen it all</b>
    </p>}
    >
    <div>
    <div className='first'>
        <h1>Images of Products</h1>
    </div>
    <div className='first'>
        {/* {
        loading ? <h1>Wait A Moment...</h1> :  */}
        <>{images.map((img)=> {
            return <div key={img.id} className='img1'>
                <img height={250} width={250} src={img.thumbnail} alt="Loading..."/>
                <p>{img.title}</p>
            </div>
        })}</> 
        {/* } */}
    </div>
    </div>
    </InfiniteScroll>
  )
}

export default FetchImages