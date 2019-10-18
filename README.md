# PREREQUISIT

## GENERAL

- you need nvm installed, and to use `nvm use` in each folder to get correct version of node
- you need `yarn` installed

## ANDROID

- Android Studio v3.2.1
- Java 8 so u need to `brew cask uninstall java && brew tap caskroom/versions && brew cask install java8`

## IOS

- Xcode v10
- We are using CocoaPod so u need to `brew install cocoapods`. And we'll be using the `.xcworkspace` in xcode
- After installing a new library using cocoapods, you need to run the `pod install` command in the IOS folder

# INSTALL

- launch `yarn install` to install dependencies
- populate your `.env` from your `.env.dist`

# Getting started

- `react-native run-android` for android (you need a running emulator)
- `react-native run-ios` for ios
- to launch in story-book mode, you need to have `STORY_BOOK_APP=true` sert up in yopur `.env` file.

# DEBUGGING

Debuging is enabled on Visual Studio Code (please install the `react-native` extension)
Please see debuging scripts (run-android, run-ios, attaching to metro bundler) and don't forget to `Start remote debugging` on your target phone

# TROUBLESHOOTING

## ENVIRONMENT VARIABLE

### MY ENV VARIABLES ARE NOT TAKEN INTO ACCOUNT WHEN I REFRESH METRO BUNDLER

The environment variables in `.env` file are read during build time. Restarting your metro bundler won't upadte new environment variables.

### I GET `Cycle in dependencies between targets 'Lottie_iOS' and 'LottieLibraryIOS'; building could produce unreliable results.`in XCODE

Just clean the project (cmd + K) and build again

## STORYBOOK

If you create a new story file (index.stories.tsx), you need to run `yarn prestorybook` to update the storyLoader.js file.

### GETTING "OBJECTS ARE NOT VALID AS A REACT CHILD..."

If you are on android without remote debugging: it's a known issue and couldn't fix it... Please turn on remote debugging and it should be okay

### SCREEN freezes when i click on a button

If you are on ios without remote debugging: it's a known issue and couldn't fix it... Please turn on remote debugging and it should be okay

## SVG

You can transform your svg to a react-native typescript component with `yarn svg.transform my-svg.svg > my-svg.tsx`.
