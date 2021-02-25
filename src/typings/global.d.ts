enum VideoType {
  ALL = "",
  MOVIES = "movie",
  SERIES = "series",
}

type SingleTitle = {
  Poster: string;
  Title: string;
  Type: VideoType;
  Year: string;
  imdbID: string;
};
type VideoInfo = {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: VideoType;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Production: string;
};
