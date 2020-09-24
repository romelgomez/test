echo "NOTES: 
- Setting environment to local testing!
- Run this script from the root path of this project!"

export GOOGLE_APPLICATION_CREDENTIALS="$PWD/.key.json"
echo "[GOOGLE_APPLICATION_CREDENTIALS]: $GOOGLE_APPLICATION_CREDENTIALS" 
echo "[GOOGLE_APPLICATION_CREDENTIALS]: "
cat .key.json

firebase functions:config:get > .runtimeconfig.json
echo "[runtimeconfig.json]: "
cat .runtimeconfig.json
