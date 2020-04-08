import AsyncStorage from "@react-native-community/async-storage";

export const getFormsStorage = (formIds: string[], callback: Function) => {
  const response = {} as any;
  formIds.forEach( (formId, index) => {
    AsyncStorage.getItem(`@LOCAL_FORM_${formId}`).then( currentForm => {
      if( currentForm ) {
        try {
          currentForm = JSON.parse(currentForm);
          response[formId] = currentForm;
        } catch (error) {
        }
      }
      if( formIds.length - 1 === index ) {
        if( callback ) {
          callback( response );
        }
      }
    } );
  } );
}

export const deleteFormsStorage = (formIds: any, callback: Function) => {
  AsyncStorage.getItem(`@LOCAL_FORMS`).then( (forms: any) => {
    const _forms = JSON.parse(forms);
    let _toStorageForms = _forms.filter( (a: string) => !formIds.includes(a) );
    AsyncStorage.setItem(`@LOCAL_FORMS`, JSON.stringify(_toStorageForms)).then( () => {
      formIds.forEach( (formId: string, index: number) => {
        AsyncStorage.removeItem(`@LOCAL_FORM_${formId}`).then( () => {    
          if( formIds.length - 1 === index ) {
            if( callback ) {
              callback();
            }
          }
        } );
      } );
    } );
  } );
}