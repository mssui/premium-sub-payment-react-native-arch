## WIP - On Going with REACT Native👋

This is an [Expo](https://expo.dev) project with user authentication, different permission classes, subscription and payment features.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```



## Architecture

components
      ↓
contexts
      ↓
services
      ↓
integrations
      ↓
SDKs


### PR Title Rules

feat(button): create reusable button component

refactor(theme): introduce shared theme object

feat(theme): add light and dark palettes

refactor(api): move fetch client into api layer

fix(auth): handle expired Firebase token

### PR Branch Rules

feature/theme-provider
feature/api-layer
feature/react-query
feature/tour-list

fix/google-login
fix/login-crash

refactor/auth-service
refactor/button-component

docs/readme
docs/architecture


## Notes

| Status | Meaning                | UI Action                     |
| ------ | ---------------------- | ----------------------------- |
| 400    | Invalid request        | Show validation message       |
| 401    | Authentication expired | Log out / ask user to sign in |
| 403    | User has no permission | Show "Access denied"          |
| 404    | Resource missing       | Empty state / not found       |
| 409    | Conflict               | Inform the user               |
| 500    | Backend problem        | Generic error screen          |
