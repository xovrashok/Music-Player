import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
`;

export const ButtonPosition = styled.div``;

export const ButtonContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  color: #f8d9c0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px auto;
  transition: all 0.5s ease;
  background-color: rgba(244, 187, 146, 0.0);
  
  &:hover {
    color: white;
  }
`;

export const ButtonTitle = styled.div`
  margin: 4px auto;
  font-weight: bold;
  font-size: 14px;
`;
