export default {
    transform: {
      "^.+\\.js$": "babel-jest"
    },
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.js"], // ✅ Only look in __tests__ folder
  };
  