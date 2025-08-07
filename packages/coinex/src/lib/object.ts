/**
 * Removes properties with `undefined` values from an object.
 * @param obj - The object to filter.
 * @param deep - Whether to filter deeply.
 * @returns {T} A new object without `undefined` properties.
 * @example
 * const obj = { a: 1, b: undefined, c: { d: 2, e: undefined } };
 * const newObj = noUndefined(obj); // { a: 1, c: { d: 2, e: undefined } }
 * const deepNewObj = noUndefined(obj, true); // { a: 1, c: { d: 2 } }
 */
export function noUndefined<T extends object>(obj: T, deep: boolean = false): T {
  const newObj: Partial<T> = {} as Partial<T>;
  for (const key in obj) {
    if (obj[key] !== undefined) {
      if (deep && typeof obj[key] === 'object' && obj[key] !== null) {
        (newObj as any)[key] = noUndefined(obj[key] as any, true);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj as T;
}
