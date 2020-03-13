/* eslint-disable class-methods-use-this */
import axios from '../Utils/axios';
import { params } from '../Utils/configApi';

class ListCharacters {
  allMarvelHeroes(id) {
    if (id) {
      return axios.get(`/characters/${id}${params}`);
    }
    return axios.get(`/characters${params}`);
  }
}

export default new ListCharacters();
