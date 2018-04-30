import React from 'react'

import OpenFile from './openfile'

import styles from './player.scss'

class Player extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			url:''
		}

		this.openMovie = this.openMovie.bind(this)
	}
	openMovie(path){
		this.setState({url:path})
	}
	render(){
		let input = null
		if(this.state.url.length === 0){
			input = <OpenFile onOpenMove={this.openMovie} movieList={this.props.movieList}/>
		}
		return (
			<div className={styles.player}>
				{input}
				<video src={this.state.url} controls="controls"></video>
			</div>
		)
	}
}

export default Player