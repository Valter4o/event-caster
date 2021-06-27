function sanitizeParams(params: any): any {
  const sanitizedData: any = {};
  const paramKeys = Object.keys(params);
  for (let ind = 0; ind < paramKeys.length; ind++) {
    const param: string = paramKeys[ind];
    const isParamPrivate: boolean = param[0] === "_";
    if (!isParamPrivate) {
      sanitizedData[param] = params[param];
    }
  }
  return sanitizedData;
}

export { sanitizeParams };
