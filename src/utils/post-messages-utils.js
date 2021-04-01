export const postMessageToWebView = async (type, data) => {
  if (window && window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
    return true;
  }

  console.log(`ReactNativeWebView not available for sending [${type}] message`);
  return false;
};

export const registerGlobalMessagesListener = () => {
  console.log('Registering our messages handler globally');
  window.addEventListener('message', handleMessage);
}

async function handleMessage(message) {
  alert(`SPA received a message: \n${message}`);

  const { type, data } = message;
  switch (type) {
    case 'getValidAccessToken':
      const domain = "amwebexpert.us.auth0.com";
      const accessToken = await window.getValidAccessToken({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });
      const data = {type: `freshAccessToken ${accessToken.substring(0, 5)}...`, data: accessToken};
      await postMessageToWebView('accessTokenRetrieved', data);
    break;
  
    default:
      break;
  }
}
