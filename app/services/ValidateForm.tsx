export const validateTipoDato = (element: any, validate: any, value: any) => {
  let isFinish = true;
  let messages = [] as any;
  if( validate.type ) {
    switch (validate.type) {
      case 'string':
        var isString = /^[a-zA-Z ]*$/.test(value);
        if( !isString ) {
          messages.push( `El campo ${element.name} solo puede contenter letras y espacios.` );
          isFinish = false;
        }        
        break;
      case 'number':
        var isNumber = /^[0-9]*$/.test(value);
        if( !isNumber ) {
          messages.push( `El campo ${element.name} solo puede contenter numeros.` );
          isFinish = false;
        }
      default:
        break;
    }
  }
  return { isFinish, messages }
}

export const validateExtensionChar = (element: any, validate: any, value: any) => {
  let isFinish = true;
  let messages = [] as any;

  var lengthValue = value.length;
  if( validate.min ) {
    if( lengthValue < validate.min ) {
      messages.push( `El campo ${element.name} debe tener minimo ${validate.min} digitos.` );
      isFinish = false;
    }
  }
  if( validate.max ) {
    if( lengthValue > validate.max ) {
      messages.push( `El campo ${element.name} debe tener como maximo ${validate.min} digitos.` );
      isFinish = false;
    }
  }

  return { isFinish, messages }
}

export const validateTextInput = (element: any, validate: any, value: any) => {
  let isFinish = true;
  let messages = [] as any;  
  // Validar tipo de dato
  const _validateTipoDato = validateTipoDato( element, validate, value );
  messages = [...messages, ..._validateTipoDato.messages];
  isFinish = _validateTipoDato.isFinish;
  // Validar cantidad de caracteres
  const _validateExtensionChar = validateExtensionChar( element, validate, value );
  messages = [...messages, ..._validateExtensionChar.messages];
  isFinish = _validateExtensionChar.isFinish;
  return { isFinish, messages }
};