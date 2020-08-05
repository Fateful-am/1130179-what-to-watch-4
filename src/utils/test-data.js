import {ALL_GENRES, PageKind, START_MOVIE_COUNT} from '../consts';
import {AuthorizationStatus} from '../reducer/user/user';

export const MOVIES = [
  {
    id: 0,
    title: `Macbeth`,
    genre: `Comedy`,
    released: 2014,
    posterImage: `img/macbeth.jpg`,
    backgroundImage: `img/macbeth.jpg`,
    previewImage: `img/macbeth.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    runTime: 99,
    reviews: [
      {
        text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `ut vero? Dolores in incidunt ipsa soluta!`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
    ],
    isFavorite: false,
  },
  {
    id: 1,
    title: `Aviator`,
    genre: `Drama`,
    released: 2015,
    posterImage: `img/aviator.jpg`,
    backgroundImage: `img/aviator.jpg`,
    previewImage: `img/aviator.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: 99,
    reviews: [
      {
        text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `ut vero? Dolores in incidunt ipsa soluta!`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
    ],
    isFavorite: false,

  },
  {
    id: 2,
    title: `We need to talk about Kevin`,
    genre: `Comedy`,
    released: 2016,
    posterImage: `img/we-need-to-talk-about-kevin.jpg`,
    backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
    previewImage: `img/we-need-to-talk-about-kevin.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru`,
    runTime: 99,
    reviews: [
      {
        text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `ut vero? Dolores in incidunt ipsa soluta!`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
    ],
    isFavorite: false,

  },
  {
    id: 3,
    title: `What We Do in the Shadows`,
    genre: `Drama`,
    released: 2017,
    posterImage: `img/what-we-do-in-the-shadows.jpg`,
    backgroundImage: `img/what-we-do-in-the-shadows.jpg`,
    previewImage: `img/what-we-do-in-the-shadows.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton`,
    runTime: 99,
    reviews: [
      {
        text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `ut vero? Dolores in incidunt ipsa soluta!`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
    ],
    isFavorite: false,

  },
  {
    id: 4,
    title: `Moonrise Kingdom`,
    genre: `Comedy`,
    released: 2018,
    posterImage: `img/moonrise-kingdom.jpg`,
    backgroundImage: `img/moonrise-kingdom.jpg`,
    previewImage: `img/moonrise-kingdom.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson`,
    runTime: 99,
    reviews: [
      {
        text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `ut vero? Dolores in incidunt ipsa soluta!`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
    ],
    isFavorite: false,

  },
  {
    id: 5,
    title: `Seven Years in Tibet`,
    genre: `Drama`,
    released: 2019,
    posterImage: `img/seven-years-in-tibet.jpg`,
    backgroundImage: `img/seven-years-in-tibet.jpg`,
    previewImage: `img/seven-years-in-tibet.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson`,
    runTime: 99,
    reviews: [
      {
        text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `ut vero? Dolores in incidunt ipsa soluta!`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
    ],
    isFavorite: false,

  },
  {
    id: 6,
    title: `Midnight Special`,
    genre: `Drama`,
    released: 2020,
    posterImage: `img/midnight-special.jpg`,
    backgroundImage: `img/midnight-special.jpg`,
    previewImage: `img/midnight-special.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody`,
    runTime: 99,
    reviews: [
      {
        text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `ut vero? Dolores in incidunt ipsa soluta!`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
    ],
    isFavorite: false,

  },
  {
    id: 7,
    title: `War of the Worlds`,
    genre: `Drama`,
    released: 2021,
    posterImage: `img/war-of-the-worlds.jpg`,
    backgroundImage: `img/war-of-the-worlds.jpg`,
    previewImage: `img/war-of-the-worlds.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes`,
    runTime: 99,
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: new Date(`2015-11-18`),
        score: 8.0,
      },
    ],
    isFavorite: false,

  },
  {
    id: 8,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    released: 2014,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum`,
    runTime: 99,
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(`2016-12-24`),
        score: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: new Date(`2015-11-18`),
        score: 8.0,
      },
      {
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        author: `Amanda Greever`,
        date: new Date(`2015-11-18`),
        score: 8.0,
      },
      {
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: new Date(`2016-12-20`),
        score: 7.2,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: new Date(`2016-12-20`),
        score: 7.6,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: new Date(`2016-12-20`),
        score: 7.0,
      },
    ],
    isFavorite: false,
  },
];

const PROMO_MOVIE = {
  id: 8,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  released: 2014,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: {
    score: 8.9,
    level: `Very good`,
    count: 240,
  },
  descriptions: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum`,
  runTime: 99,
  reviews: [
    {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: new Date(`2016-12-24`),
      score: 8.9,
    },
    {
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: new Date(`2015-11-18`),
      score: 8.0,
    },
    {
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      author: `Amanda Greever`,
      date: new Date(`2015-11-18`),
      score: 8.0,
    },
    {
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      author: `Matthew Lickona`,
      date: new Date(`2016-12-20`),
      score: 7.2,
    },
    {
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      author: `Paula Fleri-Soler`,
      date: new Date(`2016-12-20`),
      score: 7.6,
    },
    {
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      author: `Paula Fleri-Soler`,
      date: new Date(`2016-12-20`),
      score: 7.0,
    },
  ],
  isFavorite: false,
};

export const testMovieCard = MOVIES[0];

export const TEST_DATA = {
  initialStoreMovieState: {
    genre: ALL_GENRES,
    currentPage: PageKind.MAIN,
    currentMovieId: -1,
    previousPage: PageKind.MAIN,
    previousMovieId: -1,
    renderedMovieCount: START_MOVIE_COUNT,
  },
  initialStoreDataState: {
    promoMovieId: 8,
    movies: MOVIES,
  },
  initialStoreUserState: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {},
  },

  comedyMovies: [
    {
      id: 0,
      title: `Macbeth`,
      genre: `Comedy`,
      released: 2014,
      posterImage: `img/macbeth.jpg`,
      backgroundImage: `img/macbeth.jpg`,
      previewImage: `img/macbeth.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law`,
      runTime: 99,
      reviews: [
        {
          text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `ut vero? Dolores in incidunt ipsa soluta!`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
      ],
      isFavorite: false,
    },
    {
      id: 2,
      title: `We need to talk about Kevin`,
      genre: `Comedy`,
      released: 2016,
      posterImage: `img/we-need-to-talk-about-kevin.jpg`,
      backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
      previewImage: `img/we-need-to-talk-about-kevin.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru`,
      runTime: 99,
      reviews: [
        {
          text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `ut vero? Dolores in incidunt ipsa soluta!`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
      ],
      isFavorite: false,
    },
    {
      id: 4,
      title: `Moonrise Kingdom`,
      genre: `Comedy`,
      released: 2018,
      posterImage: `img/moonrise-kingdom.jpg`,
      backgroundImage: `img/moonrise-kingdom.jpg`,
      previewImage: `img/moonrise-kingdom.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson`,
      runTime: 99,
      reviews: [
        {
          text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `ut vero? Dolores in incidunt ipsa soluta!`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
      ],
      isFavorite: false,
    },
  ],
  dramaMovies: [
    {
      id: 1,
      title: `Aviator`,
      genre: `Drama`,
      released: 2015,
      posterImage: `img/aviator.jpg`,
      backgroundImage: `img/aviator.jpg`,
      previewImage: `img/aviator.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
      runTime: 99,
      reviews: [
        {
          text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `ut vero? Dolores in incidunt ipsa soluta!`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
      ],
      isFavorite: false,

    },
    {
      id: 3,
      title: `What We Do in the Shadows`,
      genre: `Drama`,
      released: 2017,
      posterImage: `img/what-we-do-in-the-shadows.jpg`,
      backgroundImage: `img/what-we-do-in-the-shadows.jpg`,
      previewImage: `img/what-we-do-in-the-shadows.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton`,
      runTime: 99,
      reviews: [
        {
          text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `ut vero? Dolores in incidunt ipsa soluta!`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
      ],
      isFavorite: false,

    },
    {
      id: 5,
      title: `Seven Years in Tibet`,
      genre: `Drama`,
      released: 2019,
      posterImage: `img/seven-years-in-tibet.jpg`,
      backgroundImage: `img/seven-years-in-tibet.jpg`,
      previewImage: `img/seven-years-in-tibet.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson`,
      runTime: 99,
      reviews: [
        {
          text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `ut vero? Dolores in incidunt ipsa soluta!`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
      ],
      isFavorite: false,

    },
    {
      id: 6,
      title: `Midnight Special`,
      genre: `Drama`,
      released: 2020,
      posterImage: `img/midnight-special.jpg`,
      backgroundImage: `img/midnight-special.jpg`,
      previewImage: `img/midnight-special.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody`,
      runTime: 99,
      reviews: [
        {
          text: `Aspernatur cum excepturi maiores obcaecati voluptates`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `ut vero? Dolores in incidunt ipsa soluta!`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
      ],
      isFavorite: false,

    },
    {
      id: 7,
      title: `War of the Worlds`,
      genre: `Drama`,
      released: 2021,
      posterImage: `img/war-of-the-worlds.jpg`,
      backgroundImage: `img/war-of-the-worlds.jpg`,
      previewImage: `img/war-of-the-worlds.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aspernatur cum excepturi maiores obcaecati voluptates.Aliquid culpa harum ipsum numquam voluptates!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa eaque earum eius ex facilis magni quia tempore, ut vero? Dolores in incidunt ipsa soluta!`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes`,
      runTime: 99,
      reviews: [
        {
          text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
          author: `Bill Goodykoontz`,
          date: new Date(`2015-11-18`),
          score: 8.0,
        },
      ],
      isFavorite: false,

    },
    {
      id: 8,
      title: `The Grand Budapest Hotel`,
      genre: `Drama`,
      released: 2014,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
      previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very good`,
        count: 240,
      },
      descriptions: [
        `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
        `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
      ],
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum`,
      runTime: 99,
      reviews: [
        {
          text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir`,
          date: new Date(`2016-12-24`),
          score: 8.9,
        },
        {
          text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
          author: `Bill Goodykoontz`,
          date: new Date(`2015-11-18`),
          score: 8.0,
        },
        {
          text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
          author: `Amanda Greever`,
          date: new Date(`2015-11-18`),
          score: 8.0,
        },
        {
          text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
          author: `Matthew Lickona`,
          date: new Date(`2016-12-20`),
          score: 7.2,
        },
        {
          text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
          author: `Paula Fleri-Soler`,
          date: new Date(`2016-12-20`),
          score: 7.6,
        },
        {
          text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
          author: `Paula Fleri-Soler`,
          date: new Date(`2016-12-20`),
          score: 7.0,
        },
      ],
      isFavorite: false,
    },
  ],
  promoMovie: PROMO_MOVIE,
};

