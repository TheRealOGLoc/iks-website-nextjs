import qs from "qs"
import { getAPI } from "./get-api"

export function queryPopulate(query: {}, contentType: string) {
  const API_URL = getAPI()
  const BASE_URL = `${API_URL}${contentType}?`
  const queryPopupateNotation = qs.stringify(query, {encodeValuesOnly: false})
  return BASE_URL + queryPopupateNotation
}


// export function queryPopulate(query: {}, contentType: string) {
//   const API_URL = getAPI();
//   const BASE_URL = new URL(`${API_URL}${contentType}?`);
//   const queryPopupateNotation = qs.stringify(query, { encodeValuesOnly: true });
//   // BASE_URL.search = queryPopupateNotation;
//   return BASE_URL + queryPopupateNotation; // 返回字符串 URL
// }