import React from 'react'
import {observer} from 'mobx-react'

import sty from './list.scss'

@observer
class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	render(){
		const listItems = this.props.movieList.list.map((item,idx) =>
			<li key={idx}>{item.name}</li>
		)
		return (
			<ul className={sty.list}>
				{listItems}
			</ul>
		)
	}
}

export default List