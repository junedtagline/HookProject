import {useCallback, useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function FunUseCallBack() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState<string[]>([]);
  const increment = () => {
    setCount(c => c + 1);
  };

  const dumy = () => {
    setTasks(t => [...t, 'New Task']);
  };

  const [dVar, setDVar] = useState('');
  const [dvar2, setDvar2] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setDVar('Hello');
      setDvar2('Hello2');
    }, 10000);
  }, []);
  const addTask = useCallback(() => {
    console.log({'----dVar': dVar});
    console.log({'----dvar2': dvar2});
    setDVar('test');
  }, [dVar]);

  const addTask3 = () => {
    console.log({'----dVar': dVar});
    console.log({'----dvar2': dvar2});
    setDVar('test');
  };

  const addt2 = useCallback(() => {
    setDvar2('test2');
    console.log({'----dVar': dVar});
    console.log({'----dvar2': dvar2});
  }, [dvar2]);

  return (
    <View>
      <Text>Dvar:{dVar}</Text>
      <Text>Dvar2:{dvar2}</Text>
      <Button title='"Updated' onPress={() => addTask()} />
      <Button title='"Updated2' onPress={() => addt2()} />
    </View>
  );
}
export default FunUseCallBack;
