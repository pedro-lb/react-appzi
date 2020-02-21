const DEFAULT_SCRIPT_ID = 'react-appzi';

/**
 * Provides the Appzi script to inject.
 */
const getAppziScriptSrc = (token: string) => `https://w.appzi.io/bootstrap/bundle.js?token=${token}`;

/**
 * Initializes Appzi tracking.
 */
const initialize = (token: string) => {
  if (!token) {
    throw new Error('You need to provide your Appzi Token.');
  }

  if (!document) {
    return;
  }

  const hasScript = !!document.getElementById(DEFAULT_SCRIPT_ID);

  if (hasScript) {
    return;
  }

  const script = document.createElement('script');

  script.src = getAppziScriptSrc(token);
  script.id = DEFAULT_SCRIPT_ID;
  script.async = true;

  document.body.appendChild(script);
};

/**
 * Object for manipulating Appzi.
 */
const ReactAppzi = {
  initialize,
};

export default ReactAppzi;
