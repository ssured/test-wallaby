module.exports = function(w) {
  return {
    files: ['jest.config.js', 'tsconfig.json', 'src/**/*.ts'],

    tests: ['test/**/*test.ts'],

    env: {
      type: 'node',
      runner: 'node',
    },

    // compilers: {
    //   '**/*.ts': w.compilers.typeScript({
    //     isolatedModules: true,
    //     module: 'commonjs',
    //   }),
    // },

    testFramework: 'jest',
    // setup: function(wallaby) {
    //   var jestConfig = require('./jest.config.js');
    //   /* for example:
    //    * jestConfig.globals = { "__DEV__": true }; */
    //   wallaby.testFramework.configure(jestConfig);
    // },
  };
};
