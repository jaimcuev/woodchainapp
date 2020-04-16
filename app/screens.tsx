import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import ReduxProvider from './ReduxProvider';
import InitScreen from './screens/InitScreen';
import LoginScreen from './screens/LoginScreen';
import IFHomeScreen from './screens/IngenieroForestal/IFHomeScreen';
import MenuScreen from './screens/MenuScreen';
import OHomeScreen from './screens/Operador/OHomeScreen';
import POAScreen from './screens/IngenieroForestal/POAScreen';
import POAInformacionBasicaScreen from './screens/IngenieroForestal/POAInformacionBasicaScreen';
import POAInformacionGeneralScreen from './screens/IngenieroForestal/POAInformacionGeneralScreen';
import POAPlanAprovechamientoScreen from './screens/IngenieroForestal/POAPlanAprovechamientoScreen';
import POAPlanSilviculturalScreen from './screens/IngenieroForestal/POAPlanSilviculturalScreen';
import RegistrarArbolScreen from './screens/IngenieroForestal/RegistrarArbolScreen';
import PGMFScreen from './screens/IngenieroForestal/PGMFScreen';
import ReporteTalaScreen from './screens/Operador/ReporteTalaScreen';
import ReportePatioScreen from './screens/Operador/ReportePatioScreen';
import ReporteArrastreScreen from './screens/Operador/ReporteArrastreScreen';
import RegistrarPOAScreen from './screens/Operador/RegistrarPOAScreen';
import RegistrarEmpresaTaladoraScreen from './screens/IngenieroForestal/RegistrarEmpresaTaladoraScreen';
import ReporteTalaInformacionScreen from './screens/Operador/ReporteTalaInformacionScreen';
import ReportePatioInformacionScreen from './screens/Operador/ReportePatioInformacionScreen';
import ReporteArrastreInformacionScreen from './screens/Operador/ReporteArrastreInformacionScreen';
import GTFScreen from './screens/Operador/GTFScreen';
import GTFInformacionBasicaScreen from './screens/Operador/GTFInformacionBasicaScreen';
import GTFInformacionGeneralScreen from './screens/Operador/GTFInformacionGeneralScreen';
import GTFDetalleProductoScreen from './screens/Operador/GTFDetalleProductoScreen';
import GTFTransportistaScreen from './screens/Operador/GTFTransportistaScreen';
import ReporteTalaAnexarArbolScreen from './screens/Operador/ReporteTalaAnexarArbolScreen';
import GenerarTransaccionScreen from './screens/GenerarTransaccionScreen';
import ReporteArrastreAnexarArbolScreen from './screens/Operador/ReporteArrastreAnexarArbolScreen';
import ReportePatioRegistrarTrozaScreen from './screens/Operador/ReportePatioRegistrarTrozaScreen';

export function registerScreens(): void {  
  Navigation.registerComponent('navigation.InitScreen', () => gestureHandlerRootHOC(ReduxProvider(InitScreen)), () => InitScreen);
  Navigation.registerComponent('navigation.MenuScreen', () => gestureHandlerRootHOC(ReduxProvider(MenuScreen)), () => LoginScreen);
  Navigation.registerComponent('navigation.OHomeScreen', () => gestureHandlerRootHOC(ReduxProvider(OHomeScreen)), () => LoginScreen);
  Navigation.registerComponent('navigation.GenerarTransaccionScreen', () => gestureHandlerRootHOC(ReduxProvider(GenerarTransaccionScreen)), () => GenerarTransaccionScreen);
  Navigation.registerComponent('navigation.LoginScreen', () => gestureHandlerRootHOC(ReduxProvider(LoginScreen)), () => LoginScreen);
  Navigation.registerComponent('navigation.IFHomeScreen', () => gestureHandlerRootHOC(ReduxProvider(IFHomeScreen)), () => LoginScreen);
  Navigation.registerComponent('navigation.OHomeScreen', () => gestureHandlerRootHOC(ReduxProvider(OHomeScreen)), () => LoginScreen);
  // Registro de arboles
  Navigation.registerComponent('navigation.RegistrarArbolScreen', () => gestureHandlerRootHOC(ReduxProvider(RegistrarArbolScreen)), () => RegistrarArbolScreen);
  // Plan operativo anual (POA)
  Navigation.registerComponent('navigation.POAScreen', () => gestureHandlerRootHOC(ReduxProvider(POAScreen)), () => POAScreen);
  Navigation.registerComponent('navigation.POAInformacionBasicaScreen', () => gestureHandlerRootHOC(ReduxProvider(POAInformacionBasicaScreen)), () => POAInformacionBasicaScreen);
  Navigation.registerComponent('navigation.POAInformacionGeneralScreen', () => gestureHandlerRootHOC(ReduxProvider(POAInformacionGeneralScreen)), () => POAInformacionGeneralScreen);
  Navigation.registerComponent('navigation.POAPlanAprovechamientoScreen', () => gestureHandlerRootHOC(ReduxProvider(POAPlanAprovechamientoScreen)), () => POAPlanAprovechamientoScreen);
  Navigation.registerComponent('navigation.POAPlanSilviculturalScreen', () => gestureHandlerRootHOC(ReduxProvider(POAPlanSilviculturalScreen)), () => POAPlanSilviculturalScreen);
  // Plan general de manejo forstal (PGMF)
  Navigation.registerComponent('navigation.PGMFScreen', () => gestureHandlerRootHOC(ReduxProvider(PGMFScreen)), () => PGMFScreen);
  // Registrar Empresa Taladora
  Navigation.registerComponent('navigation.RegistrarEmpresaTaladoraScreen', () => gestureHandlerRootHOC(ReduxProvider(RegistrarEmpresaTaladoraScreen)), () => RegistrarEmpresaTaladoraScreen);
  // Reportes
  Navigation.registerComponent('navigation.ReporteTalaScreen', () => gestureHandlerRootHOC(ReduxProvider(ReporteTalaScreen)), () => ReporteTalaScreen);
  Navigation.registerComponent('navigation.ReporteTalaAnexarArbolScreen', () => gestureHandlerRootHOC(ReduxProvider(ReporteTalaAnexarArbolScreen)), () => ReporteTalaAnexarArbolScreen);
  Navigation.registerComponent('navigation.ReporteTalaInformacionScreen', () => gestureHandlerRootHOC(ReduxProvider(ReporteTalaInformacionScreen)), () => ReporteTalaInformacionScreen);
  Navigation.registerComponent('navigation.ReportePatioScreen', () => gestureHandlerRootHOC(ReduxProvider(ReportePatioScreen)), () => ReportePatioScreen);
  Navigation.registerComponent('navigation.ReportePatioInformacionScreen', () => gestureHandlerRootHOC(ReduxProvider(ReportePatioInformacionScreen)), () => ReportePatioInformacionScreen);
  Navigation.registerComponent('navigation.ReportePatioRegistrarTrozaScreen', () => gestureHandlerRootHOC(ReduxProvider(ReportePatioRegistrarTrozaScreen)), () => ReportePatioRegistrarTrozaScreen);
  Navigation.registerComponent('navigation.ReporteArrastreScreen', () => gestureHandlerRootHOC(ReduxProvider(ReporteArrastreScreen)), () => ReporteArrastreScreen);
  Navigation.registerComponent('navigation.ReporteArrastreInformacionScreen', () => gestureHandlerRootHOC(ReduxProvider(ReporteArrastreInformacionScreen)), () => ReporteArrastreInformacionScreen);
  Navigation.registerComponent('navigation.ReporteArrastreAnexarArbolScreen', () => gestureHandlerRootHOC(ReduxProvider(ReporteArrastreAnexarArbolScreen)), () => ReporteArrastreAnexarArbolScreen);
  

  // Registrar POA para Reportes
  Navigation.registerComponent('navigation.RegistrarPOAScreen', () => gestureHandlerRootHOC(ReduxProvider(RegistrarPOAScreen)), () => RegistrarPOAScreen);
  // GTF
  Navigation.registerComponent('navigation.GTFScreen', () => gestureHandlerRootHOC(ReduxProvider(GTFScreen)), () => GTFScreen);
  Navigation.registerComponent('navigation.GTFInformacionBasicaScreen', () => gestureHandlerRootHOC(ReduxProvider(GTFInformacionBasicaScreen)), () => GTFInformacionBasicaScreen);
  Navigation.registerComponent('navigation.GTFInformacionGeneralScreen', () => gestureHandlerRootHOC(ReduxProvider(GTFInformacionGeneralScreen)), () => GTFInformacionGeneralScreen);
  Navigation.registerComponent('navigation.GTFDetalleProductoScreen', () => gestureHandlerRootHOC(ReduxProvider(GTFDetalleProductoScreen)), () => GTFDetalleProductoScreen);
  Navigation.registerComponent('navigation.GTFTransportistaScreen', () => gestureHandlerRootHOC(ReduxProvider(GTFTransportistaScreen)), () => GTFTransportistaScreen);
}

export function navigateGuest(): void {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppGuest',
        children: [
          {
            component: {
              name: 'navigation.LoginScreen',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export function navigateOperador(): void {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'AppHomeSideMenu',
        left: {
          component: {
            name: 'navigation.MenuScreen',
          },
        },
        center: {
          stack: {
            id: 'AppHomeStack',
            children: [
              {
                component: {
                  name: 'navigation.OHomeScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Menu Principal',
                      },
                    },
                  },
                },
              },
            ],
            options: {
              topBar: {
                background: {
                  color: '#02111B',
                },
                title: {
                  color: '#ffffff',
                  fontSize: 14,
                },
              },
            },
          },
        },
      },
    },
  });
}

export function navigateIngenieroForestal(): void {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'AppHomeSideMenu',
        left: {
          component: {
            name: 'navigation.MenuScreen',
          },
        },
        center: {
          stack: {
            id: 'AppHomeStack',
            children: [
              {
                component: {
                  name: 'navigation.IFHomeScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Menu Principal',
                      },
                    },
                  },
                },
              },
            ],
            options: {
              topBar: {
                background: {
                  color: '#02111B',
                },
                title: {
                  color: '#ffffff',
                  fontSize: 14,
                },
              },
            },
          },
        },
      },
    },
  });
}
