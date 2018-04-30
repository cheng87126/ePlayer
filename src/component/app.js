import React from 'react'

import Player from './player'
import List from './list'

import sty from './app.scss'

class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<section className={sty.main}>
				<Player movieList={this.props.movieList}/>
				<List movieList={this.props.movieList}/>
			</section>
		)
	}
}

export default App