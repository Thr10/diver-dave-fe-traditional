import { CookingItemBaseInfo, CookingItemDetailInfo } from '../types/cooking';

// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://www.davewiki.fun/server'
    : 'http://localhost:3005';

async function getCookingList(): Promise<CookingItemBaseInfo[]> {
  const res = await fetch(`${baseUrl}/cooking/getList`);
  return await res.json();
}

async function getCookingDetail(uuid: number): Promise<CookingItemDetailInfo> {
  const res = await fetch(`${baseUrl}/cooking/getDetail/${uuid}`);
  return await res.json();
}

export { getCookingList, getCookingDetail };
