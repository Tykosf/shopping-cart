const initialState = {
    items: []
};

export default (state = initialState, action) => {
    
    const getNewArr = (array) => {
        const newarr = array.filter(e => e.id !== action.payload);
        let filtered = array.filter(e => e.id === action.payload);
        filtered.splice(0,1);
        return filtered.concat(newarr);       
    }

    switch(action.type){

     case 'ADD_PRODUCT':
        return {
             ...state,
             items: [
                 ...state.items,                 
                 action.payload        
             ],
             [action.payload.id]: (state[action.payload.id] || 0) + 1
         };
     
     case 'REMOVE_PRODUCT':
         
         return {
             ...state,
             items: state[action.payload] > 1 ?  getNewArr(state.items) : state.items.filter(e => e.id !== action.payload),
             [action.payload]: state[action.payload] - 1
         };
         
     default: 
        return state;
    }
}