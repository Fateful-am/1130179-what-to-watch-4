import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    let {promoMovie, movies} = this.props;
    return (
      <Main
        promoMovie={promoMovie}
        movies={movies}
      />
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterSource: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
