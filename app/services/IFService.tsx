import AsyncStorage from '@react-native-community/async-storage';

export const eliminarActividad = async(actividad: string) => {
  try {
    const isActive = checkExistActividad(actividad);
    if( isActive ) {
      await AsyncStorage.removeItem('@actividad');
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const getActividad = async() => {
  try {
    const value = await AsyncStorage.getItem('@actividad');
    if (value !== null) return value;
    return false;
  } catch (e) {
    return false;
  }
};

export const checkExistActividad = async(actividad: string) => {
  try {
    const value = await AsyncStorage.getItem('@actividad');
    if (value === actividad) return true;
    return false;
  } catch (e) {
    return false;
  }
};

const registrarActividad = async(actividad: string) => {
  try {
    await AsyncStorage.setItem('@actividad', actividad);
    return true;
  } catch (e) {
    return false;
  }
}

export const getPOA = async() => {
  try {
    const value = await AsyncStorage.getItem(`@POA`);
    if (value !== null) return JSON.parse(value);
    return false;
  } catch (e) {
    return false;
  }
}

export const getLocalPOA = async() => {
  try {
    const value = await AsyncStorage.getItem(`@LOCAL_POA`);
    if (value !== null) return JSON.parse(value);
    return false;
  } catch (e) {
    return false;
  }
}

export const eliminarPOA = async() => {
  try {
    const isActive = checkExistActividad('POA');
    if( isActive ) {
      await AsyncStorage.removeItem('@actividad');
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const registrarPOA = async(name: string, data: any, localData: any) => {
  try {
    let poa = {} as any;
    const value = await AsyncStorage.getItem(`@POA`);
    if (value !== null) poa = JSON.parse(value);
    poa[name] = data;
    await AsyncStorage.setItem(`@POA`, JSON.stringify(poa));
    
    let localPoa = {} as any;
    const localValue = await AsyncStorage.getItem(`@LOCAL_POA`);
    if (localValue !== null) localPoa = JSON.parse(localValue);
    localPoa[name] = localData;
    await AsyncStorage.setItem(`@LOCAL_POA`, JSON.stringify(localPoa));

    return true;
  } catch (e) {
    return false;
  }
}

export const iniciarPOA = async () => {
  const existPGMF = await checkExistActividad('PGMF');
  if (!existPGMF) {
    const existPOA = await checkExistActividad('POA');
    if( !existPOA ) {
      await registrarActividad('POA');
    }
    return true;
  } else {
    return false;
  }
}

export const eliminarPGMF = async() => {
  try {
    const isActive = checkExistActividad('PGMF');
    if( isActive ) {
      await AsyncStorage.removeItem('@actividad');
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const iniciarPGMF = async () => {
  const existPOA = await checkExistActividad('POA');
  if (!existPOA) {
    const existPGMF = await checkExistActividad('PGMF');
    if( !existPGMF ) {
      await registrarActividad('PGMF');
    }
    return true;
  } else {
    return false;
  }
}

export const getArboles = async() => {
  try {
    const value = await AsyncStorage.getItem(`@LOCAL_ARBOLES`);
    if (value !== null) return JSON.parse(value);
    return false;
  } catch (e) {
    return false;
  }
}

export const registrarArbol = async(data: any, localData: any) => {
  try {
    let arboles = [] as any;
    const localValue = await AsyncStorage.getItem(`@LOCAL_ARBOLES`);
    if (localValue !== null) arboles = JSON.parse(localValue);
    arboles.push(localData);
    await AsyncStorage.setItem(`@LOCAL_ARBOLES`, JSON.stringify(arboles));
    return true;
  } catch (e) {
    return false;
  }
}

export const eliminarArboles = async() => {
  try {
    await AsyncStorage.removeItem(`@LOCAL_ARBOLES`);
    return true;
  } catch (e) {
    return false;
  }
}