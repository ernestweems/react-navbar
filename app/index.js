import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

//component
//State
//life cycle
//UI

class App extends React.Component {
    render() {
      return (<div className='container'>
            <Popular />
            </div>
      )
    }
}

ReactDOM.render(
    //react Element
    <App/>,
    //where to render to the element to
    document.getElementById('app')
)

