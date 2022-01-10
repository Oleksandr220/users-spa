import axios from 'axios';
import { busicURL } from '../constants/constantsBusic';

export default async function getRandomaizer(pages) {
  const { data } = await axios.get(
    `https://randomuser.me/api/?results=${pages}`
  );
  console.log(pages);
  const result = await data.results;
  return result;
}
