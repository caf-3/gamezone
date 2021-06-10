import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './routes/drawer';
//import 'react-native-gesture-handler'
export default function App() {
  const getFonts = () => {
    return Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    });
  }
  const [fontLoaded, setFontLoaded] = useState(false);
  if(fontLoaded){
    return(
     <AppNavigator />
    )
  }else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontLoaded(true)}
      onError={console.warn}
      />
    )
  }
}

