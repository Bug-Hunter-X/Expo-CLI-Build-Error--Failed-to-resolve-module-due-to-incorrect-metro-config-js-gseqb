# Expo CLI Build Error: Misconfigured metro.config.js

This repository demonstrates a common yet easily overlooked error when building Expo projects using the Expo CLI. The error manifests as a generic 'Failed to resolve module' message, often failing to provide specific details about the root cause.

The underlying issue lies within the `metro.config.js` file, specifically within the `resolver.sourceExts` array. An incorrect path or a typo within this array can lead to the build process failing.

**Steps to Reproduce:**

1. Clone this repository.
2. Attempt to build the project using `expo build:android` (or `expo build:ios`).
3. Observe the error.

**Solution:**

Refer to the `metro.config.fixed.js` file for the correct configuration. The key fix is ensuring accurate paths in `resolver.sourceExts`. Double-check for typos and verify that the specified extensions or directories exist within your project.

This error highlights the importance of careful configuration management. In larger projects, automated path validation might be beneficial in preventing such issues.