export const setCharges = (payload) => ({
  type: "CHARGES_SET",
  payload,
});

export const ChargesError = () => ({ type: "CHARGES_ERROR" });

export const loadingCharges = () => ({ type: "CHARGES_LOADING" });

export const fetchCharges =
  (searchName = "") =>
  async (dispatch) => {
    dispatch(loadingCharges());

    try {
      const res = await fetch(`/api/charges?search=${searchName}`);
      const data = await res.json();

      dispatch(setCharges(data));
    } catch (err) {
      dispatch(ChargesError());
    }
  };
