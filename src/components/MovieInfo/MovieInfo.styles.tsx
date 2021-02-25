import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.black};
  padding: 10vh 0;
  top: 0;
  position: relative;
  transition: 0.5s;
  @media (max-width: 768px) {
    padding: 4vh 0;
  }
`;

export const Date = styled.div`
  font-size: 12px;
  margin: 0.5em 0;
`;
export const Content = styled.div`
  max-width: 1080px;
  display: flex;
  margin: 0 auto;
  transition: 0.5s;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const RateSection = styled.section`
  margin: 2vh auto;
`;
export const Actors = styled.p`
  font-size: 18px;
  margin: 1em 0;
`;

export const CloseTag = styled.div`
  display: block;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.bar};
  transition: 0.3s;
  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.bright};
  }
`;

export const Tag = styled.span`
  display: inline-block;
  font-size: 15px;
  padding: 3px 8px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
`;
export const Genre = styled.span`
  font-size: 18px;
`;
export const Description = styled.p`
  font-size: 16px;
`;
export const ImageOuter = styled.div``;

export const Info = styled.div`
  width: 60%;
  padding: 0 2em;
  text-align: left;
  @media (max-width: 768px) {
    padding: 0 5px;
    width: 94%;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  margin-bottom: 20px;
  width: 400px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 94%;
  }
`;
