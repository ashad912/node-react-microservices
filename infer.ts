type PromiseValue<T> = T extends Promise<infer R>
    ? R
    : never;

const promise = Promise.resolve(12);
type t22 = PromiseValue<Promise<PromiseValue<Promise<number>>>>;