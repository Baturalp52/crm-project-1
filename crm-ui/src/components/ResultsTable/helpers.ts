export function resolve(path: string, obj: Object) {
  return path.split(".").reduce((prev: any, curr: string) => {
    return prev ? prev[curr as keyof typeof prev] : null;
  }, obj);
}
