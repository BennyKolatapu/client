import { PublicClientApplication } from "@azure/msal-browser";
export const msalConfig = new PublicClientApplication({
    auth: {
        clientId: "8a91a717-6484-4d16-aaa7-9d9ea9ea8fb4",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000",
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case 0: // Error
                        console.error(message);
                        break;
                    case 1: // Warning
                        console.warn(message);
                        break;
                    case 2: // Info
                        console.info(message);
                        break;
                    case 3: // Verbose
                        console.debug(message);
                        break;
                }
            },
            piiLoggingEnabled: false,
            logLevel: 2, // Info level
        },
    },
});

