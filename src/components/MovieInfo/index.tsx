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
MovieInfo.Image = ({ src, ...restProps }) => (
  <Image src={src === "N/A" ? fallbackImageUrl : src} alt="" />
);

MovieInfo.Description = ({ children, ...restProps }) => (
  <Info {...restProps}>{children}</Info>
);

MovieInfo.Rating = ({ children, value, size, ...restProps }) => (
  <Rating
    name="rating"
    value={value}
    size={size}
    readOnly
    max={10}
    precision={0.1}
  />
);

MovieInfo.Title = ({ children, ...restProps }) => <h2>{children}</h2>;
MovieInfo.Date = ({ children, ...restProps }) => <Date>{children}</Date>;
MovieInfo.Tag = ({ children, ...restProps }) => <Tag>{children}</Tag>;
MovieInfo.Genre = ({ children, ...restProps }) => <Genre>{children}</Genre>;
MovieInfo.About = ({ children, ...restProps }) => (
  <Description>{children}</Description>
);
MovieInfo.RateSection = ({ children, ...restProps }) => (
  <RateSection>{children}</RateSection>
);

MovieInfo.Atrributes = ({ children, name, values, ...restProps }) => (
  <Actors>
    <b>{name}</b>
    {`: ${values}`}
  </Actors>
);

MovieInfo.Bar = ({ children, text, onClick, ...restProps }) => (
  <CloseTag onClick={onClick}>{text}</CloseTag>
);
