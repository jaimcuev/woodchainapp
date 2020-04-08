import AsyncStorage from '@react-native-community/async-storage';

export const getPOA = async() => {
  try {
    const value = await AsyncStorage.getItem('@LOCAL_POAID');
    if (value !== null) return value;
    return false;
  } catch (e) {
    return false;
  }
}

export const registrarPOA = async(poaId: string) => {
  try {
    await AsyncStorage.setItem('@LOCAL_POAID', poaId);
    return true;
  } catch (e) {
    return false;
  }
}

export const getReporte = async() => {
  try {
    const value = await AsyncStorage.getItem('@REPORTE');
    if (value !== null) return value;
    return false;
  } catch (e) {
    return false;
  }
};

export const checkExistReporte = async(reporte: string) => {
  try {
    const value = await AsyncStorage.getItem('@REPORTE');
    if (value === reporte) return true;
    return false;
  } catch (e) {
    return false;
  }
};

export const registrarReporte = async(reporte: string) => {
  try {
    await AsyncStorage.setItem('@REPORTE', reporte);
    return true;
  } catch (e) {
    return false;
  }
}

export const eliminarReporte = async() => {
  try {
    await AsyncStorage.removeItem('@REPORTE');
    await AsyncStorage.removeItem('@LOCAL_REPORTE');
    return true;
  } catch (e) {
    return false;
  }
}

export const getLocalReporte = async() => {
  try {
    const value = await AsyncStorage.getItem(`@LOCAL_REPORTE`);
    if (value !== null) return JSON.parse(value);
    return false;
  } catch (e) {
    return false;
  }
}

export const registrarLocalReporte = async(name: string, data: any, localData: any) => {
  try {
    let localReporte = {} as any;
    const localValue = await AsyncStorage.getItem(`@LOCAL_REPORTE`);
    if (localValue !== null) localReporte = JSON.parse(localValue);
    localReporte[name] = localData;
    await AsyncStorage.setItem(`@LOCAL_REPORTE`, JSON.stringify(localReporte));
    return true;
  } catch (e) {
    return false;
  }
}