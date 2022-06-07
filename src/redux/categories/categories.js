const CHECK_STATUS = 'HECK_STATUS';

export const setCategoryStatus = (status) => ({
  type: CHECK_STATUS,
  status,
});

const Reducer = (state = 'Check Status', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default Reducer;
