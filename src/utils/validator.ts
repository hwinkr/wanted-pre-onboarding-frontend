type Validator = 'over' | 'under';

function inputValidator(
  value: string,
  length: number,
  type: Validator,
): boolean {
  return type === 'over' ? value.length >= length : value.length <= length;
}

export default inputValidator;
