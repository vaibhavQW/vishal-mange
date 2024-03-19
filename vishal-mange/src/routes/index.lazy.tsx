import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "../components/common_component/Header";
import { FlexContainer, Img } from "../style/common.style";
import {
  AboutBioContainer,
  AboutName,
  AboutText,
  BaseNavbar,
  ImageContainerLanding,
  ImageLandingWrapper,
  IndexPageContainer,
  LandingContainer,
  TextContainerLink,
} from "../style/index.style";
import { CommonImages } from "../utils/CommonImages";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <IndexPageContainer>
      <Header />
      <LandingContainer>
        <ImageLandingWrapper>
          <AboutBioContainer>
            <FlexContainer
              jc="center"
              ai="flex-start"
              flexDir="column"
              width="60%"
            >
              <AboutName>Vishal Mange.</AboutName>
              <AboutText>
                Lead Recruitment Specialist at Prexel, connecting talent
                globally, promoting business expansion. Expertise in recruiting
                and leadership, prioritizing lasting client relationships.
                Committed to professionalism, driving success in a dynamic
                business landscape.
              </AboutText>
            </FlexContainer>
          </AboutBioContainer>

          <ImageContainerLanding>
            <Img
              src={CommonImages.profile_photo}
              alt="vishal mange profile phtoto"
            />
          </ImageContainerLanding>
        </ImageLandingWrapper>
        <BaseNavbar>
          <FlexContainer jc="space-between" width="320px">
            <TextContainerLink>About</TextContainerLink>
            <TextContainerLink>Post</TextContainerLink>
          </FlexContainer>
          <FlexContainer jc="space-between" width="320px">
            <TextContainerLink>INSTAGRAM</TextContainerLink>
            <TextContainerLink>FACEBOOK</TextContainerLink>
          </FlexContainer>
        </BaseNavbar>
      </LandingContainer>
    </IndexPageContainer>
  );
}
