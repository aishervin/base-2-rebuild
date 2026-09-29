# Base 2

This repository has two separate tasks:

- The Android app opens the city-services portal in a WebView.
- The manual `Download and decompile APK` workflow downloads the APK and decompiles it with Apktool.

## Download and decompile

Open GitHub Actions and run `Download and decompile APK`. When it finishes, download the `apk-and-decompiled-source` artifact. It contains the original APK and the complete decompiled folder. The artifact expires after 7 days; outputs are not committed to Git.

## Build the Android app

Run `Build Android APK` from GitHub Actions, or push to `main`. The resulting APK is available as the `base-2-rebuild-apk` artifact.
