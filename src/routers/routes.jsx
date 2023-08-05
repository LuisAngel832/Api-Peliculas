import {BrowserRouter as Router,
Routes, Route} from "react-router-dom"
import LandingPages from "../pages/LandigPage"
import MovieDetails from "../pages/MovieDetails"

const MyRoutes=()=>{
    return(
        //Forma de enrutar
        <Router>
            <Routes>
        {/*aqui estamos siguiendo mormas de react*/}
                <Route exact path="/" element={<LandingPages/>}/>

                <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>

            </Routes>
        </Router>
    )
}

export default MyRoutes