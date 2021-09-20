import styled from 'styled-components';


export const IndividualContainer = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  width: 600px;
  /* flex-grow: 1; */
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 7px 7px 3px grey;
`;

export var ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: auto;
  margin: 0px;
  padding: 0px;
  /* border: 1px solid red; */


`;

export var TextDescription = styled.div`
  justify-content: flex-start;
  width: 75%;
  margin: 0px;
  padding: 0px;
  border: 0px;
`;

export var TextDescription2 = styled.div`
  /* justify-content: flex-start; */
  display: flex;
  /* align-items: stretch; */
  margin: 0px;
  padding: 0px;
  border: 0px;
  /* right: 0px; */
  justify-content: flex-end;

`;



export var ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


export var TopSide = styled.div`
display: flex;
width: 100%;
height: 250px;

`;



export var LeftSide = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  width: 30%;
  margin: 0px;
  padding: 0px;
`;

export var RightSide = styled.div`
  width: 70%;
  height: 100%;
  /* border: 3px solid red; */

`;

export var BottomSide = styled.div`
width: 100%;
`;

