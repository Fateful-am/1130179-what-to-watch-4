import React, {createRef, Fragment, PureComponent} from 'react';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, MoviePropTypes, REVIEW_STARS_COUNT} from '../../consts';
import PropTypes from 'prop-types';

const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this._handlerReviewTextInput = this._handlerReviewTextInput.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleStarChange = this._handleStarChange.bind(this);

      this._reviewTextRef = createRef();
      this._formRef = createRef();
      this._postButtonRef = createRef();
      this._starRefs = [];

      for (let i = 1; i <= REVIEW_STARS_COUNT; i++) {
        this._starRefs.push(createRef());
      }

      this.state = {
        enableByReviewLength: false,
        enableByStarsScore: false,
      };
    }

    _handleStarChange(evt) {
      evt.preventDefault();
      const {enableByStarsScore} = this.state;
      if (!enableByStarsScore) {
        this.setState({enableByStarsScore: true});
      }
    }

    _handlerReviewTextInput(evt) {
      evt.preventDefault();
      const reviewText = this._reviewTextRef.current;
      const enableByReviewLength = reviewText.value.length >= MIN_REVIEW_LENGTH && reviewText.value.length <= MAX_REVIEW_LENGTH;
      this.setState({enableByReviewLength});
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {enableByReviewLength, enableByStarsScore} = this.state;
      if (!(enableByReviewLength && enableByStarsScore)) {
        return;
      }
      const starRefChecked = this._starRefs.filter((starRef) => {
        return starRef.current.checked;
      });

      const reviewText = this._reviewTextRef.current;
      this.props.onSubmit({
        movieId: this.props.movie.id,
        rating: starRefChecked[0].current.value,
        comment: reviewText.value,
      });

      this.setFormAccessibility(false);
    }

    _setPostButtonEnable() {
      const {enableByReviewLength, enableByStarsScore} = this.state;
      this._postButtonRef.current.disabled = !(enableByReviewLength && enableByStarsScore);
    }

    setFormAccessibility(accessible) {
      const elements = this._formRef.current.elements;
      if (elements) {
        for (let i = 0; i < elements.length; ++i) {
          elements[i].disabled = !accessible;
        }
      }

      if (accessible) {
        this._setPostButtonEnable();
      }
    }

    componentDidMount() {
      const textArea = this._reviewTextRef.current;

      textArea.oninput = this._handlerReviewTextInput;
      textArea.onclick = this._handlerReviewTextInput;

      const form = this._formRef.current;
      form.onsubmit = this._handleFormSubmit;

      this._starRefs.forEach((star) => {
        star.current.onchange = this._handleStarChange;
      });

      this.setFormAccessibility(true);
    }

    componentWillUnmount() {
      this._reviewTextRef.current.oninput = null;
      this._formRef.current.onsubmit = null;
      this._starRefs.forEach((star) => {
        star.current.onchange = null;
      });
    }

    componentDidUpdate() {
      this._setPostButtonEnable();
    }

    _renderStars() {
      const {movie} = this.props;
      const stars = [];
      for (let i = 1; i <= REVIEW_STARS_COUNT; i++) {
        stars.push(
            <Fragment key={`starKey-${movie.id}-${i}`}>
              <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} ref={this._starRefs[i - 1]}/>
              <label className="rating__label" htmlFor={`star-${i}`}>`Rating ${i}`</label>
            </Fragment>
        );
      }

      return stars;
    }

    render() {
      return (
        <Component
          {...this.props}
        >
          <form
            action="#" className="add-review__form"
            ref={this._formRef}
          >
            <div className="rating">
              <div className="rating__stars">
                {this._renderStars()}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                ref={this._reviewTextRef}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit"
                  ref={this._postButtonRef}
                >
                  Post</button>
              </div>

            </div>
          </form>

        </Component>
      );
    }
  }

  WithAddReview.propTypes = {
    movie: MoviePropTypes.movie,
    onSubmit: PropTypes.func.isRequired,
  };

  return WithAddReview;
};

export default withAddReview;
