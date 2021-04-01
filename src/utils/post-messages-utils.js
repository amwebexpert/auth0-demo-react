export const postMessageToWebView = (type, data) => {
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

function handleMessage(message) {
  alert(`SPA received a message: \n${message}`);

  // const { type, data } = message;
  // Switch case here on message `type`...
}
