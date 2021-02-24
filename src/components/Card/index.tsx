import React from "react";
import { CardInner, CardOuter, Title, Year, Type, Image } from "./Card.styles";
type CardElements = {
  Image: React.FC<ImageProps>;
  Title: React.FC;
  Year: React.FC;
  Type: React.FC;
};

type ImageProps = {
  src: string;
};

export const Card: React.FC & CardElements = ({ children }) => (
  <CardOuter>
    <CardInner>{children}</CardInner>
  </CardOuter>
);

Card.Image = ({ src }) => {
  return (
    <Image
      src={
        src === "N/A"
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sm5Mc_-7mF6ja6vXo-H_H9JmybWFqPNfAA&usqp=CAU"
          : src
      }
      alt=""
    />
  );
};

Card.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Card.Year = ({ children, ...restProps }) => (
  <Year {...restProps}>{children}</Year>
);

Card.Type = ({ children, ...restProps }) => (
  <Type {...restProps}>{children}</Type>
);
