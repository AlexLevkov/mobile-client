import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Alert} from 'react-native';
import registerNNPushToken,  { getPushDataObject } from 'native-notify';
import React, { useEffect , useState } from 'react';
import * as Notifications from 'expo-notifications';
import { postRequest } from './service/http-service';
import data from './service/data.json';

export default function App() {
  registerNNPushToken(19153, 'M61wEu8uK1Dj8yOD4hHId5');
  const [notificationData, setNotificationData] = useState('');

  const [appStatus, setAppStatus] = useState('Welcome!');
  let pushDataObject = getPushDataObject();

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      const message:any = notification.request.content.body;
      console.log('message:', message)
      if (message === 'start') {
        console.log('start')
        setAppStatus('Log file is sent to compression')
        postRequest('https://j5yn3louqe.execute-api.us-east-1.amazonaws.com/prod/upload',data).then(response => console.log('response:', response))
      }
      if (message === 'aws'){
        console.log('aws')
        setAppStatus('Compression was completed successfully')
      }
    });

  }, []);

  return (
    <View style={styles.container}>
      <Text>{appStatus}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
