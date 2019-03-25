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

export function deployContract(output, fileName) {
  let web3 = new Web3(Web3.givenProvider);
  web3.eth.getAccounts().then(value => {
    // let bytecode = output.contracts[fileName].C.evm.bytecode;
    // console.log(bytecode);
    // const account = value[0];
    console.log(output);


  });
}


