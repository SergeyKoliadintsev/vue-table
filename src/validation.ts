export interface IStatus {
  valid: boolean;
  message?: string;
}

type IRule = (value: string) => IStatus;

export function length({ min, max }: { min: number; max: number }): IRule {
  return function (value: string): IStatus {
    const result = Boolean(value.length >= min && value.length <= max);

    return {
      valid: result,
      message: result ? undefined : `min - ${min}, max - ${max}`,
    };
  };
}

export const required: IRule = (value: string): IStatus => {
  const result = Boolean(value);

  return {
    valid: result,
    message: result ? undefined : "This field is required",
  };
};

export function validate(value: string, rules: IRule[]): IStatus {
  for (const rule of rules) {
    const result = rule(value);
    if (!result.valid) {
      return result;
    }
  }
  return {
    valid: true,
  };
}
