import axios, { AxiosResponse } from "axios";

const URLWithKey = "http://omdbapi.com/?apikey=aeae8ab";

interface APIResponseMovieList {
  Response: string;
  Search: SingleTitle[];
  totalResults: string;
  Error?: string;
}

interface APIResponseByID {
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
  totalSeasons: string;
  Production: string;
  Error?: string;
}

export const getTitles = async (
  searchPhrase: string,
  type: VideoType = VideoType.ALL,
  page: number = 1
): Promise<APIResponseMovieList> => {
  try {
    if (!searchPhrase) throw alert("Type title!");

    const { data }: AxiosResponse<APIResponseMovieList> = await axios(
      `${URLWithKey}&s=${searchPhrase}&type=${type}&page=${page}`
    );

    if (data.Response === "False") throw data.Error;
    return data;
  } catch (err) {
    throw err;
  }
};

export const getTitleByID = async (id: string): Promise<APIResponseByID> => {
  try {
    if (!id) throw alert("Something went wrong!");

    const { data }: AxiosResponse<APIResponseByID> = await axios(
      `${URLWithKey}&i=${id}`
    );
    if (data.Response === "False") throw data.Error;
    return data;
  } catch (err) {
    throw err;
  }
};
