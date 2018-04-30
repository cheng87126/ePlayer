import { observable } from 'mobx'

class movieList {
	@observable list = [{
		name:'',
		path:''
	}]
}

export default movieList