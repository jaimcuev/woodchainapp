import AsyncStorage from '@react-native-community/async-storage';

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