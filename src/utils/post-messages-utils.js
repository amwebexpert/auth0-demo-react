export const postMessageWebView = (type, data) => {
  if (window && window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
    return true;
  } else {
    console.log(`ReactNativeWebView not available for sending [${type}] message`);
  }

  return false;
};
