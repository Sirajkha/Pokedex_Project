import { Route, Router, Routes } from "react-router-dom";
import Pokedex from "../Components/Pokedex/Pokedex";
import PokemonDetail from "../Components/PokemonDetails/PokemonDetail";
function CustonRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <Pokedex /> }/>
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
    );
}

export default CustonRoutes;