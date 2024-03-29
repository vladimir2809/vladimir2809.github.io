import { VKBridgeSubscribeHandler, AnyRequestMethodName, RequestProps, RequestIdProp } from './types/bridge';
/**
 * Returns send function that returns promises.
 *
 * @param sendEvent Send event function.
 * @param subscribe Subscribe event function.
 * @returns Send function which returns the Promise object.
 */
export declare function promisifySend(sendEvent: <K extends AnyRequestMethodName>(method: K, props?: RequestProps<K> & RequestIdProp) => void, subscribe: (fn: VKBridgeSubscribeHandler) => void): <K extends "VKWebAppInit" | "VKWebAppAddToCommunity" | "VKWebAppAddToHomeScreen" | "VKWebAppAddToHomeScreenInfo" | "VKWebAppAllowMessagesFromGroup" | "VKWebAppAllowNotifications" | "OKWebAppCallAPIMethod" | "VKWebAppCallAPIMethod" | "VKWebAppCopyText" | "VKWebAppDownloadFile" | "VKWebAppGetAuthToken" | "VKWebAppClose" | "VKWebAppOpenApp" | "VKWebAppDenyNotifications" | "VKWebAppFlashGetInfo" | "VKWebAppFlashSetLevel" | "VKWebAppGetClientVersion" | "VKWebAppGetCommunityToken" | "VKWebAppAudioPause" | "VKWebAppGetEmail" | "VKWebAppGetFriends" | "VKWebAppGetGeodata" | "VKWebAppGetPersonalCard" | "VKWebAppGetPhoneNumber" | "VKWebAppGetUserInfo" | "VKWebAppJoinGroup" | "VKWebAppLeaveGroup" | "VKWebAppAddToMenu" | "VKWebAppOpenCodeReader" | "VKWebAppOpenContacts" | "VKWebAppOpenPayForm" | "VKWebAppOpenQR" | "VKWebAppResizeWindow" | "VKWebAppScroll" | "VKWebAppSendToClient" | "VKWebAppSetLocation" | "VKWebAppSetViewSettings" | "VKWebAppShare" | "VKWebAppShowCommunityWidgetPreviewBox" | "VKWebAppShowImages" | "VKWebAppShowInviteBox" | "VKWebAppShowLeaderBoardBox" | "VKWebAppShowMessageBox" | "VKWebAppShowNativeAds" | "VKWebAppShowOrderBox" | "VKWebAppShowRequestBox" | "VKWebAppShowWallPostBox" | "VKWebAppOpenWallPost" | "VKWebAppStorageGet" | "VKWebAppStorageGetKeys" | "VKWebAppStorageSet" | "VKWebAppTapticImpactOccurred" | "VKWebAppTapticNotificationOccurred" | "VKWebAppTapticSelectionChanged" | "VKWebAppAddToFavorites" | "VKWebAppSendPayload" | "VKWebAppDisableSwipeBack" | "VKWebAppEnableSwipeBack" | "VKWebAppSetSwipeSettings" | "VKWebAppShowStoryBox" | "VKWebAppAccelerometerStart" | "VKWebAppAccelerometerStop" | "VKWebAppGyroscopeStart" | "VKWebAppGyroscopeStop" | "VKWebAppDeviceMotionStart" | "VKWebAppDeviceMotionStop" | "VKWebAppSubscribeStoryApp" | "VKWebAppGetGroupInfo" | "VKWebAppLibverifyRequest" | "VKWebAppLibverifyCheck" | "VKWebAppRetargetingPixel" | "VKWebAppCheckAllowedScopes">(method: K, props?: import(".").RequestPropsMap[K] & RequestIdProp) => Promise<K extends "VKWebAppInit" | "VKWebAppAddToCommunity" | "VKWebAppAddToHomeScreen" | "VKWebAppAddToHomeScreenInfo" | "VKWebAppAllowMessagesFromGroup" | "VKWebAppAllowNotifications" | "OKWebAppCallAPIMethod" | "VKWebAppCallAPIMethod" | "VKWebAppCopyText" | "VKWebAppDownloadFile" | "VKWebAppGetAuthToken" | "VKWebAppClose" | "VKWebAppOpenApp" | "VKWebAppDenyNotifications" | "VKWebAppFlashGetInfo" | "VKWebAppFlashSetLevel" | "VKWebAppGetClientVersion" | "VKWebAppGetCommunityToken" | "VKWebAppAudioPause" | "VKWebAppGetEmail" | "VKWebAppGetFriends" | "VKWebAppGetGeodata" | "VKWebAppGetPersonalCard" | "VKWebAppGetPhoneNumber" | "VKWebAppGetUserInfo" | "VKWebAppJoinGroup" | "VKWebAppLeaveGroup" | "VKWebAppAddToMenu" | "VKWebAppOpenCodeReader" | "VKWebAppOpenContacts" | "VKWebAppOpenPayForm" | "VKWebAppOpenQR" | "VKWebAppResizeWindow" | "VKWebAppScroll" | "VKWebAppSendToClient" | "VKWebAppSetLocation" | "VKWebAppSetViewSettings" | "VKWebAppShare" | "VKWebAppShowCommunityWidgetPreviewBox" | "VKWebAppShowImages" | "VKWebAppShowInviteBox" | "VKWebAppShowLeaderBoardBox" | "VKWebAppShowMessageBox" | "VKWebAppShowNativeAds" | "VKWebAppShowOrderBox" | "VKWebAppShowRequestBox" | "VKWebAppShowWallPostBox" | "VKWebAppOpenWallPost" | "VKWebAppStorageGet" | "VKWebAppStorageGetKeys" | "VKWebAppStorageSet" | "VKWebAppTapticImpactOccurred" | "VKWebAppTapticNotificationOccurred" | "VKWebAppTapticSelectionChanged" | "VKWebAppAddToFavorites" | "VKWebAppSendPayload" | "VKWebAppDisableSwipeBack" | "VKWebAppEnableSwipeBack" | "VKWebAppSetSwipeSettings" | "VKWebAppShowStoryBox" | "VKWebAppAccelerometerStart" | "VKWebAppAccelerometerStop" | "VKWebAppGyroscopeStart" | "VKWebAppGyroscopeStop" | "VKWebAppDeviceMotionStart" | "VKWebAppDeviceMotionStop" | "VKWebAppSubscribeStoryApp" | "VKWebAppGetGroupInfo" | "VKWebAppRetargetingPixel" | "VKWebAppCheckAllowedScopes" | "VKWebAppAudioPaused" | "VKWebAppAudioStopped" | "VKWebAppAudioTrackChanged" | "VKWebAppAudioUnpaused" | "VKWebAppInitAds" | "VKWebAppLoadAds" | "VKWebAppUpdateConfig" | "VKWebAppUpdateInsets" | "VKWebAppViewHide" | "VKWebAppViewRestore" | "VKWebAppAccelerometerChanged" | "VKWebAppGyroscopeChanged" | "VKWebAppDeviceMotionChanged" | "VKWebAppLocationChanged" | "VKWebAppLibverifyOnConfirmed" | "VKWebAppLibverifyOnFailed" ? import(".").ReceiveDataMap[K] : void>;
