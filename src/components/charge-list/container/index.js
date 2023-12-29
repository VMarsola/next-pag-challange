import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCharges } from "../action-creators";
import { selectChargeList } from "../selectors";

import ChargesPresentation from "../presentation";

const ChargesListContainer = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();

  const handler = useCallback(
    (searchName) => {
      dispatch(fetchCharges(searchName));
    },
    [dispatch]
  );

  useEffect(handler, []);

  const data = useSelector(selectChargeList);
  const { chargeList } = data;

  const hasCharges = chargeList.length >= 1;

  return (
    <ChargesPresentation
      data={data}
      handler={handler}
      hasCharges={hasCharges}
      searchName={searchName}
      setSearchName={setSearchName}
    />
  );
};

export default ChargesListContainer;
