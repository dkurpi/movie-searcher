import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { getTitles } from "../utils/fetchServices";
import { makeStyles } from "@material-ui/core/styles";

import { Card, Search } from "../components";

enum VideoType {
  ALL = "",
  MOVIES = "movie",
  SERIES = "series",
}
const videoTypes = Object.entries(VideoType);

export function Home() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState<VideoType>(VideoType.ALL);
  const [page, setPage] = useState(1);

  const [title, setTitle] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [titleList, setTitleList] = useState<SingleTitle[]>([]);

  useEffect(() => {
    if (!title) return;
    setIsLoading(true);
    getTitles(title, type, page)
      .then((res) => {
        console.log(res);
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
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as VideoType);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* FORM*/}

      <Search>
        <Search.Text size="large">{"Type your video:"}</Search.Text>
        <Search.Input onChange={handleInputChange} value={inputValue} />

        <Search.Select value={type} onChange={handleSelectChange}>
          {videoTypes.map((option) => (
            <Search.Option name={option[0]} value={option[1]} />
          ))}
        </Search.Select>
        <Search.Button onClick={handleSearchClick}>Search</Search.Button>
      </Search>

      {/* CARD CONTAINER  + PAGINATION*/}

      {!!titleList.length && !isLoading && title && (
        <>
          <small>{`For "${title}", found ${totalResults} titles`}</small>
          <h2 style={{ textAlign: "left" }}>{`Page ${page} `}</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "1440px",
              margin: "5vh auto",
              justifyContent: "center",
            }}
          >
            {titleList.map((video) => (
              <Card key={video.imdbID}>
                <Card.Type>{video.Type}</Card.Type>
                <Card.Image src={video.Poster} />
                <Card.Title>{video.Title}</Card.Title>
                <Card.Year>{video.Year}</Card.Year>
              </Card>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              classes={{ ul: classes.ul }}
              count={Math.ceil(totalResults / 10)}
              page={Number(page)}
              onChange={handleChangePage}
              color="secondary"
            />
          </div>
        </>
      )}

      {/* NOT FOUND ERROR*/}

      {!titleList.length && !isLoading && title && (
        <div style={{ margin: "15vh 0" }}>
          <h1>{`For title "${title}", didn't found any videos`}</h1>
          <small>{`Try another one :)`}</small>
        </div>
      )}

      {/* LOADER*/}

      {!!isLoading && (
        <div style={{ margin: "15vh 0" }}>
          <h1>{`Loading...`}</h1>
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      margin: "20px 0 50px",
    },
  },
}));
