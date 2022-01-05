import axios from 'axios';
import { busicURL } from '../constants/constantsBusic';

export default async function getRandomaizer() {
  const { data } = await axios.get(busicURL);
  const result = await data.results;
  return result;
}
