import { Component } from 'react'
import CardList from './components/card-list/card-list';
// import SearchBox from './components/card-list/search-box';
// 
import "./App.css";
import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box';

// const App = () => {
//   const [ searchField, newSearchField ] = useState('')
//   const [ monsters, setMonsters ] = useState([])

//   const onChg = (event) => {
//       const str = event.target.value.toLocaleLowerCase();
//       newSearchField(str)
//     }
  
//     useEffect(() => {fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setMonsters(data))}, [])

//         const filteredMonsters = monsters.filter(el => {
//           return el.name.toLocaleLowerCase().includes(searchField)
//           })



//       return (
//         <div className="App">
//           <h1 className='app-h1'>MonsterS</h1>
//           <SearchBox placeHolder='start by searching a especific monster' handlerSearch={onChg}/>
//           <CardList monsters={filteredMonsters}/>
//         </div>
//   )
// }





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
        <h1 className='app-h1'>MonsterS</h1>
        <SearchBox placeHolder='start by searching a especific monster' handlerSearch={this.onChg}/>
        <CardList monsters={filteredMonsters}/>
      </div>
  )
}}

export default App;
