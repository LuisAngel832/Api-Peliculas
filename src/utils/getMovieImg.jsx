import placeholder from "../img/paceholder.png"

const getMovieImg = (path,width)=>{
    return path?`https://image.tmdb.org/t/p/w${width+path}`:placeholder
}

export default getMovieImg

// const imageUrl = "https://image.tmdb.org/t/p/w300"+item.poster_path;