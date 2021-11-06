module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  automock: true,
  clearMocks: true,
  setupFilesAfterEnv: ["jest-extended/all", "dotenv/config"],
  moduleNameMapper: {
    "^@liquidationBot/(.*)$": "<rootDir>/src/liquidationBot/$1",
    "^@generated/(.*)$": "<rootDir>/src/generated/$1",
    "^@config$": "<rootDir>/src/config/config.ts",
  },
  unmockedModulePathPatterns: ["jest-extended", "dotenv", "lodash"],
};
