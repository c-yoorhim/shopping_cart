const toggleAddForm = (bool) => {
  return ({
    type: "CHANGE_FORM_STATE",
    payload: bool,
  })
}

export default toggleAddForm;