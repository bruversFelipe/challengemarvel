import { put, takeLatest, all, call } from 'redux-saga/effects';

import { actionsCreators } from '../Redux';

import MarvelHeroesService from '../Services';

const {
  actionMarvelHeroesRequest,
  actionMarvelHeroesSuccess,
  actionMarvelHeroesError,
  actionMarvelHeroesSaga,
} = actionsCreators();

function* getAll(obj) {
  yield put(actionMarvelHeroesRequest());

  try {
    const { payload } = obj;
    const { data } = yield call(MarvelHeroesService.allMarvelHeroes, payload);
    yield put(actionMarvelHeroesSuccess(data));
  } catch (err) {
    yield put(actionMarvelHeroesError(err));
  }
}

export default function* MarvelHeroesSaga() {
  yield all([yield takeLatest(actionMarvelHeroesSaga().type, getAll)]);
}
