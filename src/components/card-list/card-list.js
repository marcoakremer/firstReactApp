import { Component } from 'react'

class CardList extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div>
                {monsters.map((el) => {
                    return (
                    <h1> {el.name} </h1>
                    )
                })}
            </div>
        )
            
    }
}
export default CardList