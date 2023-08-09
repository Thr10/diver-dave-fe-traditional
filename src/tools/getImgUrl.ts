const baseUrl = 'http://www.davewiki.fun';

export default function getImgUrl(path: string, name: string): string {
  return `${baseUrl}/assets/${path}/${name}.png`;
}
