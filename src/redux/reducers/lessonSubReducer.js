import { lessonSubScreenActionTypes } from '../actionTypes/actionTypes';

const initialState = {
     seenChapterList: [],
}



export default  (state=initialState , action ) => {
     switch (action.type) {
          case lessonSubScreenActionTypes.SHOW_CHAPTER_ACTION:
               return {
                    ...state,
                    seenChapterList : [...state.seenChapterList].push(action.value)
               }
     
          default:
               return state;
     }
}