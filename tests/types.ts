//eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IMock<F extends (...args: any) => any = (...args: any) => any> {
  name: string,
  func: F,
  tests: {
    name: string,
    params: Parameters<F>,
    result: ReturnType<F>,
  }[],
}
