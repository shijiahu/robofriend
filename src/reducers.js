import {CHANGE_SEARCH_FIELD} from './constants.js'

const initialState = {
	searchField: ''
}

export const searchRobots = (state=initialState, action={}) =>{
	switch(action.type){
		// console.log(action.type);
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});
			// return new state      not change       changed
		default:
			return state;
	}
}