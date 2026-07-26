## Known Issues

React Native 0.85.3 currently depends on
foojay-resolver-convention 0.5.0.

A patch-package patch upgrades it to 1.0.0 until the upstream fix is released.

                   app (Expo Router Pages)
                         │
                         ▼
        contexts ─────── hooks
             │             │
             └──────┬──────┘
                    ▼
                services
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
         api            integrations
          │                   │
          └─────────┬─────────┘
                    ▼
         Backend / Firebase / RevenueCat


Each layer may depend only on the layer immediately below it.


login.tsx
      │
      ▼
authService.login()
      │
      ▼
firebaseAuth.signIn()
      │
      ▼
Firebase SDK