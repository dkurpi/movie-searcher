import React from "react";
import {
  Wrapper,
  Actors,
  CloseTag,
  Content,
  Date,
  Description,
  Genre,
  Image,
  ImageOuter,
  Info,
  RateSection,
  Tag,
} from "./MovieInfo.styles";

import Rating from "@material-ui/lab/Rating";
import { MovieInfoProps, MovieInfoElements } from "./MovieInfoTypes";

const fallbackImageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sm5Mc_-7mF6ja6vXo-H_H9JmybWFqPNfAA&usqp=CAU";

export const MovieInfo: React.FC<MovieInfoProps> & MovieInfoElements = ({
  children,
  ...restProps
}) => (
  <Wrapper {...restProps}>
    <Content>{children}</Content>
  </Wrapper>
);

MovieInfo.ImageContainer = ({ children, ...restProps }) => (
  <ImageOuter {...restProps}>{children}</ImageOuter>
);
MovieInfo.Image = ({ src }) => (
  <Image
    data-testid="movie-img"
    src={src === "N/A" ? fallbackImageUrl : src}
    alt=""
  />
);

MovieInfo.Description = ({ children, ...restProps }) => (
  <Info {...restProps}>{children}</Info>
);

MovieInfo.Rating = ({ children, value, size }) => (
  <Rating
    name="rating"
    value={value}
    size={size}
    readOnly
    max={10}
    precision={0.1}
  />
);

MovieInfo.Title = ({ children }) => <h2>{children}</h2>;
MovieInfo.Date = ({ children }) => <Date>{children}</Date>;
MovieInfo.Tag = ({ children }) => <Tag>{children}</Tag>;
MovieInfo.Genre = ({ children }) => <Genre>{children}</Genre>;
MovieInfo.About = ({ children }) => <Description>{children}</Description>;
MovieInfo.RateSection = ({ children }) => <RateSection>{children}</RateSection>;

MovieInfo.Atrributes = ({ children, name, values }) => (
  <Actors>
    <b>{name}</b>
    {": "}
    <span>{values}</span>
  </Actors>
);

MovieInfo.Bar = ({ children, text, onClick }) => (
  <CloseTag onClick={onClick}>{text}</CloseTag>
);
