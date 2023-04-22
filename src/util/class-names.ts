type ClassesType = (boolean | string | undefined)[]

export const classNames = (...classes: ClassesType): string =>
  classes.filter(Boolean).join(' ')
