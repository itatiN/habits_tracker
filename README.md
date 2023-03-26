# Habit Tracker
Application to control habits with functions of: <br>
- Create new habits and link days to them<br>
- View current habits<br>
- Mark if you completed the habit on the current day <br>

## To use
Unfortunately at the moment I still haven't posted on any website! <br> <br>
To use it you would have to download the code with the command `git clone github.com/itatiN/habits_tracker` <br>
Then change the baseURL code with your internal ip in [FrontEnd/web/src/lib/axios.ts](https://github.com/itatiN/habits_tracker/blob/main/FrontEnd/web/src/lib/axios. ts) <br>
Repeat the process at [FrontEnd/mobile/src/libs/axio.ts](https://github.com/itatiN/habits_tracker/blob/main/FrontEnd/mobile/src/libs/axios.ts) <br>
To find your internal IP just go to CMD for Windows and type the `ipconfig` command, your internal IP is the number in the IPv4 Address field <br>
If your system is Linux, just go to the terminal and type `ifconfig` <br>
Now open a terminal with the path /server and run `npm run dev` <br>
Repeat the process on /FrontEnd/web <br>
And to test the mobile go to /FrontEnd/mobile and use npx expo start <br>
Remembering that for mobile you will have to have an application called [Expo Go](https://expo.dev/client) <br>
Now just scan the QR code and the app will appear on your phone! <br>

## Technologies used
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TailWind](https://tailwindcss.com/)
- [NodeJS](https://nodejs.org/en/)
- [Fastify](https://www.fastify.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/client)


## Mobile view
https://user-images.githubusercontent.com/112434206/214429062-33b853b6-45b8-4c70-a0bd-893b33b02ba4.mp4

## Web view
https://user-images.githubusercontent.com/112434206/214429046-cd13a416-6a7f-4360-8917-6ff96d6edac7.mp4
