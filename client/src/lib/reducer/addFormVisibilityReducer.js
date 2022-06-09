const addFormVisibility = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_FORM_STATE": 
      return action.payload;
    default:
      return state;
  } 
}

export default addFormVisibility