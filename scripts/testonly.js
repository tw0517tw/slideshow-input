const argv = require('minimist')(process.argv.slice(2));
const spawn = require('child_process').spawn;

const mocha = process.platform === 'win32' ? 'mocha.cmd' : 'mocha';

const mochaOption = [
  '--compilers',
  'js:babel-register',
  '--require',
  'babel-polyfill',
  '--require',
  'scripts/mocha-bootload.js',
  'src/**/__tests__/**/*.spec.js',
  '--colors',
];

const watch = argv.w || argv.watch;
if (watch) {
  mochaOption.push('--watch');
}

const spawnOption = {
  stdio: 'inherit',
  env: {
    NODE_ENV: 'test',
    BABEL_DISABLE_CACHE: 1,
    PATH: process.env.PATH,
  },
};

const child = spawn(mocha, mochaOption, spawnOption);

child.on('exit', (code) => {
  process.exit(code);
});
