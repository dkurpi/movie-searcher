import React, { useState, useEffect } from "react";
import { getTitles } from "../utils/fetchServices";

import { Card, Search, Pagination, Loader, Message } from "../components";
import { Animation, MovieContainer } from "../containers";

enum VideoType {
  ALL = "",
  MOVIES = "movie",
  SERIES = "series",
}
const videoTypes = Object.entries(VideoType);

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isThisFirstTime, setIsThisFirstTime] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState<VideoType>(VideoType.ALL);
  const [page, setPage] = useState(1);

  const [title, setTitle] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [titleList, setTitleList] = useState<SingleTitle[]>([]);

  const [moreInfoId, setMoreInfoId] = useState("");

  useEffect(() => {
    if (!title) return;
    setIsLoading(true);
    getTitles(title, type, page)
      .then((res) => {
        setTitleList(res.Search);
        setTotalResults(Number(res.totalResults));
        setIsLoading(false);
      })
      .catch((err) => {
        setTitleList([]);
        setTotalResults(0);
        setIsLoading(false);
      });
  }, [title, page, type]);

  const handleSearchClick = () => {
    setTitle(inputValue);
    setPage(1);
    setIsThisFirstTime(false);
    clearInfoId();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as VideoType);
    setPage(1);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo(0, 0);
    clearInfoId();
  };

  const handleCardClick = (id: string) => {
    setMoreInfoId(id);
    window.scrollTo(0, 0);
  };

  const clearInfoId = () => {
    setMoreInfoId("");
  };

  return (
    <>
      <Animation>
        {moreInfoId && (
          <Animation.Children key={moreInfoId}>
            <MovieContainer
              titleID={moreInfoId}
              close={clearInfoId}
              setIsLoading={setIsLoading}
            />
          </Animation.Children>
        )}
      </Animation>

      <Search>
        <Search.Text>{"Type your video:"}</Search.Text>
        <Search.Input onChange={handleInputChange} value={inputValue} />

        <Search.Select value={type} onChange={handleSelectChange}>
          {videoTypes.map((option) => (
            <Search.Option name={option[0]} value={option[1]} />
          ))}
        </Search.Select>
        <Search.Button onClick={handleSearchClick}>Search</Search.Button>
      </Search>

      <Animation>
        {!!titleList.length && !isLoading && title && (
          <Animation.Children key={title}>
            <small>{`For "${title}", found ${totalResults} titles`}</small>
            <Card.Wrapper>
              {titleList.map((video) => (
                <Card
                  key={video.imdbID}
                  onClick={() => {
                    handleCardClick(video.imdbID);
                  }}
                >
                  <Card.Type>{video.Type}</Card.Type>
                  <Card.Image src={video.Poster} />
                  <Card.Title>{video.Title}</Card.Title>
                  <Card.Year>{video.Year}</Card.Year>
                </Card>
              ))}
            </Card.Wrapper>

            <Pagination
              count={Math.ceil(totalResults / 10)}
              page={Number(page)}
              onChange={handleChangePage}
            />
          </Animation.Children>
        )}
      </Animation>

      <Animation>
        {!titleList.length && !isLoading && title && (
          <Animation.Children key={title}>
            <Message
              mainText={`For title "${title}", didn't found any videos`}
              secondText={`Try another one :)`}
            />
          </Animation.Children>
        )}
      </Animation>

      {!!isLoading && <Loader />}

      <Animation>
        {isThisFirstTime && (
          <Animation.Children key={title}>
            <Message
              mainText={`Welcome to my recruitment task`}
              secondText={`For From Poland with Dev by Dawid Kurpiel `}
            />
          </Animation.Children>
        )}
      </Animation>

      <Animation>
        {!title && !isThisFirstTime && (
          <Animation.Children key={title}>
            <Message
              mainText={`You forgot to type title!`}
              secondText={`Or just testing corner cases :)`}
            />
          </Animation.Children>
        )}
      </Animation>
    </>
  );
}
