export type Fixture<T> = (customProps?: Partial<T>) => T;
export type Mock<T> = (customMocks?: Partial<T>) => T;
