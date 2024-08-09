const initialState = {
    toggleQBModal: false
};
  
const QBModalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_QB_MODAL':
        return {
            toggleQBModal: state.toggleQBModal
        }
    }
      
    return state;
  };

  export default QBModalReducer;