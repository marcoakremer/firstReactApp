import './cards.css'

const Cards = (props) => {
    const { id, name, email } = props.monster
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set2`} alt="" />
            <h1> {name} </h1>
            <h2> {email} </h2>
        </div>
        )
    }
    
export default Cards