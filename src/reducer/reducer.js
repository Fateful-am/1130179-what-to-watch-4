import {combineReducers} from 'redux';
import {reducer as movie} from './movie/movie.js';
import {reducer as data} from './data/data.js';
import {reducer as user} from './user/user.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MOVIE]: movie,
  [NameSpace.USER]: user,
});
