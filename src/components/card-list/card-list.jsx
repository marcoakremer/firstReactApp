
import './card-list.css'
import Cards from '../cards/cards'

const CardList = ( { monsters } ) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <Cards monster={monster} />
            )
        })}
    </div>
)    
    

export default CardList