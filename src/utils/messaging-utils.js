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

async function handleMessage(event) {
  const { type, data } = event.data;

  if (type) {
    alert(`SPA received a message: \n${type}`);
  }

  switch (type) {
    case 'getValidAccessToken':
      const domain = "amwebexpert.us.auth0.com";
      const accessToken = await window.getValidAccessToken({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });
      const type = `freshAccessToken ${accessToken.substring(0, 5)}...`;
      await postMessageToWebView(type, accessToken);
    break;
  
    default:
      break;
  }
}
