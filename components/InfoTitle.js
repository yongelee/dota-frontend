import styled from "styled-components";
import keyarena from "../static/img/keyarena.png";

const Wrapper = styled.section`
  background-image: url(${keyarena});
  background-size: cover;
`;

export default () => {
  return (
    <Wrapper className="hero is-dark is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Find top performers at Dota 2 tournaments!</h1>
          <h2 className="subtitle">
            Filter by stats you want to see at what tournaments!
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};
