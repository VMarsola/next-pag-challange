import { combineReducers } from 'redux';

export const word = (state = '', { type, payload }) => {
	switch (type) {
		case 'RANDOM_WORD_SET':
			return payload;

		default:
			return state;
	}
};

export const loading = (state = false, { type }) => {
	switch (type) {
		case 'RANDOM_WORD_LOADING':
			return true;

		case 'RANDOM_WORD_SET':
		case 'RANDOM_WORD_ERROR':
			return false;

		default:
			return state;
	}
};

export default combineReducers({ word, loading });
