export const genreData = [
  {
    genreName: "Action",
    description:
      "Exciting and fast-paced movies with intense physical activities and battles.",
  },
  {
    genreName: "Drama",
    description:
      "Character-driven stories that explore emotional and interpersonal conflicts.",
  },
  {
    genreName: "Comedy",
    description: "Entertaining films designed to amuse and provoke laughter.",
  },
  {
    genreName: "Sci-Fi",
    description:
      "Speculative fiction that explores imaginative and futuristic concepts.",
  },
  {
    genreName: "Thriller",
    description:
      "Suspenseful and gripping movies designed to keep the audience on the edge of their seats.",
  },
  {
    genreName: "Horror",
    description:
      "Movies that evoke fear and suspense, often involving supernatural elements.",
  },
  {
    genreName: "Romance",
    description:
      "Love stories that focus on romantic relationships and emotions.",
  },
  {
    genreName: "Mystery",
    description:
      "Movies that involve solving a puzzle or uncovering hidden secrets.",
  },
  {
    genreName: "Fantasy",
    description:
      "Films set in magical or fantastical worlds with elements of magic and mythical creatures.",
  },
  {
    genreName: "Documentary",
    description:
      "Non-fiction films that present real-life events, people, and topics.",
  },
];

export const peopleData = [
  {
    personName: "Quentin Tarantino",
    birthDate: "1963-03-27",
    description: "American filmmaker, screenwriter, producer, and actor.",
  },
  {
    personName: "John Travolta",
    birthDate: "1954-02-18",
    description:
      "American actor, producer, dancer, and singer. Known for Pulp Fiction.",
  },
  {
    personName: "Samuel L. Jackson",
    birthDate: "1948-12-21",
    description: "American actor and producer. Known for Pulp Fiction.",
  },
  {
    personName: "Christopher Nolan",
    birthDate: "1970-07-30",
    description: "English film director, producer, and screenwriter.",
  },
  {
    personName: "Greta Gerwig",
    birthDate: "1983-08-04",
    description: "American actress, playwright, screenwriter, and director.",
  },
  {
    personName: "Margot Robbie",
    birthDate: "1990-07-02",
    description:
      "Australian actress and film producer. Known for her roles in movies like Suicide Squad.",
  },
  {
    personName: "Ryan Gosling",
    birthDate: "1980-11-12",
    description:
      "Canadian actor and musician. Known for his roles in movies like La La Land.",
  },
];

export const contentTypeData = [
  { content_type_name: "movie" },
  { content_type_name: "tv-series" },
  { content_type_name: "documentary" },
  { content_type_name: "reality-show" },
];

export const usersData = [
  { username: "Ben Dover", bio: "This is James Ben Dover" },
  { username: "Walter White", bio: "Jesse let's cook" },
];

export const reviewData = [
  {
    review_text: "Great movie, loved the storyline!",
    rating: 10,
    user_id: 1,
    movie_id: 2,
  },
  {
    review_text: "Not bad, but could have been better.",
    rating: 7,
    user_id: 2,
    movie_id: 1,
  },
  {
    review_text: "Disappointing. Would not recommend.",
    rating: 2,
    user_id: 3,
    movie_id: 2,
  },
];

export const contentData = [
  {
    title: "Pulp Fiction",
    type_id: 1,
    release_date: "21-05-1994",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    duration: "2h 34m",
    trailer_url: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    rt_url: "https://www.rottentomatoes.com/m/pulp_fiction",
  },
];
