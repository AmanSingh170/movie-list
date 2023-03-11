import { useEffect, useState } from "react";
import "./Movie.css";

const Moviecard=()=>{
    const [movie,setMovie]=useState([]);
    const [querry,setQuerry]=useState("");
    const getMovieReq=async ()=>{
      const url="https://www.omdbapi.com/?apikey=45f0782a&s=war";
      const response=await fetch(url);
      const data=await response.json();
      console.log(data.Search)
      setMovie(data.Search)
    };
    useEffect(()=>{
        getMovieReq();
    },[])
    
    return(
        <>
        
       <input type="text" className="search" placeholder="search the name" onChange={(e)=>setQuerry(e.target.value)}/>
        <h3>Search The Name</h3>
       
        {
            movie.filter((key)=>key.Title.toLowerCase().includes(querry)).map((key,index)=>{
              return(
                <>
                <div className="cards">
               <img src={key.Poster} alt="img"/>
               <h3>{key.Title}</h3>
               </div>
                  </>
              )
              
            })
        }
        </>
    )
};
export default Moviecard;