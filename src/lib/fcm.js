import FCM, { FCMEvent } from 'react-native-fcm';

export const subscribe = (key) => {
  FCM.requestPermissions();
  FCM.subscribeToTopic('/topics/all');
  FCM.subscribeToTopic(`/topics/${key}`);
};

export const unsubscribe = (key) => {
  FCM.unsubscribeFromTopic('/topics/all');
  FCM.unsubscribeFromTopic(`/topics/${key}`);
};

export const subscribeToday = (key) => {
  FCM.requestPermissions();
  FCM.subscribeToTopic(`/topics/today-${key}`);
};

export const unsubscribeToday = (key) => {
  FCM.unsubscribeFromTopic(`/topics/today-${key}`);
};

export const subscribeLike = (key) => {
  FCM.requestPermissions();
  FCM.subscribeToTopic(`/topics/like-${key}`);
};

export const unsubscribeLike = (key) => {
  FCM.unsubscribeFromTopic(`/topics/like-${key}`);
};

export const subscribeAppeal = (key) => {
  FCM.requestPermissions();
  FCM.subscribeToTopic(`/topics/appeal-${key}`);
};

export const unsubscribeAppeal = (key) => {
  FCM.unsubscribeFromTopic(`/topics/appeal-${key}`);
};

export const subscribeMatch = (key) => {
  FCM.requestPermissions();
  FCM.subscribeToTopic(`/topics/match-${key}`);
};

export const unsubscribeMatch = (key) => {
  FCM.unsubscribeFromTopic(`/topics/match-${key}`);
};

export const subscribeMessage = (key) => {
  FCM.requestPermissions();
  FCM.subscribeToTopic(`/topics/message-${key}`);
};

export const unsubscribeMessage = (key) => {
  FCM.unsubscribeFromTopic(`/topics/message-${key}`);
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
