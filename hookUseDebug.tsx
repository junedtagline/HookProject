import {createContext, useContext, useState} from 'react';
import {Text, View} from 'react-native';

const UserContext = createContext();
function Component1() {
  const [user, setUser] = useState('Jesse Hall');
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}
function Component2() {
  return (
    <>
      <Text>Component 2</Text>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <Text>Component 3</Text>
      <Component4 />
    </>
  );
}
function Component4() {
  return (
    <>
      <Text>Component 4</Text>
      <FunUseDebaug />
    </>
  );
}
function FunUseDebaug() {
  const user = useContext(UserContext);
  return (
    <>
      <Text>Component 5</Text>
      <Component1 />
      <Text>{user}</Text>
    </>
  );
}
export default FunUseDebaug;
