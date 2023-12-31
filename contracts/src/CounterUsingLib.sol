// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {CounterLib} from './CounterLib.sol';

contract CounterUsingLib {
    uint256 public number = 0;
    
    event Transfer(address indexed from, address indexed to, uint256 value);

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number = CounterLib.increment(number);
    }
}
