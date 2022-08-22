module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "config/**/*.{js,jsx,ts,tsx}",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
    __PATH_PREFIX__: ``,
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "<rootDir>/__mocks__/*",
    "node_modules",
    "\\.tmp",
    "\\.cache",
    "<rootDir>.*/public",
    "<rootDir>/dist/*",
  ],
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).ts"],
  roots: ["<rootDir>/src/", "<rootDir>/config/"],
  testEnvironment: "node",
};
