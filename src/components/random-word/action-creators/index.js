export const setRandomWord = (payload) => ({
  type: "RANDOM_WORD_SET",
  payload,
});

export const randomWordError = () => ({ type: "RANDOM_WORD_ERROR" });

export const loadingRandomWord = () => ({ type: "RANDOM_WORD_LOADING" });

export const fetchRandomWord = () => async (dispatch) => {
  dispatch(loadingRandomWord());

  try {
    const res = await fetch("/api/random-word");
    const data = await res.json();

    dispatch(setRandomWord(data.word));
  } catch (err) {
    dispatch(randomWordError());
  }
};
