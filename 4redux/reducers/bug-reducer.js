import * as actions from '../constants/constants'
let id;
export default bug_reducer = (state = null, action) => {
    switch(actions.type){
        case actions.BUG_CREATED:
            return {
                ...state, 
                bug: {
                    id: ++id,
                    description: action.payload.description,
                    resolved: false
                }
            }
        case actions.BUG_REMOVED:
            return state.filter(bug => bug!== action.bug.id)
        
        default: 
            return state
    }
}
