const RootError = ({ error }: any) => {
  const instructions = () => {
    switch (error.message) {
      case "CLIENT_FIREBASE_PROJECT_ID":
        return (
          <div>
            <div>
              <span className="font-bold pr-2">CLIENT_FIREBASE_PROJECT_ID</span>
              environment variable is missing or invalid!
            </div>
            <h1 className="text-xl mt-6 font-bold underline">Instructions</h1>
            <ol className="flex flex-col gap-3 list-decimal">
              <li>
                <div>
                  The <span className="underline">project ID</span> is displayed
                  in the project settings at
                  <a
                    className="text-primary underline pl-2"
                    target="_blank"
                    rel="noreferrer"
                    href="https://console.firebase.google.com/"
                  >
                    Firebase Console
                  </a>
                </div>
                <div className="pt-2">
                  <img
                    src="/assets/instructions/find-firebase-credentials.png"
                    alt="Find firebase credentials"
                  />
                </div>
              </li>
              <li>
                <div className="text-start">
                  <div>
                    (Vercel deployment)
                    <a
                      className="text-primary underline pl-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://vercel.com/docs/concepts/projects/environment-variables#Environments"
                    >
                      how to set environment variable
                    </a>
                    <div>
                      <img
                        src="/assets/instructions/set-env-project-id.png"
                        alt="Vercel set project id"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>(Manual deployment / Local usage)</div>
                  <div>Create a .env file in the root of your project:</div>
                  <code>
                    CLIENT_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID_GOES_HERE
                  </code>
                </div>
              </li>
              <li>Re-deploy / Restart your app</li>
            </ol>
          </div>
        );
      case "CLIENT_FIREBASE_PROJECT_WEB_API_KEY":
        return (
          <div>
            <div>
              <span className="font-bold pr-2">
                CLIENT_FIREBASE_PROJECT_WEB_API_KEY
              </span>
              environment variable is missing or invalid!
            </div>
            <h1 className="text-xl mt-6 font-bold underline">Instructions</h1>
            <ol className="flex flex-col gap-3 list-decimal">
              <li>
                <div>
                  The <span className="underline">Web API Key</span> is
                  displayed in the project settings at
                  <a
                    className="text-primary underline pl-2"
                    target="_blank"
                    rel="noreferrer"
                    href="https://console.firebase.google.com/"
                  >
                    Firebase Console
                  </a>
                </div>
                <div className="pt-2">
                  <img
                    src="/assets/instructions/find-firebase-credentials.png"
                    alt="Find firebase credentials"
                  />
                </div>
              </li>
              <li>
                <div className="text-start">
                  <div>
                    (Vercel deployment)
                    <a
                      className="text-primary underline pl-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://vercel.com/docs/concepts/projects/environment-variables#Environments"
                    >
                      how to set environment variable
                    </a>
                    <div className="pt-2">
                      <img
                        src="/assets/instructions/set-env-web-api-key.png"
                        alt="Vercel set firebase web api key"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>(Manual deployment / Local usage)</div>
                  <div>Create a .env file in the root of your project:</div>
                  <code>
                    CLIENT_FIREBASE_PROJECT_WEB_API_KEY=YOUR_API_KEY_GOES_HERE
                  </code>
                </div>
              </li>
              <li>Re-deploy / Restart your app</li>
            </ol>
          </div>
        );
      case "CLIENT_FIREBASE_AUTH_DOMAIN":
        return (
          <div>
            <div>
              <span className="font-bold pr-2">
                CLIENT_FIREBASE_AUTH_DOMAIN
              </span>
              environment variable is missing or invalid!
            </div>
            <h1 className="text-xl mt-6 font-bold underline">Instructions</h1>
            <ol className="flex flex-col gap-3 list-decimal">
              <li>
                <div>
                  The <span className="underline">Auth Domain</span> is
                  displayed in the project settings at
                  <a
                    className="text-primary underline pl-2"
                    target="_blank"
                    rel="noreferrer"
                    href="https://console.firebase.google.com/"
                  >
                    Firebase Console
                  </a>
                </div>
                <div className="pt-2">
                  <img
                    src="/assets/instructions/find-firebase-credentials.png"
                    alt="Find firebase credentials"
                  />
                </div>
              </li>
              <li>
                <div className="text-start">
                  <div>
                    (Vercel deployment)
                    <a
                      className="text-primary underline pl-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://vercel.com/docs/concepts/projects/environment-variables#Environments"
                    >
                      how to set environment variable
                    </a>
                    <div className="pt-2">
                      <img
                        src="/assets/instructions/set-env-auth-domain.png"
                        alt="Vercel set firebase auth domain"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>(Manual deployment / Local usage)</div>
                  <div>Create a .env file in the root of your project:</div>
                  <code>
                    CLIENT_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN_GOES_HERE
                  </code>
                </div>
              </li>
              <li>Re-deploy / Restart your app</li>
            </ol>
          </div>
        );
      case "SERVER_FIREBASE_SERVICE_ACCOUNT":
        return (
          <div>
            <div>
              <span className="font-bold pr-2">
                SERVER_FIREBASE_SERVICE_ACCOUNT
              </span>
              environment variable is missing or invalid!
            </div>
            <h1 className="text-xl mt-6 font-bold underline">Instructions</h1>
            <ol className="flex flex-col gap-3 list-decimal">
              <li>
                <div>
                  The <span className="underline">Service Account</span> can be
                  generated in the project settings' service account tab at
                  <a
                    className="text-primary underline pl-2"
                    target="_blank"
                    rel="noreferrer"
                    href="https://console.firebase.google.com/"
                  >
                    Firebase Console
                  </a>
                </div>
                <div className="pt-2">
                  <img
                    src="/assets/instructions/find-service-account-key.png"
                    alt="Find firebase credentials"
                  />
                </div>
              </li>
              <li>
                <div className="text-start">
                  <div>
                    (Vercel deployment)
                    <a
                      className="text-primary underline pl-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://vercel.com/docs/concepts/projects/environment-variables#Environments"
                    >
                      how to set environment variable
                    </a>
                    <div className="pt-2">
                      <img
                        src="/assets/instructions/set-env-service-account.png"
                        alt="Vercel set firebase auth domain"
                      />
                    </div>
                    <div className="pt-2">
                      You have to put your JSON data as a value
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>(Manual deployment / Local usage)</div>
                  <div>Create a .env file in the root of your project:</div>
                  <code>
                    SERVER_FIREBASE_SERVICE_ACCOUNT='YOUR_SERVICE_ACCOUNT_JSON_DATA_GOES_HERE'
                  </code>
                </div>
                <div className="pt-2">
                  You have to place single quatation marks both at the beginning
                  and the end of your your JSON data. So, you'll be able to use
                  multiline environment variable.
                </div>
              </li>
              <li>Re-deploy / Restart your app</li>
            </ol>
          </div>
        );
      case "SESSION_SECRET":
        return (
          <div>
            <div>
              <span className="font-bold pr-2">SESSION_SECRET</span>
              environment variable is missing!
            </div>
            <h1 className="text-xl mt-6 font-bold underline">Instructions</h1>
            <ol className="flex flex-col gap-3 list-decimal">
              <li>
                <div>
                  The secret is used to hash the session to prevent session
                  hijacking attacks.
                </div>
              </li>
              <li>
                <div className="text-start">
                  <div>
                    (Vercel deployment)
                    <a
                      className="text-primary underline pl-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://vercel.com/docs/concepts/projects/environment-variables#Environments"
                    >
                      how to set environment variable
                    </a>
                    <div className="pt-2">
                      <img
                        src="/assets/instructions/set-env-secret.png"
                        alt="Vercel set session secret"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>(Manual deployment / Local usage)</div>
                  <div>Create a .env file in the root of your project:</div>
                  <code>SESSION_SECRET=YOUR_SECRET_KEY_GOES_HERE</code>
                </div>
              </li>
              <li>Re-deploy / Restart your app</li>
            </ol>
          </div>
        );
      default:
        // TODO: add support links to Rowy community channels
        return error.message;
    }
  };

  return (
    <div>
      <div className="text-2xl text-red-600 font-bold underline">
        Runtime Error
      </div>
      <div className="py-2">{instructions()}</div>
    </div>
  );
};

export { RootError };
