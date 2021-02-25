import React from "react";
import {
  CardInner,
  CardOuter,
  Title,
  Year,
  Type,
  Image,
  CardWrapper,
} from "./Card.styles";

type CardElements = {
  Image: React.FC<ImageProps>;
  Title: React.FC;
  Year: React.FC;
  Type: React.FC;
  Wrapper: React.FC;
};

type ImageProps = {
  src: string;
};

type CardProps = {
  onClick: () => void;
};

const fallbackImageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sm5Mc_-7mF6ja6vXo-H_H9JmybWFqPNfAA&usqp=CAU";

export const Card: React.FC<CardProps> & CardElements = ({
  children,
  ...restProps
}) => (
  <CardOuter {...restProps}>
    <CardInner>{children}</CardInner>
  </CardOuter>
);

Card.Image = ({ src }) => (
  <Image src={src === "N/A" ? fallbackImageUrl : src} alt="" />
);

Card.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Card.Year = ({ children, ...restProps }) => (
  <Year {...restProps}>{children}</Year>
);

Card.Type = ({ children, ...restProps }) => (
  <Type {...restProps}>{children}</Type>
);

Card.Wrapper = ({ children, ...restProps }) => (
  <CardWrapper {...restProps}>{children}</CardWrapper>
);
