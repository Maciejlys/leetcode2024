const path = require("path");
const fs = require("fs");

const generateTests = (number) => {
  const boilerplate = `
    {
      args: [

      ],
      want: ,
    },
`;

  return boilerplate.repeat(number);
};

function generateBoilerplateFiles(input) {
  const [folderName, amoutOfTest] = input;
  const folderPath = path.join(__dirname, `src/${folderName}`);

  fs.mkdirSync(folderPath);

  const indexFileContent = `export default function testing(input) {
  // Your code here
}`;

  const testFilePath = path.join(folderPath, "index.test.ts");
  const testFileContent = `import { describe, expect, test } from 'vitest';
import testing from '.';
import { TestCases } from "../types/testCases";

describe('${folderName}', () => {
    const tests: TestCases<[], > = [
    ${generateTests(amoutOfTest || 1)}
    ];

    for (let t of tests) {
        test("should pass", () => {
            const result = testing(...t.args);
            expect(result).toStrictEqual(t.want);
        });
    }
});
});
`;

  const indexFilePath = path.join(folderPath, "index.ts");

  fs.writeFileSync(testFilePath, testFileContent, "utf8");
  fs.writeFileSync(indexFilePath, indexFileContent, "utf8");
}

generateBoilerplateFiles(process.argv.slice(2));
