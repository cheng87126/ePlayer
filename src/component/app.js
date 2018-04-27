import React from 'react'

import Player from './player'
import List from './list'

import main from './app.scss'

class App extends React.Component{
	render(){
		return (
			<section className="main">
				<Player/>
				<List/>
			</section>
		)
	}
}

export default App