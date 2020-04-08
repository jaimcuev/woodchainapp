import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getArbolesPOA } from '../../services/ArbolService';

const ReporteTalaAnexarArbolScreen = (props: any) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if(props.poaId) {
      getArbolesPOA(props.poaId).then( result => {
        console.warn(result.data);
        setItems(result.data || []);
      } );
    }
    return () => {
    }
  }, []);
  return (
    <View>

    </View>
  )
}

export default ReporteTalaAnexarArbolScreen
