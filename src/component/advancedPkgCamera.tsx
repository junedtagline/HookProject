import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

function FunAdvancedPkgCamera() {
  const cameraHook = useCameraDevice('back');
  useEffect(() => {
    checkPermision();
  }, []);
  const checkPermision = async () => {
    const newCameraPermision = await Camera.requestCameraPermission();
  };

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={cameraHook}
      isactive={true}
      maxZoom={16}
      minZoom={1}
      video={true}
      audio={true}
    />
  );
}
export default FunAdvancedPkgCamera;
