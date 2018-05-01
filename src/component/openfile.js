import React from 'react'
import {observer} from 'mobx-react'

import sty from './openfile.scss'

import open from '../img/open.svg'

@observer
class OpenFile extends React.Component{
	constructor(props){
		super(props)

		this.handleFiles = this.handleFiles.bind(this)

		this.fileRef = React.createRef()
	}
	handleFiles(){
		const fileRef = this.fileRef.current,
		path = fileRef.files[0].path
		name = fileRef.files[0].name
		this.props.onOpenMove(path)

		this.props.movieList.list = [{
			name,
			path
		}]
	}
	render(){
		return (
			<label htmlFor="open" className={sty.open}>
				<img src={open} alt="open"/>
				<input ref={this.fileRef} type="file" name="open" id="open" onChange={this.handleFiles}/>
			</label>
		)
	}
}

export default OpenFile