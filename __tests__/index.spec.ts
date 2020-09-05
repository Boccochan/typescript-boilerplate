import helloWorld from "./../src/HelloWorld";

describe("helloWorld", () => {
  it("this is test", () => {
    const result = helloWorld();
    expect(result).toBeTruthy();
  });
});
