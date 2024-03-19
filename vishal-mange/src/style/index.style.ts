import styled from "styled-components";
import { CommonColor } from "./color";
import { CommonFontSizes } from "./Font";

const IndexPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${CommonColor.black};
`;
const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
const ImageContainerLanding = styled.div`
  height: 100vh;
  width: 35%;
  object-fit: contain;
  display: flex;
  justify-content: center;
`;
const ImageLandingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const AboutBioContainer = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutName = styled.div`
  font-size: ${CommonFontSizes.xbl};
  font-weight: 700;
  color: ${CommonColor.white};
`;
const AboutText = styled.div`
  color: ${CommonColor.grey};
  font-size: ${CommonFontSizes.s};
  font-weight: 500;
  margin-top: 10px;
`;
const BaseNavbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 40px);
  height: 60px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const TextContainerLink = styled.div`
  font-size: ${CommonFontSizes.ml};
  font-weight: 400;
  color: ${CommonColor.white};
  cursor: pointer;
`;

export {
  TextContainerLink,
  BaseNavbar,
  AboutText,
  AboutName,
  AboutBioContainer,
  ImageContainerLanding,
  ImageLandingWrapper,
  IndexPageContainer,
  LandingContainer,
};
