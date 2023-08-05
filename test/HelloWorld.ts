import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("HELLO WORLD", function () {
  it("SHOULD GET THE HELLO WORLD", async function () {
    //1. setup
    //2. delploy our contract
    //3. call our contract to test
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("Hello, World");
  });
});
