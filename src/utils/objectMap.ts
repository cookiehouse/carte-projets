/* eslint-disable @typescript-eslint/no-explicit-any */
const objectMap = (
  obj: { [key: string]: any },
  func: (value: any) => any,
): { [key: string]: any } => {
  return Object.assign(
    {},
    ...Object.keys(obj).map(k => ({ [k]: func(obj[k]) })),
  );
};
export default objectMap;
