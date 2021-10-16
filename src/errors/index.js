const CustomError = require('custom-error-instance');

export const AppError = CustomError('AppError');
const _ValidationError = CustomError('ValidationError', AppError);
const _ExecutionError = CustomError('ExecutionError', AppError);
const _AuthorizationError = CustomError('AuthorizationError', AppError);

export const ValidationError = (code, message) => {
  return new _ValidationError({
    message: message,
    code: code,
    httpCode: 400
  })
};
export const ExecutionError = (code, message) => {
  return new _ExecutionError({
    message: message,
    code: code,
    httpCode: 500
  })
};
export const AuthorizationError = (code, message) => {
  return new _ExecutionError({
    message: message,
    code: code,
    httpCode: 401
  })
};
