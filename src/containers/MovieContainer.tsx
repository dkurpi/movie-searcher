import React, { useState, useEffect } from "react";
import { getTitleByID } from "../utils/fetchServices";

import { MovieInfo } from "../components";

type MovieInfoProps = {
  titleID: string;
  close: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MovieContainer: React.FC<MovieInfoProps> = ({
  titleID,
  close,
  setIsLoading,
}) => {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getTitleByID(titleID)
      .then((res) => {
        setVideoInfo(res);
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [titleID]);

  return (
    <>
      <MovieInfo>
        <MovieInfo.ImageContainer>
          <MovieInfo.Image src={videoInfo?.Poster} />
        </MovieInfo.ImageContainer>

        <MovieInfo.Description>
          <MovieInfo.Title>{videoInfo?.Title}</MovieInfo.Title>
          <MovieInfo.Date>{videoInfo?.Runtime}</MovieInfo.Date>
          <div>
            <MovieInfo.Tag>{videoInfo?.Year}</MovieInfo.Tag>
            <MovieInfo.Tag>{videoInfo?.Country} </MovieInfo.Tag>
            <MovieInfo.Tag>{videoInfo?.Runtime} </MovieInfo.Tag>
          </div>
          <MovieInfo.Genre>{videoInfo?.Genre}</MovieInfo.Genre>
          <MovieInfo.Date>{videoInfo?.Type.toUpperCase()}</MovieInfo.Date>
          {videoInfo?.imdbRating !== "N/A" ? (
            <MovieInfo.RateSection>
              <h1>{videoInfo?.imdbRating} stars</h1>
              <p>{videoInfo?.imdbVotes} votes</p>
              <MovieInfo.Rating
                value={Number(videoInfo?.imdbRating)}
                size="large"
              />
            </MovieInfo.RateSection>
          ) : (
            <MovieInfo.RateSection>
              <h1>{"No rating"}</h1>
            </MovieInfo.RateSection>
          )}
          <MovieInfo.About>{videoInfo?.Plot}</MovieInfo.About>
          <MovieInfo.Atrributes name={"Actors"} values={videoInfo?.Actors} />
          <MovieInfo.Atrributes
            name={"Production"}
            values={videoInfo?.Production}
          />
        </MovieInfo.Description>
      </MovieInfo>
      <MovieInfo.Bar
        onClick={() => {
          close();
        }}
        text="close"
      />
    </>
  );
};
