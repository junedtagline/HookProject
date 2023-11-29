import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NavigationScreens from '../utils/NavigationScreens';
import Entypo from 'react-native-vector-icons/Entypo';
const data = [
  {name: 'Use State', component: 'HookUseState'},
  {name: 'Use Effect', component: 'HookUseEffect'},
  {name: 'Use CallBack', component: 'HookUseCallBack'},
  {name: 'Use Id', component: 'HookUseId'},
  {name: 'Use Memo', component: 'HookUseMemo'},
];
const hookData = [
  {
    name: 'Hooks',
    displayName: 'Hooks',
    subScreen: [
      {
        screenName: NavigationScreens.HooksUseState,
        displayName: 'Hooks Use State',
      },
      {
        screenName: NavigationScreens.HookUseEffects,
        displayName: 'Hook Use Effects',
      },
      {
        screenName: NavigationScreens.HooksUseCallback,
        displayName: 'Hook Use Callback',
      },
      {
        screenName: NavigationScreens.HooksUseCallContext,
        displayName: 'Hooks Use CallContext',
      },
      {
        screenName: NavigationScreens.HooksUseMemo,
        displayName: 'Hooks Use Memo',
      },
      {
        screenName: NavigationScreens.HooksUseRef,
        displayName: 'Hooks Use Ref',
      },
      {
        screenName: NavigationScreens.HooksUseId,
        displayName: 'Hooks Use Id',
      },
      {
        screenName: NavigationScreens.HooksUseDebug,
        displayName: 'Hooks Use Debug',
      },
      {
        screenName: NavigationScreens.HookUseFormik,
        displayName: 'Hooks Use Formik',
      },
    ],
  },
  {
    name: 'advancedPackages',
    displayName: 'Advanced Packages',
    subScreen: [
      {
        screenName: NavigationScreens.AdvancedPkgFormik,
        displayName: 'Formik',
      },
      {
        screenName: NavigationScreens.AdvancedPkgWebView,
        displayName: 'Web View',
      },
      {
        screenName: NavigationScreens.AdvancedPkgDatePicker,
        displayName: 'Date Picker',
      },
      {
        screenName: NavigationScreens.AdvancedPkgDocumentPicker,
        displayName: 'Document Picker',
      },
      {
        screenName: NavigationScreens.AdvancedPkgImagePicker,
        displayName: 'Image Picker',
      },
      {
        screenName: NavigationScreens.AdvancedPkgCrousal,
        displayName: 'Carousal',
      },
      {
        screenName: NavigationScreens.AdvancedPkgActionSheet,
        displayName: 'Action Sheet',
      },
      {
        screenName: NavigationScreens.AdvancedPkgLinearGradiant,
        displayName: 'Linear Gradiant',
      },
      {
        screenName: NavigationScreens.AdvancedPkgLocalization,
        displayName: 'Localization',
      },
      {
        screenName: NavigationScreens.AdvancedPkgLottieAnimation,
        displayName: 'Lottie Animation',
      },
      {
        screenName: NavigationScreens.AdvancedPkgMap,
        displayName: 'Map',
      },
      {
        screenName: NavigationScreens.AdvancedPkgCamera,
        displayName: 'Camera',
      },
    ],
  },
  {
    name: 'API',
    displayName: 'API',
    subScreen: [
      {
        screenName: NavigationScreens.ApiToDo,
        displayName: 'Fetch Method',
      },
      {
        screenName: NavigationScreens.ApiToDoUsingAxios,
        displayName: 'Axios Method',
      },
      {
        screenName: NavigationScreens.ApiToDoAuthentication,
        displayName: 'Authentication',
      },
    ],
  },
  {
    name: 'REDUX',
    displayName: 'Redux',
    subScreen: [
      {
        screenName: NavigationScreens.TodoReduxCore,
        displayName: 'Core Method',
      },
      {
        screenName: NavigationScreens.TodoReduxSlice,
        displayName: 'Slice Method',
      },
    ],
  },
  {
    name: 'To Do Task',
    displayName: 'To Do Task',
    subScreen: [
      {
        screenName: NavigationScreens.TodoAppTask,
        displayName: 'Ecommerce',
      },
      {
        screenName: NavigationScreens.TodoAppPersonalDetails,
        displayName: 'Person Details',
      },
    ],
  },
];
const CustomDrawer = () => {
  const [expandedDrawerItem, setExpandedDrawerItem] = useState<string | null>(
    null,
  );
  const [menuType, setMenuType] = useState<string>('plus');
  const changeValue = () => {
    if (menuType == 'plus') {
      setMenuType('minus');
      console.log(
        '🚀 ~ file: CustomDrawerUI.tsx:90 ~ changeValue ~ setMenuType:',
        menuType,
      );
    } else {
      setMenuType('plus');
    }
  };
  const navigation = useNavigation();

  return (
    <View style={{margin: 20, paddingTop: 30}}>
      <SafeAreaView>
        <FlatList
          data={hookData}
          keyExtractor={(i, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <>
                <Entypo
                  name={expandedDrawerItem == item?.name ? 'minus' : 'plus'}
                  size={24}
                  color="black">
                  <TouchableOpacity
                    style={{paddingTop: 20}}
                    onPress={() => {
                      setExpandedDrawerItem(previousValue => {
                        if (previousValue == item?.name) {
                          return null;
                        } else {
                          return item?.name;
                        }
                      });
                    }}
                    activeOpacity={2}>
                    <Text
                      style={{
                        fontFamily: 'times new roman',
                        fontSize: 20,
                        color: '#4d1d19',
                        fontWeight: 'bold',
                        marginLeft: 15,
                      }}>
                      {item?.displayName}
                    </Text>
                  </TouchableOpacity>
                </Entypo>
                {item?.subScreen?.length > 0 &&
                  expandedDrawerItem == item?.name &&
                  item?.subScreen.map(subItem => {
                    return (
                      <TouchableOpacity
                        style={{
                          height: 30,
                          paddingTop: 10,
                        }}
                        onPress={() => {
                          console.log({subItem});
                          navigation?.navigate(subItem?.screenName);
                        }}>
                        <Text
                          style={{
                            fontFamily: 'times new roman',
                            fontSize: 15,
                            color: 'maroon',
                            marginLeft: 40,
                          }}>
                          {subItem?.displayName}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
              </>
            );
          }}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    </View>
  );
};

export default CustomDrawer;
