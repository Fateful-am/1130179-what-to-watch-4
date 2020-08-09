import * as React from 'react';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, REVIEW_STARS_COUNT} from '../../consts';
import {getMovies} from '../../reducer/data/selectors';
import {connect} from 'react-redux';
import {getMovieById} from '../../utils/helpers';
import {MoviePropTypes} from '../../types';

interface Props {
  movies: MoviePropTypes[],
  computedMatch: {
    params: {
      id: string,
    },
  },
  onSubmit: (submitObject: {movieId: number, rating: string, comment: string}) => void,
}

interface State {
  enableByReviewLength: boolean,
  enableByStarsScore: boolean,
  starIndex: number,
}

const withAddReview = (Component) => {
  class WithAddReview extends React.PureComponent<Props, State> {
    private needMovieLoad: boolean;
    private movieId: number;
    private reviewTextRef: React.RefObject<HTMLTextAreaElement>;
    private formRef: React.RefObject<HTMLFormElement>;
    private postButtonRef: React.RefObject<HTMLButtonElement>;
    private starRefs: React.RefObject<HTMLInputElement>[];

    constructor(props) {
      super(props);

      this.needMovieLoad = true;
      this.movieId = -1;

      this._handlerReviewTextInput = this._handlerReviewTextInput.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleStarChange = this._handleStarChange.bind(this);

      this.reviewTextRef = React.createRef();
      this.formRef = React.createRef();
      this.postButtonRef = React.createRef();
      this.starRefs = [];

      for (let i = 1; i <= REVIEW_STARS_COUNT; i++) {
        this.starRefs.push(React.createRef());
      }

      this.state = {
        enableByReviewLength: false,
        enableByStarsScore: false,
        starIndex: -1,
      };
    }

    _getMovieId() {
      return this.props.computedMatch.params.id;
    }

    _getCurrentMovie() {
      const movie = getMovieById(this.props.movies, this._getMovieId());
      return movie.id > -1 ? movie : null;
    }

    _checkMovie() {
      const movie = this._getCurrentMovie();
      if (movie && this.needMovieLoad) {
        this.needMovieLoad = false;
        this.movieId = movie.id;
        this.setFormAccessibility(true);
      }

      if (!movie) {
        this.setFormAccessibility(false);
      }
    }

    _handleStarChange(evt) {
      evt.preventDefault();
      this.setState({
        starIndex: parseInt(evt.target.value),
      });
      const {enableByStarsScore} = this.state;
      if (!enableByStarsScore) {
        this.setState({enableByStarsScore: true});
      }
    }

    _handlerReviewTextInput(evt) {
      evt.preventDefault();
      const reviewText = this.reviewTextRef.current;
      const enableByReviewLength = reviewText.value.length >= MIN_REVIEW_LENGTH && reviewText.value.length <= MAX_REVIEW_LENGTH;
      this.setState({enableByReviewLength});
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {enableByReviewLength, enableByStarsScore} = this.state;
      if (!(enableByReviewLength && enableByStarsScore)) {
        return;
      }
      const starRefChecked = this.starRefs.filter((starRef) => {
        return starRef.current.checked;
      });

      const reviewText = this.reviewTextRef.current;
      const movie = this._getCurrentMovie();
      this.props.onSubmit({
        movieId: movie.id,
        rating: starRefChecked[0].current.value,
        comment: reviewText.value,
      });

      this.setFormAccessibility(false);
    }

    _setPostButtonEnable() {
      if (this.postButtonRef.current) {
        const {enableByReviewLength, enableByStarsScore} = this.state;
        this.postButtonRef.current.disabled = !(enableByReviewLength && enableByStarsScore);
      }
    }

    setFormAccessibility(accessible) {
      if (this.formRef.current) {
        const elements = this.formRef.current.elements;
        if (elements) {
          for (let i = 0; i < elements.length; ++i) {
            const element = elements.item(i) as HTMLInputElement;
            element.disabled = !accessible;
          }
        }

        if (accessible) {
          this._setPostButtonEnable();
        }
      }
    }

    componentDidMount() {
      const textArea = this.reviewTextRef.current;

      textArea.oninput = this._handlerReviewTextInput;
      textArea.onclick = this._handlerReviewTextInput;

      this.setFormAccessibility(true);

      this._checkMovie();
    }

    componentWillUnmount() {
      this.reviewTextRef.current.oninput = null;
    }

    componentDidUpdate() {
      this._checkMovie();
      this._setPostButtonEnable();
    }

    _renderStars() {
      const movie = this._getCurrentMovie();
      const stars = [];
      const movieId = movie ? movie.id : `no-id`;
      for (let i = 1; i <= REVIEW_STARS_COUNT; i++) {
        const checked = i === this.state.starIndex;
        stars.push(
            <React.Fragment key={`starKey-${movieId}-${i}`}>
              <input className="rating__input" onChange={this._handleStarChange} checked={checked} id={`star-${i}`} type="radio" name="rating" value={i}
                ref={this.starRefs[i - 1]}/>
              <label className="rating__label" htmlFor={`star-${i}`}>`Rating ${i}`</label>
            </React.Fragment>
        );
      }

      this._checkMovie();
      this._setPostButtonEnable();

      return stars;
    }

    render() {
      const movie = this._getCurrentMovie();
      return (
        <Component
          {...this.props}
          movie={movie}
        >
          <form
            action="#" className="add-review__form"
            onSubmit={this._handleFormSubmit}
            ref={this.formRef}
          >
            <div className="rating">
              <div className="rating__stars">
                {this._renderStars()}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                        onInput={this._handlerReviewTextInput} onClick={this._handlerReviewTextInput}
                ref={this.reviewTextRef}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit"
                  ref={this.postButtonRef}
                >
                  Post</button>
              </div>

            </div>
          </form>

        </Component>
      );
    }
  }

  const mapStateToProps = (state) => {
    return ({
      movies: getMovies(state),
    });
  };

  return connect(mapStateToProps)(WithAddReview);
};

export default withAddReview;
