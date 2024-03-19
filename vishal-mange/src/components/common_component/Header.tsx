import { FlexContainer, Img } from "../../style/common.style";
import {
  HeaderContainer,
  ImageContainer,
  NavButton,
  PositionText,
} from "../../style/header.style";
import { CommonImages } from "../../utils/CommonImages";

export default function Header() {
  return (
    <HeaderContainer>
      <FlexContainer jc="space-between" ai="center" pad="0 20px">
        <PositionText>Amplify</PositionText>
        <ImageContainer>
          <Img src={CommonImages.logo} alt="" />
        </ImageContainer>
        <NavButton />
      </FlexContainer>
    </HeaderContainer>
  );
}
