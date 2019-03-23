"use strict";

import Web3 from 'web3'
import axios from 'axios'

export function compileContract (code, fileName = 'test.sol') {
  let web3 = new Web3(window.web3.currentProvider);

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
    console.log(response);
    return response.data;
  })
}


