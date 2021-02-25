import { MovieInfo } from "../../components";
import { render, fireEvent } from "@testing-library/react";
import { videoInfo } from "../mockData";

describe("<MovieInfo /> component testing", () => {
  test("<MovieInfo.Description /> renders text correctly", () => {
    const { getByText } = render(
      <MovieInfo.Description>
        <MovieInfo.Title>{videoInfo.Title}</MovieInfo.Title>
        <MovieInfo.Date>{videoInfo.Type.toUpperCase()}</MovieInfo.Date>

        <div>
          <MovieInfo.Tag>{videoInfo.Year}</MovieInfo.Tag>
          <MovieInfo.Tag>{videoInfo.Country} </MovieInfo.Tag>
          <MovieInfo.Tag>{videoInfo.Runtime} </MovieInfo.Tag>
        </div>
        <MovieInfo.Genre>{videoInfo.Genre}</MovieInfo.Genre>
        {videoInfo.imdbRating !== "N/A" ? (
          <MovieInfo.RateSection>
            <h1>{videoInfo.imdbRating} stars</h1>
            <p>{videoInfo.imdbVotes} votes</p>
            <MovieInfo.Rating
              value={Number(videoInfo.imdbRating)}
              size="large"
            />
          </MovieInfo.RateSection>
        ) : (
          <MovieInfo.RateSection>
            <h1>{"No rating"}</h1>
          </MovieInfo.RateSection>
        )}
        <MovieInfo.About>{videoInfo.Plot}</MovieInfo.About>
        <MovieInfo.Atrributes name={"Actors"} values={videoInfo.Actors} />
        <MovieInfo.Atrributes
          name={"Production"}
          values={videoInfo.Production}
        />
      </MovieInfo.Description>
    );
    expect(getByText(videoInfo.Title)).toBeTruthy();
    expect(getByText(videoInfo.Year)).toBeTruthy();
    expect(getByText(videoInfo.Country)).toBeTruthy();
    expect(getByText(videoInfo.Genre)).toBeTruthy();
    expect(getByText(videoInfo.Plot)).toBeTruthy();
    expect(getByText(videoInfo.Production)).toBeTruthy();
    expect(getByText(videoInfo.Actors)).toBeTruthy();
  });

  test("<MovieInfo.Image /> renders valid image correctly", () => {
    const { getByTestId } = render(
      <MovieInfo.ImageContainer>
        <MovieInfo.Image src={videoInfo.Poster} />
      </MovieInfo.ImageContainer>
    );
    expect(getByTestId(`movie-img`)).toBeTruthy();
  });

  test("<MovieInfo.Image /> renders  not-valid image-src correctly", () => {
    const { getByTestId, container } = render(
      <MovieInfo.ImageContainer>
        <MovieInfo.Image src={"N/A"} />
      </MovieInfo.ImageContainer>
    );
    expect(getByTestId(`movie-img`)).toBeTruthy();
    const image = container.querySelector('[src="N/A"]');
    expect(image).toBeFalsy();
  });
  test("<MovieInfo /> passes children   correctly", () => {
    const { getByText } = render(
      <MovieInfo>
        <h1>text</h1>
      </MovieInfo>
    );
    expect(getByText(`text`)).toBeTruthy();
  });

  test("<MovieInfo.Bar /> click works correctly", () => {
    const click = jest.fn();
    const { getByText } = render(
      <MovieInfo.Bar
        onClick={() => {
          click();
        }}
        text="CLICK"
      />
    );
    
    const card = getByText("CLICK");
    fireEvent.click(card);
    expect(click).toHaveBeenCalledTimes(1);
    fireEvent.click(card);
    fireEvent.click(card);
    expect(click).toHaveBeenCalledTimes(3);
  });
});
