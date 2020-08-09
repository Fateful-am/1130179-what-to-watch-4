import {combineReducers} from 'redux';
import {reducer as movie} from './movie/movie';
import {reducer as data} from './data/data';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MOVIE]: movie,
  [NameSpace.USER]: user,
});
