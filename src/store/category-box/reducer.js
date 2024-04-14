import { CATEGORY_BOX_ACTION_TYPE } from './action';

function categoryBoxReducer(categoryBox = false, action = {}) {
  switch (action.type) {
    case CATEGORY_BOX_ACTION_TYPE.TOGGLE:
      return !categoryBox;
    default:
      return categoryBox;
  }
}

export default categoryBoxReducer;
