import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {
  StrictMode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import CalculateFactorial from './hookUsememo';
import FunUseState from './hookUseState';
import FunUseCallBack from './hookUseCallBack';
import FunUseEffect from './hookUseEffect';
import FunUseRef from './hookUseRef';
import FunUseId from './hookUseId';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import FunUseDebaug from './hookUseDebug';
import CustomDrawer from './src/navigator/CustomDrawerUI';
import PkgFormik from './src/component/advancedPkgFormik';
import NavigationScreens from './src/utils/NavigationScreens';
import FunAdvancedPkgFormik from './src/component/advancedPkgFormik';
import FunAdvancedWebView from './src/component/advancedPkgWebview';
import FunAdvancedDatePicker from './src/component/advancedPkgDatePicker';
import FunHookUseFormik from './src/component/hookUseFormik';
import FunAdvancedPkgDocumentPicker from './src/component/advancedPkgDocumentPicker';
import FunAdvancedPkgImagePicker from './src/component/advancedPkgImagePicker';
import FunAdvancedPkgCrousal from './src/component/advancedCarousalPkg';
import FunAdvancedActionSheet from './src/component/advancedPkgActionSheet';
import FunAdvancedPkgLinearGradiant from './src/component/advancedPkgLinearGradiant';
import FunAdvancedLocalization from './src/component/advancedPkgLocalization';
import FunLottieAnimation from './src/component/advancedPkgLottieAnimation';
import FunAdvancedPkgMap from './src/component/advancedPkgMap';
import FunAdvancedPkgCamera from './src/component/advancedPkgCamera';
import FunApiToDo from './src/component/apiToDo/apiTodo';
import FunToDoUsingAxios from './src/component/apiToDo/apiToDoAxios';
import FunApiAuthentication from './src/component/apiToDo/apiAuthentication';
import FunReduxCore from './src/component/TodoRedux/todoReduxCore';
import {FunReduxSlice} from './src/component/TodoRedux/todoReduxSlice';
import FunUseContext from './hookUseContext';
import TodoAppEcommerce from './src/screens/toDoAppEcommerce';
import TodoAppPersonDetails from './src/screens/todoAppPersonDetails';
import viewCart from './src/screens/viewCart';

function HooksUseState() {
  return <FunUseState />;
}
function HooksUseEffect() {
  return <FunUseEffect />;
}
function HooksUseCallback() {
  return <FunUseCallBack />;
}
function HooksUseCallContext() {
  return <FunUseContext />;
}
function HooksUseMemo() {
  return <CalculateFactorial />;
}
function HooksUseRef() {
  return <FunUseRef />;
}
function HooksUseId() {
  return <FunUseId />;
}
function HooksUseDebug() {
  return <FunUseDebaug />;
}
function AdvancedPkgFormik() {
  return <FunAdvancedPkgFormik />;
}
function AdvancedPkgWebview() {
  return <FunAdvancedWebView />;
}
function AdvancedPkgDatePicker() {
  return <FunAdvancedDatePicker />;
}
function AdvancedPkgDocumentPicker() {
  return <FunAdvancedPkgDocumentPicker />;
}
function HookUseFormik() {
  return <FunHookUseFormik />;
}
function AdvancedPkgCarousal() {
  return <FunAdvancedPkgCrousal />;
}
function AdvancedPkgImagePicker() {
  return <FunAdvancedPkgImagePicker />;
}
function AdvancedPkgActionSheet() {
  return <FunAdvancedActionSheet />;
}
function AdvancedPkgLinearGradiant() {
  return <FunAdvancedPkgLinearGradiant />;
}
function AdvancedPkgLocalization() {
  return <FunAdvancedLocalization />;
}
function AdvancedPkgLottieAnimation() {
  return <FunLottieAnimation />;
}
function AdvancedPkgMap() {
  return <FunAdvancedPkgMap />;
}
function AdvancedPkgCamera() {
  return <FunAdvancedPkgCamera />;
}
function ApiToDo() {
  return <FunApiToDo />;
}
function ApiToDoUsingAxios() {
  return <FunToDoUsingAxios />;
}
function ApiToDoAuthentication() {
  return <FunApiAuthentication />;
}
function ToDoReduxCore() {
  return <FunReduxCore />;
}
function ToDoReduxSlice() {
  return <FunReduxSlice />;
}
function ToDoAppTask() {
  return <TodoAppEcommerce />;
}
function ToDoAppPersonDetails() {
  return <TodoAppPersonDetails />;
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: 'maroon',
          drawerStyle: {backgroundColor: 'antiquewhite'},
          headerStyle: {backgroundColor: 'antiquewhite'},
        }}
        drawerContent={CustomDrawer}>
        <>
          <Drawer.Screen
            name={NavigationScreens.HooksUseState}
            component={HooksUseState}
            options={{drawerLabel: 'useState'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HookUseEffects}
            component={HooksUseEffect}
            options={{drawerLabel: 'useEffect'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HooksUseCallback}
            component={HooksUseCallback}
            options={{drawerLabel: 'useCallBack'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HooksUseCallContext}
            component={HooksUseCallContext}
            options={{drawerLabel: 'useCallContext'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HooksUseMemo}
            component={HooksUseMemo}
            options={{drawerLabel: 'useMemo'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HooksUseRef}
            component={HooksUseRef}
            options={{drawerLabel: 'useRef'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HooksUseId}
            component={HooksUseId}
            options={{drawerLabel: 'useId'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HooksUseDebug}
            component={HooksUseDebug}
            options={{drawerLabel: 'useDebug'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgFormik}
            component={AdvancedPkgFormik}
            options={{drawerLabel: 'Formik'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgWebView}
            component={AdvancedPkgWebview}
            options={{drawerLabel: 'Web View'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgDatePicker}
            component={AdvancedPkgDatePicker}
            options={{drawerLabel: 'Date Picker'}}
          />
          <Drawer.Screen
            name={NavigationScreens.HookUseFormik}
            component={HookUseFormik}
            options={{drawerLabel: 'Test'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgDocumentPicker}
            component={AdvancedPkgDocumentPicker}
            options={{drawerLabel: 'Document Picker'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgImagePicker}
            component={AdvancedPkgImagePicker}
            options={{drawerLabel: 'Image Picker'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgCrousal}
            component={AdvancedPkgCarousal}
            options={{drawerLabel: 'Advanced Carousal'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgActionSheet}
            component={AdvancedPkgActionSheet}
            options={{drawerLabel: 'Advanced Action Sheet'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgLinearGradiant}
            component={AdvancedPkgLinearGradiant}
            options={{drawerLabel: 'Advanced Linear Gradiant'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgLocalization}
            component={AdvancedPkgLocalization}
            options={{drawerLabel: 'Advanced Localization'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgLottieAnimation}
            component={AdvancedPkgLottieAnimation}
            options={{drawerLabel: 'Advanced Lottie Animation'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgMap}
            component={AdvancedPkgMap}
            options={{drawerLabel: 'Advanced Map'}}
          />
          <Drawer.Screen
            name={NavigationScreens.AdvancedPkgCamera}
            component={AdvancedPkgCamera}
            options={{drawerLabel: 'Advanced Camera'}}
          />
          <Drawer.Screen
            name={NavigationScreens.ApiToDo}
            component={ApiToDo}
            options={{drawerLabel: 'API'}}
          />
          <Drawer.Screen
            name={NavigationScreens.ApiToDoUsingAxios}
            component={ApiToDoUsingAxios}
            options={{drawerLabel: 'API'}}
          />
          <Drawer.Screen
            name={NavigationScreens.ApiToDoAuthentication}
            component={ApiToDoAuthentication}
            options={{drawerLabel: 'API'}}
          />
          <Drawer.Screen
            name={NavigationScreens.TodoReduxCore}
            component={ToDoReduxCore}
            options={{drawerLabel: 'Core Redux'}}
          />
          <Drawer.Screen
            name={NavigationScreens.TodoReduxSlice}
            component={ToDoReduxSlice}
            options={{drawerLabel: 'Slice Redux'}}
          />
          <Drawer.Screen
            name={NavigationScreens.TodoAppTask}
            component={ToDoAppTask}
            options={{drawerLabel: 'Ecommerce'}}
          />
          <Drawer.Screen
            name={NavigationScreens.TodoAppPersonalDetails}
            component={ToDoAppPersonDetails}
            options={{drawerLabel: 'Person Details'}}
          />
          <Stack.Navigator>
            <Stack.Screen name="viewCart" component={viewCart} />
          </Stack.Navigator>
        </>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
