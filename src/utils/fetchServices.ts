import axios, { AxiosResponse } from "axios";

interface APIResponseMovieList {
  Response: string;
  Search: SingleTitle[];
  totalResults: string;
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
      `http://omdbapi.com/?apikey=aeae8ab&s=${searchPhrase}&type=${type}&page=${page}`
    );

    if (data.Response === "False") throw data.Error;

    const body = data;
    return body;
  } catch (err) {
    throw err;
  }
};
