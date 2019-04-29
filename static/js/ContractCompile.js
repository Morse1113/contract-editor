"use strict";

import Web3 from 'web3'
import axios from 'axios'

export function compileContract (code, fileName = 'test.sol') {
  let source = {};
  source[fileName] = { content: code };
  let input = {
    language: 'Solidity',
    sources: source,
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  return axios.post('/api/compile', {
    input: JSON.stringify(input)
  }).then(response => {
    return response.data;
  })
}

export function deployContract(input) {
  let contractName = input.name;
  let compileValue = input.value;
  let web3 = new Web3(Web3.givenProvider);
  return web3.eth.getAccounts().then(value => {
    const account = value[0];
    if (account === undefined) {
      throw new Error('插件异常');
    }
    let contract = new web3.eth.Contract(compileValue.abi);
    let data = '0x' + compileValue.evm.bytecode.object;
    return contract.deploy({
      data: data,
      name: contractName
    }).send({
      from: account,
      gas: 0,
      gasPrice: '4700000'
    }, function (e, c) {
      console.log(c);
    });
  });
}


