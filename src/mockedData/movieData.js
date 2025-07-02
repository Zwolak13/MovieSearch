const mockedMovies = [
  {
    id: 1,
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
    genre: ["Sci-Fi", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    id: 2,
    title: "Tron: Legacy",
    year: 2010,
    rating: 6.8,
    description: "The son of a virtual world designer goes looking for his father and ends up inside the digital world.",
    genre: ["Action", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/9fjyhY5mebhk88lf9yQnqHKaKAo.jpg"
  },
  {
    id: 3,
    title: "Drive",
    year: 2011,
    rating: 7.8,
    description: "A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver.",
    genre: ["Action", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/9U1F6e1q8znqyp3E9rAlXPHIXv8.jpg"
  },
  {
    id: 4,
    title: "The Neon Demon",
    year: 2016,
    rating: 6.1,
    description: "An aspiring model moves to Los Angeles where her beauty and youth are consumed by a group of women.",
    genre: ["Horror", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/qlm4vPtT05G1qZvARuDC4vmaFQF.jpg"
  },
  {
    id: 5,
    title: "Akira",
    year: 1988,
    rating: 8.0,
    description: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath.",
    genre: ["Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/w500/7bV7L7NU1yqg2gC2nRJSrnvFzDd.jpg"
  },
  {
    id: 6,
    title: "Ghost in the Shell",
    year: 1995,
    rating: 8.0,
    description: "A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.",
    genre: ["Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/w500/wmtlyuQ8j17aFMD7v0sQQlRRI9u.jpg"
  },
  {
    id: 7,
    title: "Ex Machina",
    year: 2014,
    rating: 7.7,
    description: "A young programmer is selected to participate in a groundbreaking experiment in synthetic intelligence.",
    genre: ["Sci-Fi", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/btbRB5rJdN8zDkWWMljrHCkS4Cw.jpg"
  },
  {
    id: 8,
    title: "Annihilation",
    year: 2018,
    rating: 6.9,
    description: "A biologist signs up for a dangerous, secret expedition where the laws of nature don't apply.",
    genre: ["Sci-Fi", "Horror"],
    poster: "https://image.tmdb.org/t/p/w500/f5jxrOBdBwJb7N3iMwiK9zGvFwg.jpg"
  },
  {
    id: 9,
    title: "Her",
    year: 2013,
    rating: 8.0,
    description: "A lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    genre: ["Drama", "Romance", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/yk4J4aewWYNiBhD49WD7UaBBn37.jpg"
  },
  {
    id: 10,
    title: "Under the Skin",
    year: 2013,
    rating: 6.3,
    description: "A mysterious woman seduces lonely men in the evening hours in Scotland.",
    genre: ["Sci-Fi", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/rs7YlYfU49hGny0we1p8d1xUvSd.jpg"
  },
  {
    id: 11,
    title: "Upgrade",
    year: 2018,
    rating: 7.5,
    description: "Set in the near-future, technology controls nearly all aspects of life. But when Grey is made quadriplegic, he receives a chip that enables him to walk again—and seek revenge.",
    genre: ["Action", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/fVf4YHHkRfo1uuljpWBViEGmaUQ.jpg"
  },
  {
    id: 12,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genre: ["Action", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 13,
    title: "Minority Report",
    year: 2002,
    rating: 7.6,
    description: "In a future where a special police unit can arrest murderers before they commit their crimes, an officer is accused of a future murder.",
    genre: ["Action", "Sci-Fi", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/kBf1OtOqJChAV5xkB7FPp3yZrYZ.jpg"
  },
  {
    id: 14,
    title: "Dredd",
    year: 2012,
    rating: 7.1,
    description: "In a violent, futuristic city, a law enforcer and a rookie team up to take down a drug lord controlling the city from a 200-story tower.",
    genre: ["Action", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/ctUqvopbUs9T06QpPlybLzzXN6Z.jpg"
  },
  {
    id: 15,
    title: "Children of Men",
    year: 2006,
    rating: 7.9,
    description: "In a bleak future where humans have become infertile, a disillusioned bureaucrat is tasked with protecting a miraculously pregnant woman.",
    genre: ["Drama", "Sci-Fi", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg"
  },
  {
    id: 16,
    title: "Sunshine",
    year: 2007,
    rating: 7.2,
    description: "A team of international astronauts is sent on a dangerous mission to reignite the dying Sun with a nuclear bomb.",
    genre: ["Sci-Fi", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/4lrrP2k8ZSkxtGk6ofD9c12IGcM.jpg"
  },
  {
    id: 17,
    title: "The Lobster",
    year: 2015,
    rating: 7.1,
    description: "In a dystopian society, single people must find a mate in 45 days or be transformed into an animal.",
    genre: ["Drama", "Romance", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/5n9Wf90N3vNhW5QXI9JwjLdlU0c.jpg"
  }
];

export default mockedMovies;
