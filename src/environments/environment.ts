// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAmPj-j0neByBI4Q6HpBWVZlypBjRbN-NA',
    authDomain: 'visitingbikaner.firebaseapp.com',
    databaseURL: 'https://visitingbikaner.firebaseio.com',
    projectId: 'visitingbikaner',
    storageBucket: 'visitingbikaner.appspot.com',
    messagingSenderId: '316193631522'
  }
};
