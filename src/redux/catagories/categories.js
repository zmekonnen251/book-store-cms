const CHECKSTATUS = 'checkStatus';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECKSTATUS,
});

export default categoriesReducer;
