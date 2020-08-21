module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
    ],
    coverageReporters: [
      "json-summary", 
      "text",
      "lcov"
    ]
}