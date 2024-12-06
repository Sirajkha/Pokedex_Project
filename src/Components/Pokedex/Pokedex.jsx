import PokemonList from "../pokemon-list/pokemonList"
import Search from "../Search/Search"
import './Pokedex.css'
function Pokedex(){

    return( 
        <div className="pokedex-wrapper">
            <h2 id="pokedex-heading">Pokedex</h2> 
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex