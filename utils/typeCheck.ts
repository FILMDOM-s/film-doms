export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function'
}

export const hasOwnProperty = <O extends Object, T extends PropertyKey>(
  object: O,
  property: T
): property is Extract<keyof O, T> => {
  return Object.hasOwn(object, property)
}
