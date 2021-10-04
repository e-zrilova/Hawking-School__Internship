const EMAIL_REGEXP = /\S+@\S+\.\S+/
const NOT_DIGITS_REGEXP = /[\D]/g;

const validators = {
  name(value) {
    return value.trim().length > 0;
  },
  phone(value) {
    return value.replace(NOT_DIGITS_REGEXP, '').length === 11;
  },
  email(value) {
    return EMAIL_REGEXP.test(value);
  },
  comment(value) {
    return value.length > 20;
  },
  agree(value) {
    return value;
  },
  password(value) {
    return value.trim().length > 0;
  }
}

export const validate = (fieldName, value) => !validators[fieldName] || validators[fieldName](value);
