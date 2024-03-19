import styled from "styled-components";
import { FlexStyleProps } from "./style.interface";

const FlexContainer = styled.div<FlexStyleProps>`
  display: flex;
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  padding: ${(props) => props.pad};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.flexDir};
  margin: ${(props) => props.margin};
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Div = styled.div``;

export { FlexContainer, Img, Div };
