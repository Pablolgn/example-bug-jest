module.exports = {
  rootDir: '../',
  collectCoverageFrom: ['src/**/*.{js,ts,vue}', '!src/**/*.d.ts'],
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.{js,ts}',
    '<rootDir>/tests/unit/**/*.spec.{js,ts}'
  ],
  transform: {
    '.*\\.vue$': '@vue/vue3-jest',
    '.*\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@oruga-ui)'],
  testEnvironment: 'jsdom',

  // Stop after 10 failed tests
  bail: 10,
  globals: {
    'ts-jest': {
      tsconfig: './tests/tsconfig.json'
    },
    'vue3-jest': {
      tsConfig: './tests/tsconfig.json',
      experimentalCSSCompile: false,
      pug: {
        // To not fail when using `v-slot:header` (`v-slot:header=""` could be used too)
        doctype: 'html'
      }
    }
  }
}
