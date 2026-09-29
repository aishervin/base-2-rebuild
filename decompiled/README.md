# APK Decompilation

This folder documents the APK decompilation artifact distributed with this repository.

## APK identity

- App label: سامانه مرکزی صدور بارنامه شهری
- Application ID: `com.baarnameshahri`
- App version: `1.7.93` (version code `30`)
- Minimum Android SDK: `23`
- Target Android SDK: `34`
- Build tools used for decoding: Apktool `3.0.3`
- Hermes bundle output: `hermes-dec` `0.1.7`

## Archive layout

The `base_2_decompiled.zip` archive contains the Apktool-decoded tree (`AndroidManifest.xml`,
`res/`, `assets/`, `lib/`, and `smali*/`) plus a Hermes decompilation under `recovered/`.
The original Hermes bytecode bundle is retained under `assets/`.

## Important limitation

The Hermes output is reconstructed pseudo-JavaScript, not the original React Native source tree.
Original component boundaries, source filenames, comments, and some names are not recoverable from
the compiled APK. Smali is also a low-level disassembly of Android bytecode, not the original Java
or Kotlin source. This archive is for inspection and reference; it is not a directly buildable
replacement for the original project.

The APK itself, login details, cookies, OTPs, and signing keys are not included.
