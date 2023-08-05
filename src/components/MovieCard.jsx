import styles from "./MovieCard.module.css"
import {Link} from "react-router-dom"

const MovieCard=({item})=>{
const imageUrl = "https://image.tmdb.org/t/p/w300"+item.poster_path;

    return(<li className={styles.movieCard}>
        <Link to={"movies/"+item.id}>
            <img src={imageUrl} alt={item.title} width={230} height={345} className={styles.movieImage} />
        </Link>
        <div className={styles.title}>{item.title}</div>
    </li>)
}

export default MovieCard