import FCM, { FCMEvent } from 'react-native-fcm';

export const subscribe = (uid) => {
  FCM.requestPermissions();
  FCM.subscribeToTopic('/topics/all');
  FCM.subscribeToTopic(`/topics/${uid}`);
};

export const unsubscribe = (uid) => {
  FCM.unsubscribeFromTopic('/topics/all');
  FCM.unsubscribeFromTopic(`/topics/${uid}`);
};

export const registerListener = (action = null, moveScreen = null) => {
  FCM.on(FCMEvent.Notification, (notif) => {
    if (notif.opened_from_tray
      && moveScreen !== null 
      && notif.targetScreen !== null 
      && notif.targetScreen !== undefined) {
      moveScreen(notif.targetScreen);
    } 

    if (action !== null 
      && notif.custom_notification != null 
      && notif.custom_notification !== undefined) {
      const data = JSON.parse(notif.custom_notification);
      action(data);
    }
  });
};

export const removeListener = () => {
  FCM.on(FCMEvent.Notification, (notif) => {
    
  });
};
