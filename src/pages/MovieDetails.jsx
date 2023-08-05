import { useEffect, useState } from "react"
import { get } from "../data/httpclient"
import {useParams} from "react-router-dom"
import getMovieImg from "../utils/getMovieImg"
import "./movieDetails.css"


const MovieDetails = ()=>{
    const {movieId} = useParams()
    const [generos, setGeneros] = useState([])
    const [movie, setMovie] = useState([])


    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data)
            setGeneros(data.genres[0])
        },[])
    })

    const imageUrl = getMovieImg(movie.poster_path,500)



    return(<div className="detailsContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImg" />
            <div className=" col movieDetails">
                <p className="title">
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Género: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descripcion: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>)
}

export default MovieDetails