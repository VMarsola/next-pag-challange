import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";

const RandomWord = ({ word, onClick, loading }) => (
  <Card>
    <CardHeader>
      <Heading size="md">Random Word</Heading>
    </CardHeader>
    <CardBody>
      <p>{loading ? "Carregando..." : `Random word: ${word}`}</p>
      <Button onClick={onClick} isDisabled={loading}>
        Gerar palavra
      </Button>
    </CardBody>
  </Card>
);

RandomWord.propTypes = {
  word: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default RandomWord;
