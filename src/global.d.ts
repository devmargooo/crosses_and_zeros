type Right<T> = { tag: "value", result: T };
type Left<T> = { tag: "error", error: T };

type Either<ErrorType, ValueType> = Error<ErrorType> | Right<ValueType>