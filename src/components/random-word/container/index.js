import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchRandomWord } from "../action-creators";
import { selectRandomWord } from "../selectors";

import RandomWord from "../presentation";

const RandomWordContainer = () => {
  const dispatch = useDispatch();

  const handler = useCallback(() => {
    dispatch(fetchRandomWord());
  }, [dispatch]);

  useEffect(handler, []);

  const data = useSelector(selectRandomWord);

  return <RandomWord {...data} onClick={handler} />;
};

export default RandomWordContainer;
