diff --git a/exercises/1_getting_startet/solution/solution.js b/exercises/1_getting_startet/solution/solution.js
deleted file mode 100644
index 86a01dd..0000000
--- a/exercises/1_getting_startet/solution/solution.js
+++ /dev/null
@@ -1,7 +0,0 @@
-var _ = require("lodash");
-
-var filterwhere = function(item){
-    return _.where(item, {active: true});
-};
-
-module.exports = filterwhere;
\ No newline at end of file
