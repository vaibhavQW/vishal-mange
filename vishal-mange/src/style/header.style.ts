import styled from "styled-components";
import { CommonFontSizes } from "./Font";
import { CommonColor } from "./color";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  z-index: 1;
`;
const PositionText = styled.div`
  font-size: ${CommonFontSizes.ml};
  font-weight: normal;
  color: ${CommonColor.white};
`;
const ImageContainer = styled.div`
  height: 70px;
  aspect-ratio: 1/1;
  object-fit: contain;
  overflow: hidden;
  border-radius: 50%;
`;
const NavButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 63px;
  height: 20px;
  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${CommonColor.white};
  }
  &::after {
    top: 10px;
  }
`;
export { HeaderContainer, PositionText, ImageContainer, NavButton };
