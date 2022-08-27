// import { Component } from 'react'
import './search-box.css'

// class SearchBox extends Component {
//     render() {
        
//         return (
//             <input className='search-box' type='search' onChange={this.props.handlerSearch} placeholder={this.props.placeHolder}/>
//         )
            
//     }
// }

const SearchBox = ({ handlerSearch, placeHolder }) => <input className='search-box' type='search' onChange={handlerSearch} placeholder={placeHolder}/>
export default SearchBox