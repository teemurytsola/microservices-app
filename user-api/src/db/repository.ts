interface Repository<T> {
  get: (id: string) => T | undefined
  getAll: () => T[]
  create: () => T | undefined
  update: (toUpdate: T) => T | undefined
}


