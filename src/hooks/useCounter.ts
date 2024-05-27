import React from 'react';

export type UseCounterOptions = {
  min?: number;
  max?: number;
};

export type UseCounterParams = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export type UseCounterReturn = {
  count: number;
  set: React.Dispatch<React.SetStateAction<number>>;
  reset: () => void;
  inc: (value?: number) => void;
  dec: (value?: number) => void;
};

export type UseCounter = {
  (initialValue?: number, options?: UseCounterOptions): UseCounterReturn;

  (
    { initialValue, max, min }: UseCounterParams,
    options?: never
  ): UseCounterReturn;
};

export const useCounter: UseCounter = (...params) => {
  const initialValue =
    typeof params[0] === 'number' ? params[0] : params[0]?.initialValue;
  const { max = Number.POSITIVE_INFINITY, min = Number.NEGATIVE_INFINITY } =
    typeof params[0] === 'number' ? params[1] ?? {} : params[0] ?? {};

  const [count, setCount] = React.useState(initialValue ?? 0);

  React.useEffect(() => {}, [min, max]);

  const inc = (value: number = 1) => {
    setCount((prevCount) => {
      if (typeof max === 'number' && count === max) return prevCount;
      return Math.max(Math.min(max, prevCount + value), min);
    });
  };

  const dec = (value: number = 1) => {
    setCount((prevCount) => {
      if (typeof min === 'number' && prevCount === min) return prevCount;
      return Math.min(Math.max(min, prevCount - value), max);
    });
  };

  const reset = () => {
    const value = initialValue ?? 0;
    if (typeof max === 'number' && value > max) return setCount(max);
    if (typeof min === 'number' && value < min) return setCount(min);
    setCount(value);
  };

  const set = (value: React.SetStateAction<number>) => {
    setCount((prevCount) => {
      const updatedCount = Math.max(
        min,
        Math.min(max, typeof value === 'number' ? value : value(prevCount))
      );

      return updatedCount;
    });
  };

  return { count, set, inc, dec, reset } as const;
};
