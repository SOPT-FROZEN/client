import styled from "styled-components";
import theme from "../styles/theme";
const Error404 = () => {
  return <ErrorMessage>Error 404</ErrorMessage>;
};

export default Error404;

const ErrorMessage = styled.h1`
  ${theme.fonts.title2};
  color: ${theme.colors.white};
`;
