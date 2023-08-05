import  {useState, useEffect } from "react"
import {get} from "../data/httpclient.js"
import MovieCard from "../components/MovieCard"
import "./ContexMovieCard.css"

const ContextMovieCard=()=>{
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setMovies(data.results)
        },{})
    })

    return(
        <ul className="container">
            {movies.map((item)=>( 
            <MovieCard
            key={item.id}
            item={item}            
            />
            ))}
        </ul>
        )
}

export default ContextMovieCard