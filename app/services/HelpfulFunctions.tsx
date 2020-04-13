import {Navigation} from 'react-native-navigation';

export const Respuesta = (status: boolean, message?: string, data?: any) => {
  return {
    status: status,
    message: message ? message : '',
    data: data ? data : {},
  };
};

export const NavigateTo = (componentId: any, name: string, title: string, passProps: any = {}) => {
  Navigation.push(componentId, {
    component: {
      name: `navigation.${name}`,
      options: {
        topBar: {
          title: {
            text: title,
          },
          backButton: {
            color: 'white',
          },
        },
      },
      passProps: passProps
    },
  });
};

export const LocalToBlockchain = ( metadata: any, mydata: any ) => {
  let array_mydata = mydata.split("_");
  let fila_number = "";
  let fila_key = "";
  if( metadata.type === "MyTable" ) {
    fila_number = array_mydata[array_mydata.length - 1];
    array_mydata.pop();
    fila_key = array_mydata[array_mydata.length - 1];
    array_mydata.pop();
  }
  mydata = array_mydata.map( (item: any) => `"${item}"` ).join("_");
  let result = "{";
  result += mydata.replace(/_/g, ":{",);
  if( metadata.type === "MyTable" ) {
    result += `: {"${fila_number}": { "${fila_key}": "${metadata.value}" }}`;
  } else {
    result += `: "${metadata.value}"`;
  }
  for( const item of array_mydata ) {
    result += "}";
  }
  let data_result = JSON.parse(result);
  return data_result;
}


export const LocalToBlockchainv2 = ( metadata: any, mydata: any ) => {
  let array_mydata = mydata.split("_");
  let fila_number = "";
  let fila_key = "";
  if( metadata.type === "MyTable" ) {
    fila_number = array_mydata[array_mydata.length - 1];
    array_mydata.pop();
    fila_key = array_mydata[array_mydata.length - 1];
    array_mydata.pop();
  }
  mydata = array_mydata.map( (item: any) => `"${item}"` ).join("_");
  let result = "{";
  result += mydata.replace(/_/g, ":{",);
  if( metadata.type === "MyTable" ) {
    result += `: {"${fila_number}": { "${fila_key}": "${metadata.value}" }}`;
  } else {
    result += `: "${metadata.value}"`;
  }
  for( const item of array_mydata ) {
    result += "}";
  }
  let data_result = JSON.parse(result);
  return data_result;
}

export const mergeData = (og: any, so: any) => {
  for (let key in so) {
    if (typeof og[key] === 'object') {
      mergeData(og[key], so[key]);
    } else {
      og[key] = so[key];
    }
  }
  return og;
}