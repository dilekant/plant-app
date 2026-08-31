# PlantApp

A mobile application focused on plant care and identification, developed with React Native (New Architecture). The app guides users through an onboarding/paywall flow and provides access to plant care content through the main tabs.

## Table of Contents

* [Features](#features)
* [Technology Stack](#technology-stack)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Running the App](#running-the-app)
* [NPM Scripts](#npm-scripts)
* [Testing](#testing)
* [Code Quality](#code-quality)

## Features

* **Onboarding flow**: A horizontally paginated `FlatList`-based carousel (`OnboardingPageOne`, `OnboardingPageTwo`, `PaywallPage`) guides users through the introductory screens. It includes page indicators (`PaginationDots`) and an animated background/footer transition based on the scroll position using `react-native-reanimated`.
* **Paywall screen**: A premium purchase screen featuring feature cards (`PaywallFeatureCard`), subscription plan selection (`PaywallPlanOption`), and a legal text footer (`PaywallFooter`).
* **Welcome screen**: Entry screen that directs users to the onboarding flow.
* **Main tabs (Bottom Tabs)**: Navigation between `Home`, `Diagnose`, `BarcodeScanning`, `MyGarden`, and `Profile` tabs.
* **Home screen**: Questions (`getQuestions`) and categories (`getCategories`) are fetched from the remote API using RTK Query. The screen includes a search input, premium card, horizontal question list, and a two-column category list.
* **Diagnose, BarcodeScanning, MyGarden, Profile**: Navigation structure is implemented, while the content of these screens is currently under development and represented by placeholder screens.
* **Persistent state**: The onboarding completion state is stored on the device using `redux-persist` and `AsyncStorage`, allowing the application to resume from the appropriate state when launched.
* **Shared component library**: Reusable, theme-aware components such as `Button`, `Image`, `PremiumCard`, `Screen`, `SearchInput`, and `Text`.
* **Theme system**: Centralized color palette and responsive sizing based on screen width using `styled-components` and `normalizeSize`.

## Technology Stack

| Category              | Technology                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core                  | React 19.2.3, React Native 0.87.1, TypeScript                                                                                                         |
| Navigation            | `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`, `react-native-screens`, `react-native-gesture-handler` |
| State Management      | `@reduxjs/toolkit` (including RTK Query), `react-redux`, `redux-persist`, `@react-native-async-storage/async-storage`                                 |
| Styling               | `styled-components`                                                                                                                                   |
| Animation             | `react-native-reanimated`, `react-native-worklets`                                                                                                    |
| Graphics / SVG        | `react-native-svg`, `react-native-svg-transformer`                                                                                                    |
| Layout Utilities      | `react-native-safe-area-context`                                                                                                                      |
| Environment Variables | `react-native-dotenv`                                                                                                                                 |
| Testing               | `jest`, `react-test-renderer`, `@react-native/jest-preset`                                                                                            |
| Code Quality          | `eslint`, `prettier`, `@typescript-eslint`                                                                                                            |

## Project Structure

```text
src/
  assets/        # Fonts, images, and SVG icons
  components/    # Button, Image, PremiumCard, Screen, SearchInput, Text
  navigation/    # RootNavigator, OnboardingNavigator, MainNavigator (bottom tabs)
  screens/
    Onboarding/  # Onboarding carousel, pages, and sub-components
    Welcome/     # Welcome screen
    app/         # Home, Diagnose, BarcodeScanning, MyGarden, Profile
  store/         # Redux store and onboardingSlice
  theme/         # Colors and responsive sizing (normalizeSize)
android/         # Native Android project
ios/             # Native iOS project (CocoaPods)
```

## Installation

> **Note**: Before getting started, make sure you have completed the [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment) guide.

```sh
npm install
```

For iOS, CocoaPods dependencies need to be installed (run this during the initial setup or after native dependency updates):

```sh
bundle install
bundle exec pod install
```

## Environment Variables

The project uses `react-native-dotenv` to read the `BASE_URL` variable from the `.env` file through the `@env` module.

Create a `.env` file in the project root and define the API base URL:

```env
BASE_URL=https://api.example.com
```

## Running the App

Start the Metro development server:

```sh
npm start
```

Then, in a separate terminal, build and run the application:

```sh
npm run android
# or
npm run ios
```

## NPM Scripts

| Script                    | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `npm start`               | Starts the Metro bundler                           |
| `npm run android`         | Builds and runs the app on Android                 |
| `npm run ios`             | Builds and runs the app on iOS                     |
| `npm test`                | Runs all Jest test suites                          |
| `npm run test:components` | Runs only the `src/components` test suite          |
| `npm run test:screens`    | Runs only the `src/screens` test suite             |
| `npm run lint`            | Runs static analysis with ESLint                   |
| `npm run lint:fix`        | Automatically fixes ESLint issues                  |
| `npm run format`          | Formats all files using Prettier                   |
| `npm run format:check`    | Checks Prettier formatting without modifying files |

## Testing

Tests are written using Jest and `react-test-renderer`:

* `__tests__/App.test.tsx`: Verifies that the root application component renders without errors.
* `src/components/components.test.tsx`: Tests rendering and interaction behavior of shared components.
* `src/screens/screens.test.tsx`: Tests screen rendering, navigation, and basic interactions.

```sh
npm test
```

## Code Quality

Code style is maintained and checked using ESLint (`@react-native/eslint-config`, `@typescript-eslint`) and Prettier:

```sh
npm run lint
npm run format:check
```
