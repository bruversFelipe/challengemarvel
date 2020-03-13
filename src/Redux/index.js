const types = {
  REQUEST: 'marvelHeroesRequest',
  SUCCESS: 'marvelHeroesSuccess',
  ERROR: 'marvelHeroesError',
  SAGA: 'marvelHeroesSaga',
  UPDATE: 'marvelHeroesUpdate',
};

const initialState = {
  loading: false,
  dataSource: [],
  error: '',
};

export default function marvelHeroesReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST:
      return { ...state, loading: true };
    case types.SUCCESS:
      return { ...state, loading: false, dataSource: action.payload };
    case types.ERROR:
      return {
        ...state,
        loading: false,
        dataSource: [],
        error: action.payload,
      };
    case types.UPDATE: {
      const newArr = state.dataSource.data.results;
      const index = state.dataSource.data.results.findIndex(
        (item) => item.id === action.payload.id
      );
      newArr.splice(index, 1, action.payload);

      return {
        ...state,
        loading: false,
        dataSource: {
          ...state.dataSource,
          data: { ...state.dataSource.data, results: newArr },
        },
      };
    }
    default:
      return state;
  }
}

export function actionsCreators() {
  return {
    actionMarvelHeroesRequest: () => ({
      type: types.REQUEST,
    }),
    actionMarvelHeroesSuccess: (dataSource) => ({
      type: types.SUCCESS,
      payload: dataSource,
    }),
    actionMarvelHeroesError: (error) => ({
      type: types.ERROR,
      payload: error,
    }),
    actionMarvelHeroesSaga: (payload) => ({
      type: types.SAGA,
      payload,
    }),
    actionUpdateValues: (payload) => ({
      type: types.UPDATE,
      payload,
    }),
  };
}
