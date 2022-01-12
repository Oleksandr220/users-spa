import axios from 'axios';
import { busicURL } from '../constants/constantsBusic';

export default async function getRandomaizer(pages:number) {
  const { data } = await axios.get(`${busicURL}=${pages}`);
  const result = await data.results;
  return result;
}
