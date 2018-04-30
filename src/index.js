import React from 'react'
import ReactDOM from 'react-dom'

import movieList from './store/movieList'

import App from './component/app'

const store = new movieList()
ReactDOM.render(
	<App movieList={store}/>,
	document.getElementById('app')
)