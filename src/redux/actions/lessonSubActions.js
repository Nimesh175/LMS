import { lessonSubScreenActionTypes } from '../actionTypes/actionTypes';

export const showChapterAction = (id) => {
     return {
          type :lessonSubScreenActionTypes.SHOW_CHAPTER_ACTION,
          value : id
     }
}