import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading({ isLoading }) {
  if (!isLoading) return <> </>;
  return (
    <Container>
      <div></div>
      <CircularProgress className="progressStyle" size={100} />
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
