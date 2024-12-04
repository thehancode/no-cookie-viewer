// Test function
function runTests() {
  console.log("Running tests")
  const testCases = [
    {
      input: "https://www.youtube.com/watch?v=7Pq-S557XQU",
      expected: "7Pq-S557XQU",
    },
    {
      input: "https://youtube.com/shorts/gOmVP1Esfbo?si=sAWXUPYS7Zk1ZxBA",
      expected: "gOmVP1Esfbo",
    },
    {
      input: "https://youtu.be/2hj9MdWExDQ?si=zRa_ZgeinqH6lqtS",
      expected: "2hj9MdWExDQ",
    },
    {
      input: "https://www.youtube.com/watch?v=yutsIpLK2Rs?si=sAWXUPYS7Zk1ZxBA",
      expected: "yutsIpLK2Rs",
    },
    {
      input: "https://www.youtube.com/watch?app=desktop&v=Sh4glUM2Uc4&t=127s",
      expected: "Sh4glUM2Uc4",
    },
  ];

  describe('getYouTubeVideoCode', function() {
    testCases.forEach(function(testCase) {
      const actualCode = getYouTubeVideoCode(testCase.input)
      if (testCase.expected === null) {
        assert.isNull(actualCode, `Expected null for URL: ${testCase.input}`);
      } else {
        assert.equal(actualCode, testCase.expected, `Expected "${testCase.expected}" for URL: ${testCase.url}`);
      }
    });
  });
}

runTests()
