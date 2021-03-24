import { check, PERMISSIONS, request, RESULTS, openSettings } from "react-native-permissions";
import { Alert, Platform } from "react-native";
import { setPermissionErrorAction } from "../actions/appErrorActions";
import crashlytics from '@react-native-firebase/crashlytics';

export const PHOTO_PERMISSIONS = {
  IOS: PERMISSIONS.IOS.PHOTO_LIBRARY
}

export const UNAVAILABLE = 'This feature is not available (on this device / in this context)!';
export const GRANTED = 'The permission is granted!';
export const DENIED = 'The permission is denied and but requestable!';
export const BLOCKED = 'The permission is denied and not requestable anymore!. Do you want to give the permissions via settings ?';
export const ERROR = 'Error occurred with the permissions!';

//single permission checking here..
export const checkPermissions = async(permissions) => {
  try{
    const result = await check(permissions);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        return UNAVAILABLE;

      case RESULTS.DENIED:
        return DENIED;

      case RESULTS.GRANTED:
        return GRANTED;

      case RESULTS.BLOCKED:
        return BLOCKED;
    }
  } catch (error) {
    crashlytics().recordError(error);
    return ERROR;
  }
}

//single permission request here..
export const requestPermissions = async(status,permissions) => {

  if (status === DENIED) {
    try {
      return await request(permissions);
    } catch (error) {
      return ERROR;
    }

  } else if (status === BLOCKED) {
    Alert.alert(
      "Permissions Required",
      status,
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Yes", onPress: async () => await openSettings() }
      ],
      { cancelable: false }
    );

  } else {
    return status;
  }
}

//use to handle the device permissions
export const handleDevicePermissions = async(dispatch,permission) => {
  let status;
  let result;
  if (Platform.OS === 'ios') {
    status = await checkPermissions(permission.IOS);
    result = await requestPermissions(status,permission.IOS)
  }

  if (result && (result === ERROR || result === UNAVAILABLE)) {
    dispatch(setPermissionErrorAction({code: 500, result}));
    return false;
  } else return result && result === GRANTED;
}
