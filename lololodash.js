diff --git a/lodash_workshop.js b/lodash_workshop.js
deleted file mode 100644
index bb0553f..0000000
--- a/lodash_workshop.js
+++ /dev/null
@@ -1,18 +0,0 @@
-#!/usr/bin/env node
-'use strict';
-
-var workshopper = require('workshopper'),
-    path        = require('path');
-
-function fpath (f) {
-    return path.join(__dirname, f);
-}
-
-workshopper({
-    name        : 'lololodash',
-    title       : 'Lololodash - learn LoDash',
-    subtitle    : 'Learn Lo-Dash',
-    appDir      : __dirname,
-    menuItems   : [],
-    exerciseDir : fpath('./exercises/')
-});
\ No newline at end of file
