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
