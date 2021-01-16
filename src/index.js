import React from 'react'
import ReactDom from 'react-dom'
import './styles.css'
import Header from './components/Header'

const Index = () => {
    return(
        <div><Header/></div>
    )
}
ReactDom.render(<Index/>, document.getElementById('root'))