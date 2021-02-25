import styled from "styled-components";

export const CardWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 5vh auto;
  justify-content: center;
`;

export const CardOuter = styled.section`
  max-width: 20%;
  flex-grow: 1;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    transform: translate(0, 10px);
  }
`;

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  margin-bottom: 20px;
  height: 400px;

  position: relative;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-overflow: ellipsis;
`;
export const Year = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
export const Type = styled.div`
  font-size: 12px;
  font-weight: 400;
  background-color: black;
  padding: 5px 0;
`;
