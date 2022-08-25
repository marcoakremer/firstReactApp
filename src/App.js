import { Component } from 'react'
import CardList from './components/card-list/card-list';
// 
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(()=> {
        return { monsters: data}
      })
    })
  }
  onChg = (e) => {
    const str = e.target.value.toLocaleLowerCase();
    this.setState(()=> {
      return { searchField: str}
    })
  }
  render() { 
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(el => {
      return el.name.toLocaleLowerCase().includes(searchField)
      })

      return (
      <div className="App">

      <input className='search-box' type='search' placeholder='type some' onChange={this.onChg} />
          

      <CardList monsters={filteredMonsters}/>

    </div>
  )
}}

export default App;
