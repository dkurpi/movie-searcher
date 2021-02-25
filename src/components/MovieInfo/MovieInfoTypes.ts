export type MovieInfoProps = {};

export type MovieInfoElements = {
  Image: React.FC<ImageProps>;
  ImageContainer: React.FC;
  Description: React.FC;
  Title: React.FC;
  Date: React.FC;
  Tag: React.FC;
  Genre: React.FC;
  RateSection: React.FC;
  Rating: React.FC<RatingProps>;
  About: React.FC;
  Atrributes: React.FC<AttributesProps>;
  Bar: React.FC<BarProps>;
};

type ImageProps = { src: string | undefined };

type RatingProps = {
  value: number;
  size: "small" | "medium" | "large" | undefined;
};

type AttributesProps = {
  name: string;
  values: string | undefined;
};

type BarProps = {
  onClick: () => void;
  text: string;
};
