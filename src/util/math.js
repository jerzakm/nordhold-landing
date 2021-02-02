export function findNewPoint(x, y, angle, distance) {
  let result = {};

  result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
  result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);

  return result;
}