cd "C:/sdk/tools"
dir ..
./emulator -list-avds
./emulator -avd small_hdpi &
cd "D:\react_native\react-native-redux\Redux_structure"
npm start &
code . &
echo Press Enter...
read