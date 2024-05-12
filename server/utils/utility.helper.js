const sendSuccessResponse = (res, success, message, data = null) => {
  return res
    .status(200)
    .json({ success: success, message: message, data: data });
};

const sendSuccessResponseWithData = (res, success, message, data = null) => {
  return res
    .status(201)
    .json({ success: success, message: message, data: data });
};

const sendErrorResponse = (
  res,
  success,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(400).json({
    success: success,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const unauthorizeResponse = (
  res,
  success,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(401).json({
    success: success,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const forribdenResponse = (
  res,
  success,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(403).json({
    success: success,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const notFoundResponse = (
  res,
  success,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(404).json({
    success: success,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const alreadyExistsResponse = (
  res,
  success,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(409).json({
    success: success,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const internalErrorResponse = (
  res,
  success,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(500).json({
    success: success,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

export {
  sendSuccessResponse,
  sendSuccessResponseWithData,
  unauthorizeResponse,
  forribdenResponse,
  notFoundResponse,
  internalErrorResponse,
  sendErrorResponse,
  alreadyExistsResponse,
};
