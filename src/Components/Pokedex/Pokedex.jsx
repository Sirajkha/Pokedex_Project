import PokemonList from "../pokemon-list/pokemonList"
import Search from "../Search/Search"
import './Pokedex.css'
function Pokedex(){

    return( 
        <div className="pokedex-wrapper">
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex