export function exampleCase() {
  let examples = {
    "genesis.sol": "pragma solidity ^0.4.19;\n" +
      "/*\n" +
      "Name: Genesis\n" +
      "Dev: White Matrix co,. Ltd\n" +
      "*/\n" +
      "\n" +
      "library SafeMath {\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Multiplies two numbers, throws on overflow.\n" +
      "    */\n" +
      "    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        if (a == 0) {\n" +
      "            return 0;\n" +
      "        }\n" +
      "        uint256 c = a * b;\n" +
      "        assert(c / a == b);\n" +
      "        return c;\n" +
      "    }\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Integer division of two numbers, truncating the quotient.\n" +
      "    */\n" +
      "    function div(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        // assert(b > 0); // Solidity automatically throws when dividing by 0\n" +
      "        uint256 c = a / b;\n" +
      "        // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n" +
      "        return c;\n" +
      "    }\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n" +
      "    */\n" +
      "    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        assert(b <= a);\n" +
      "        return a - b;\n" +
      "    }\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Adds two numbers, throws on overflow.\n" +
      "    */\n" +
      "    function add(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        uint256 c = a + b;\n" +
      "        assert(c >= a);\n" +
      "        return c;\n" +
      "    }\n" +
      "}\n" +
      "\n" +
      "contract Genesis {\n" +
      "    using SafeMath for uint256;\n" +
      "\n" +
      "    //mutabilityType\n" +
      "    //Genesis parameter\n" +
      "    uint public characterNo = 3;\n" +
      "    uint public version = 1;\n" +
      "\n" +
      "    struct Character {\n" +
      "        string name;\n" +
      "        uint hp;\n" +
      "        uint mp;\n" +
      "        uint str;\n" +
      "        uint intelli;\n" +
      "        uint san;\n" +
      "        uint luck;\n" +
      "        uint charm;\n" +
      "        uint mt;\n" +
      "        string optionalAttrs;\n" +
      "    }\n" +
      "\n" +
      "    Character[] characters;\n" +
      "\n" +
      "    function Genesis() public {\n" +
      "        characters.push(Character(\"Adam0\", 100, 100, 50, 50, 50, 50, 50, 0, \"\"));\n" +
      "        characters.push(Character(\"Adam1\", 100, 100, 50, 50, 50, 50, 50, 1, \"\"));\n" +
      "        characters.push(Character(\"Adam2\", 100, 100, 50, 50, 50, 50, 50, 2, \"\"));\n" +
      "    }\n" +
      "\n" +
      "    function getCharacterNo() view returns (uint _characterNo){\n" +
      "        return characterNo;\n" +
      "    }\n" +
      "\n" +
      "    function setCharacterAttributes(uint _id, uint _hp, uint _mp, uint _str, uint _intelli, uint _san, uint _luck, uint _charm, string _optionalAttrs){\n" +
      "        //require check\n" +
      "        require(characters[_id].mt == 2);\n" +
      "        //read directly from mem\n" +
      "        Character affectedCharacter = characters[_id];\n" +
      "\n" +
      "        affectedCharacter.hp = _hp;\n" +
      "        affectedCharacter.mp = _mp;\n" +
      "        affectedCharacter.str = _str;\n" +
      "        affectedCharacter.intelli = _intelli;\n" +
      "        affectedCharacter.san = _san;\n" +
      "        affectedCharacter.luck = _luck;\n" +
      "        affectedCharacter.charm = _charm;\n" +
      "        affectedCharacter.optionalAttrs = _optionalAttrs;\n" +
      "\n" +
      "        //need rewrite as a function\n" +
      "        if (affectedCharacter.hp < 0) {\n" +
      "            affectedCharacter.hp = 0;\n" +
      "        } else if (affectedCharacter.hp > 100) {\n" +
      "            affectedCharacter.hp = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.mp < 0) {\n" +
      "            affectedCharacter.mp = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.mp > 100) {\n" +
      "            affectedCharacter.mp = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.str < 0) {\n" +
      "            affectedCharacter.str = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.str > 100) {\n" +
      "            affectedCharacter.str = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.intelli < 0) {\n" +
      "            affectedCharacter.intelli = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.intelli > 100) {\n" +
      "            affectedCharacter.intelli = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.san < 0) {\n" +
      "            affectedCharacter.san = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.san > 100) {\n" +
      "            affectedCharacter.san = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.luck < 0) {\n" +
      "            affectedCharacter.luck = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.luck > 100) {\n" +
      "            affectedCharacter.luck = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.charm < 0) {\n" +
      "            affectedCharacter.charm = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.charm > 100) {\n" +
      "            affectedCharacter.charm = 100;\n" +
      "        }\n" +
      "\n" +
      "        characters[_id] = affectedCharacter;\n" +
      "    }\n" +
      "\n" +
      "    function affectCharacter(uint _id, uint isPositiveEffect){\n" +
      "        require(characters[_id].mt != 0);\n" +
      "        Character affectedCharacter = characters[_id];\n" +
      "        if (isPositiveEffect == 0) {\n" +
      "            affectedCharacter.hp = affectedCharacter.hp - getRand();\n" +
      "            affectedCharacter.mp = affectedCharacter.mp - getRand();\n" +
      "            affectedCharacter.str = affectedCharacter.str - getRand();\n" +
      "            affectedCharacter.intelli = affectedCharacter.intelli - getRand();\n" +
      "            affectedCharacter.san = affectedCharacter.san - getRand();\n" +
      "            affectedCharacter.luck = affectedCharacter.luck - getRand();\n" +
      "            affectedCharacter.charm = affectedCharacter.charm - getRand();\n" +
      "        } else if (isPositiveEffect == 1) {\n" +
      "            affectedCharacter.hp = affectedCharacter.hp + getRand();\n" +
      "            affectedCharacter.mp = affectedCharacter.mp + getRand();\n" +
      "            affectedCharacter.str = affectedCharacter.str + getRand();\n" +
      "            affectedCharacter.intelli = affectedCharacter.intelli + getRand();\n" +
      "            affectedCharacter.san = affectedCharacter.san + getRand();\n" +
      "            affectedCharacter.luck = affectedCharacter.luck + getRand();\n" +
      "            affectedCharacter.charm = affectedCharacter.charm + getRand();\n" +
      "        }\n" +
      "        //need rewrite as a function\n" +
      "        if (affectedCharacter.hp < 0) {\n" +
      "            affectedCharacter.hp = 0;\n" +
      "        } else if (affectedCharacter.hp > 100) {\n" +
      "            affectedCharacter.hp = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.mp < 0) {\n" +
      "            affectedCharacter.mp = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.mp > 100) {\n" +
      "            affectedCharacter.mp = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.str < 0) {\n" +
      "            affectedCharacter.str = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.str > 100) {\n" +
      "            affectedCharacter.str = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.intelli < 0) {\n" +
      "            affectedCharacter.intelli = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.intelli > 100) {\n" +
      "            affectedCharacter.intelli = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.san < 0) {\n" +
      "            affectedCharacter.san = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.san > 100) {\n" +
      "            affectedCharacter.san = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.luck < 0) {\n" +
      "            affectedCharacter.luck = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.luck > 100) {\n" +
      "            affectedCharacter.luck = 100;\n" +
      "\n" +
      "        } else if (affectedCharacter.charm < 0) {\n" +
      "            affectedCharacter.charm = 0;\n" +
      "\n" +
      "        } else if (affectedCharacter.charm > 100) {\n" +
      "            affectedCharacter.charm = 100;\n" +
      "        }\n" +
      "\n" +
      "        characters[_id] = affectedCharacter;\n" +
      "    }\n" +
      "\n" +
      "\n" +
      "    function getRand() public view returns (uint256 _rand){\n" +
      "        uint256 rand = uint256(sha256(block.timestamp, block.number - rand - 1)) % 10 + 1;\n" +
      "        return rand;\n" +
      "    }\n" +
      "\n" +
      "    function insertCharacter(string _name, uint _hp, uint _mp, uint _str, uint _intelli, uint _san, uint _luck, uint _charm, uint _mt, string _optionalAttrs) returns (uint){\n" +
      "        require(checkLegal(_hp, _mp, _str, _intelli, _san, _luck, _charm, _mt) == 1);\n" +
      "        //需要check合法性\n" +
      "        characterNo++;\n" +
      "        characters.push(Character(_name, _hp, _mp, _str, _intelli, _san, _luck, _charm, _mt, _optionalAttrs));\n" +
      "\n" +
      "        return characterNo;\n" +
      "    }\n" +
      "\n" +
      "    function checkLegal(uint _hp, uint _mp, uint _str, uint _intelli, uint _san, uint _luck, uint _charm, uint _mt) returns (uint _checkresult){\n" +
      "        if ((_hp < 0) || (_hp > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_mp < 0) || (_mp > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_str < 0) || (_str > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_intelli < 0) || (_intelli > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_san < 0) || (_san > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_luck < 0) || (_luck > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_charm < 0) || (_charm > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_mt < 0) || (_mt > 2)) {\n" +
      "            return 0;\n" +
      "        }\n" +
      "        return 1;\n" +
      "    }\n" +
      "\n" +
      "    // This function will return all of the details of the characters\n" +
      "    function getCharacterDetails(uint _characterId) public view returns (\n" +
      "        string _name,\n" +
      "        uint _hp,\n" +
      "        uint _mp,\n" +
      "        uint _str,\n" +
      "        uint _int,\n" +
      "        uint _san,\n" +
      "        uint _luck,\n" +
      "        uint _charm,\n" +
      "        uint _mt,\n" +
      "        string _optionalAttrs\n" +
      "    ) {\n" +
      "\n" +
      "        Character storage _characterInfo = characters[_characterId];\n" +
      "\n" +
      "        _name = _characterInfo.name;\n" +
      "        _hp = _characterInfo.hp;\n" +
      "        _mp = _characterInfo.mp;\n" +
      "        _str = _characterInfo.str;\n" +
      "        _int = _characterInfo.intelli;\n" +
      "        _san = _characterInfo.san;\n" +
      "        _luck = _characterInfo.luck;\n" +
      "        _charm = _characterInfo.charm;\n" +
      "        _mt = _characterInfo.mt;\n" +
      "        _optionalAttrs = _characterInfo.optionalAttrs;\n" +
      "    }\n" +
      "}",




    "Adam's Adventure.sol": " pragma solidity ^0.4.23;\n" +
      "\n" +
      "library SafeMath {\n" +
      "\n" +
      "/**\n" +
      "* @dev Multiplies two numbers, throws on overflow.\n" +
      "*/\n" +
      "function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "if (a == 0) {\n" +
      "return 0;\n" +
      "}\n" +
      "uint256 c = a * b;\n" +
      "assert(c / a == b);\n" +
      "return c;\n" +
      "}\n" +
      "\n" +
      "/**\n" +
      "* @dev Integer division of two numbers, truncating the quotient.\n" +
      "*/\n" +
      "function div(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "// assert(b > 0); // Solidity automatically throws when dividing by 0\n" +
      "uint256 c = a / b;\n" +
      "// assert(a == b * c + a % b); // There is no case in which this doesn't hold\n" +
      "return c;\n" +
      "}\n" +
      "\n" +
      "/**\n" +
      "* @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n" +
      "*/\n" +
      "function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "assert(b <= a);\n" +
      "return a - b;\n" +
      "}\n" +
      "\n" +
      "/**\n" +
      "* @dev Adds two numbers, throws on overflow.\n" +
      "*/\n" +
      "function add(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "uint256 c = a + b;\n" +
      "assert(c >= a);\n" +
      "return c;\n" +
      "}\n" +
      "}\n" +
      "contract DarkLord {\n" +
      "\n" +
      "using SafeMath for uint256;\n" +
      "event NewZombie(uint zombieId, string name, uint dna);\n" +
      "\n" +
      "mapping(address => uint) playerExp;\n" +
      "mapping (address => bool) private inwitness;\n" +
      "address[] public winnerAdd;\n" +
      "\n" +
      "modifier onlyWit() {\n" +
      "require(inwitness[msg.sender]);\n" +
      "_;\n" +
      "}\n" +
      "\n" +
      "struct Battlelog {\n" +
      "uint id1;\n" +
      "uint id2;\n" +
      "uint result;\n" +
      "address witness;\n" +
      "}\n" +
      "\n" +
      "Battlelog[] battleresults;\n" +
      "\n" +
      "\n" +
      "struct BMBattlelog {\n" +
      "uint id1;\n" +
      "uint id2;\n" +
      "uint id3;\n" +
      "uint id4;\n" +
      "uint result;\n" +
      "address witness;\n" +
      "}\n" +
      "\n" +
      "BMBattlelog[] bmbattleresults;\n" +
      "\n" +
      "\n" +
      "function _addWit (address _inwitness) private {\n" +
      "inwitness[_inwitness] = true;\n" +
      "}\n" +
      "\n" +
      "function _delWit (address _inwitness) private {\n" +
      "delete inwitness[_inwitness];\n" +
      "}\n" +
      "\n" +
      "function initialWittness() public {\n" +
      "_addWit(msg.sender);\n" +
      "\n" +
      "}\n" +
      "\n" +
      "function clearwit(address _inwitness) public{\n" +
      "if(_inwitness==msg.sender){\n" +
      "delete inwitness[_inwitness];\n" +
      "}\n" +
      "}\n" +
      "\n" +
      "function initialCard(uint total) public view returns(uint i) {\n" +
      "\n" +
      "i = uint256(sha256(abi.encodePacked(block.timestamp, block.number-i-1))) % total +1;\n" +
      "\n" +
      "}\n" +
      "\n" +
      "function initialBattle(uint id1,uint total1,uint id2,uint total2) onlyWit() public returns (uint wid){\n" +
      "uint darklord;\n" +
      "if(total1.mul(2)>5000){\n" +
      "darklord=total1.mul(2);\n" +
      "}else{\n" +
      "darklord=5000;\n" +
      "}\n" +
      "\n" +
      "uint256 threshold = dataCalc(total1.add(total2),darklord);\n" +
      "\n" +
      "uint256 i = uint256(sha256(abi.encodePacked(block.timestamp, block.number-i-1))) % 100 +1;\n" +
      "if(i <= threshold){\n" +
      "wid = 0;\n" +
      "winnerAdd.push(msg.sender);\n" +
      "}else{\n" +
      "wid = 1;\n" +
      "}\n" +
      "battleresults.push(Battlelog(id1,id2,wid,msg.sender));\n" +
      "_delWit(msg.sender);\n" +
      "}\n" +
      "\n" +
      "\n" +
      "function initialBM(uint id1,uint total1,uint id2,uint total2,uint id3,uint total3,uint id4,uint total4) onlyWit() public returns (uint wid){\n" +
      "uint teamETH;\n" +
      "uint teamTron;\n" +
      "teamETH=total1+total2;\n" +
      "teamTron=total3+total4;\n" +
      "\n" +
      "uint256 threshold = dataCalc(teamETH,teamTron);\n" +
      "\n" +
      "uint256 i = uint256(sha256(abi.encodePacked(block.timestamp, block.number-i-1))) % 100 +1;\n" +
      "if(i <= threshold){\n" +
      "wid = 0;\n" +
      "winnerAdd.push(msg.sender);\n" +
      "}else{\n" +
      "wid = 1;\n" +
      "}\n" +
      "bmbattleresults.push(BMBattlelog(id1,id2,id3,id4,wid,msg.sender));\n" +
      "_delWit(msg.sender);\n" +
      "}\n" +
      "\n" +
      "function dataCalc(uint _total1, uint _total2) public pure returns (uint256 _threshold){\n" +
      "\n" +
      "// We can just leave the other fields blank:\n" +
      "\n" +
      "uint256 threshold = _total1.mul(100).div(_total1+_total2);\n" +
      "\n" +
      "if(threshold > 90){\n" +
      "threshold = 90;\n" +
      "}\n" +
      "if(threshold < 10){\n" +
      "threshold = 10;\n" +
      "}\n" +
      "\n" +
      "return threshold;\n" +
      "\n" +
      "}\n" +
      "\n" +
      "function getBattleDetails(uint _battleId) public view returns (\n" +
      "uint _id1,\n" +
      "uint _id2,\n" +
      "uint256 _result,\n" +
      "address _witadd\n" +
      ") {\n" +
      "Battlelog storage _battle = battleresults[_battleId];\n" +
      "\n" +
      "_id1 = _battle.id1;\n" +
      "_id2 = _battle.id2;\n" +
      "_result = _battle.result;\n" +
      "_witadd = _battle.witness;\n" +
      "}\n" +
      "\n" +
      "function getBMBattleDetails(uint _battleId) public view returns (\n" +
      "uint _id1,\n" +
      "uint _id2,\n" +
      "uint _id3,\n" +
      "uint _id4,\n" +
      "uint256 _result,\n" +
      "address _witadd\n" +
      ") {\n" +
      "BMBattlelog storage _battle = bmbattleresults[_battleId];\n" +
      "\n" +
      "_id1 = _battle.id1;\n" +
      "_id2 = _battle.id2;\n" +
      "_id3 = _battle.id3;\n" +
      "_id4 = _battle.id4;\n" +
      "_result = _battle.result;\n" +
      "_witadd = _battle.witness;\n" +
      "}\n" +
      "\n" +
      "\n" +
      "function totalSupply() public view returns (uint256 _totalSupply) {\n" +
      "return battleresults.length;\n" +
      "}\n" +
      "\n" +
      "function totalBmSupply() public view returns (uint256 _totalSupply) {\n" +
      "return battleresults.length;\n" +
      "}\n" +
      "\n" +
      "\n" +
      "}\n",


    "Airdrop.sol": "pragma solidity ^0.4.25;\n" +
      "\n" +
      "/*\n" +
      "Name: LTAirdrop\n" +
      "Dev: White Matrix co,. Ltd\n" +
      "*/\n" +
      "\n" +
      "library SafeMath {\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Multiplies two numbers, throws on overflow.\n" +
      "    */\n" +
      "    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        if (a == 0) {\n" +
      "            return 0;\n" +
      "        }\n" +
      "        uint256 c = a * b;\n" +
      "        assert(c / a == b);\n" +
      "        return c;\n" +
      "    }\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Integer division of two numbers, truncating the quotient.\n" +
      "    */\n" +
      "    function div(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        // assert(b > 0); // Solidity automatically throws when dividing by 0\n" +
      "        uint256 c = a / b;\n" +
      "        // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n" +
      "        return c;\n" +
      "    }\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n" +
      "    */\n" +
      "    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        assert(b <= a);\n" +
      "        return a - b;\n" +
      "    }\n" +
      "\n" +
      "    /**\n" +
      "    * @dev Adds two numbers, throws on overflow.\n" +
      "    */\n" +
      "    function add(uint256 a, uint256 b) internal pure returns (uint256) {\n" +
      "        uint256 c = a + b;\n" +
      "        assert(c >= a);\n" +
      "        return c;\n" +
      "    }\n" +
      "}\n" +
      "\n" +
      "contract LTAirdrop {\n" +
      "    using SafeMath for uint256;\n" +
      "    //mutabilityType\n" +
      "    //Genesis parameter\n" +
      "    uint public recordNo = 0;\n" +
      "    uint public version = 1;\n" +
      "    mapping(address => uint) private lockInfo;\n" +
      "    mapping(address => bool) private admins;\n" +
      "    mapping(address => bool) private blacklist;\n" +
      "    uint256 prize;\n" +
      "    address contractCreator = msg.sender;\n" +
      "    address winnerAddress = 0xFb2D26b0caa4C331bd0e101460ec9dbE0A4783A4;\n" +
      "    \n" +
      "    struct Record {\n" +
      "        uint cId;\n" +
      "        string name;\n" +
      "        address pAddress;\n" +
      "        uint awardTime;\n" +
      "    }\n" +
      "\n" +
      "    Record[] records;\n" +
      "\n" +
      "    constructor() public {\n" +
      "        admins[contractCreator] = true;\n" +
      "    }\n" +
      "    \n" +
      "    //modifiers\n" +
      "    modifier onlyContractCreator() {\n" +
      "        require(msg.sender == contractCreator);\n" +
      "        _;\n" +
      "    }\n" +
      "\n" +
      "    modifier onlyAdmins() {\n" +
      "        require(admins[msg.sender]);\n" +
      "        _;\n" +
      "    }\n" +
      "    \n" +
      "    //Owners and admins\n" +
      "\n" +
      "    /* Owner */\n" +
      "    function setWinnerAddress(address _winnerAddress) onlyContractCreator() public {\n" +
      "        winnerAddress = _winnerAddress;\n" +
      "    }\n" +
      "\n" +
      "    function setOwner(address _owner) onlyContractCreator() public {\n" +
      "        contractCreator = _owner;\n" +
      "    }\n" +
      "\n" +
      "    function addAdmin(address _admin) onlyContractCreator() public {\n" +
      "        admins[_admin] = true;\n" +
      "    }\n" +
      "\n" +
      "    function removeAdmin(address _admin) onlyContractCreator() public {\n" +
      "        delete admins[_admin];\n" +
      "    }\n" +
      "\n" +
      "    function addBlackAddress(address _blackAddress) onlyAdmins() public {\n" +
      "        blacklist[_blackAddress] = true;\n" +
      "    }\n" +
      "\n" +
      "    function removeBlackAddress(address _blackAddress) onlyAdmins() public {\n" +
      "        delete blacklist[_blackAddress];\n" +
      "    }\n" +
      "\n" +
      "    function removeLockInfo(address _pAddress) onlyAdmins() public {\n" +
      "        delete lockInfo[_pAddress];\n" +
      "    }\n" +
      "\n" +
      "    function putPrize() public payable {\n" +
      "        require(msg.sender != address(0));\n" +
      "        prize = prize.add(msg.value);\n" +
      "    }\n" +
      "\n" +
      "    function withdraw() onlyAdmins() public {\n" +
      "        winnerAddress.transfer(prize);\n" +
      "        prize = 0;\n" +
      "    }\n" +
      "\n" +
      "    function totalPrize() public view returns (uint256 _totalSupply) {\n" +
      "        return prize;\n" +
      "    }\n" +
      "\n" +
      "    function getBlacklist(address _blackAddress) public view returns (bool _check)  {\n" +
      "        return blacklist[_blackAddress];\n" +
      "\n" +
      "    }\n" +
      "\n" +
      "    function getLockInfo(address _pAddress) public view returns (uint _time)  {\n" +
      "        if ((lockInfo[_pAddress] - now) > 0) {\n" +
      "            return (lockInfo[_pAddress] - now);\n" +
      "        } else {\n" +
      "            return 0;\n" +
      "        }\n" +
      "    }\n" +
      "\n" +
      "    function getRecordNo() public view returns (uint _recordNo){\n" +
      "        return recordNo;\n" +
      "    }\n" +
      "\n" +
      "    function claimAwardWithId(uint _id, string _name, uint _hp, uint _mp, uint _str, uint _intelli, uint _san, uint _luck, uint _mt, string _optionalAttrs) public returns (uint){\n" +
      "        require(checkLegal(_hp, _mp, _str, _intelli, _san, _luck, _mt) == 1);\n" +
      "\n" +
      "        //需要check合法性\n" +
      "        if (checkPass(_intelli, _mt, _optionalAttrs) == 1 && blacklist[msg.sender] != true && lockInfo[msg.sender] < now) {\n" +
      "\n" +
      "            recordNo++;\n" +
      "            records.push(Record(_id, _name, msg.sender, now));\n" +
      "\n" +
      "            uint256 i = uint256(sha256(block.timestamp, block.number - i - 1)) % 1000 + 1;\n" +
      "            if (i == 18) {\n" +
      "                if (prize.sub(0.5 ether) > 0) {\n" +
      "                    msg.sender.transfer(0.5 ether);\n" +
      "                    prize = prize.sub(0.5 ether);\n" +
      "                }\n" +
      "            } else if (i % 99 == 0) {\n" +
      "                if (prize.sub(0.002 ether) > 0) {\n" +
      "                    msg.sender.transfer(0.002 ether);\n" +
      "                    prize = prize.sub(0.002 ether);\n" +
      "                }\n" +
      "            } else {\n" +
      "                if (prize.sub(0.0002 ether) > 0) {\n" +
      "                    msg.sender.transfer(0.0002 ether);\n" +
      "                    prize = prize.sub(0.0002 ether);\n" +
      "                }\n" +
      "            }\n" +
      "\n" +
      "            lockInfo[msg.sender] = now + 1 days;\n" +
      "\n" +
      "        } else if (checkPass(_intelli, _mt, _optionalAttrs) == 0) {\n" +
      "            blacklist[msg.sender] = true;\n" +
      "        }\n" +
      "\n" +
      "        return recordNo;\n" +
      "    }\n" +
      "\n" +
      "    function claimAwardWithoutId(string _name, uint _hp, uint _mp, uint _str, uint _intelli, uint _san, uint _luck, uint _mt, string _optionalAttrs) public returns (uint){\n" +
      "        require(checkLegal(_hp, _mp, _str, _intelli, _san, _luck, _mt) == 1);\n" +
      "        require(lockInfo[msg.sender] < now);\n" +
      "        require(blacklist[msg.sender] != true);\n" +
      "\n" +
      "        //需要check合法性\n" +
      "        if (checkPass(_intelli, _mt, _optionalAttrs) == 1) {\n" +
      "\n" +
      "            recordNo++;\n" +
      "            records.push(Record(0, _name, msg.sender, now));\n" +
      "\n" +
      "            uint256 i = uint256(sha256(block.timestamp, block.number - i - 1)) % 1000 + 1;\n" +
      "            if (i == 18) {\n" +
      "                msg.sender.transfer(0.5 ether);\n" +
      "                prize = prize.sub(0.5 ether);\n" +
      "\n" +
      "            } else if (i % 99 == 0) {\n" +
      "                msg.sender.transfer(0.002 ether);\n" +
      "                prize = prize.sub(0.002 ether);\n" +
      "            } else {\n" +
      "                msg.sender.transfer(0.0008 ether);\n" +
      "                prize = prize.sub(0.0008 ether);\n" +
      "            }\n" +
      "\n" +
      "            lockInfo[msg.sender] = now + 1 days;\n" +
      "\n" +
      "        } else if (checkPass(_intelli, _mt, _optionalAttrs) == 0) {\n" +
      "            blacklist[msg.sender] = true;\n" +
      "        }\n" +
      "\n" +
      "        return recordNo;\n" +
      "    }\n" +
      "\n" +
      "    function checkPass(uint _intelli, uint _mt, string _optionalAttrs) internal pure returns (uint _checkResult){\n" +
      "        if (_intelli < 500) {\n" +
      "            return 0;\n" +
      "        } else if ((_mt < 0) || (_mt > 2)) {\n" +
      "            return 0;\n" +
      "        } else if (bytes(_optionalAttrs).length == 0) {\n" +
      "            return 0;\n" +
      "        }\n" +
      "        return 1;\n" +
      "    }\n" +
      "\n" +
      "    function checkLegal(uint _hp, uint _mp, uint _str, uint _intelli, uint _san, uint _luck, uint _mt) internal pure returns (uint _checkResult){\n" +
      "        if ((_hp < 0) || (_hp > 9999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_mp < 0) || (_mp > 99999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_str < 0) || (_str > 99999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_intelli < 0) || (_intelli > 99999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_san < 0) || (_san > 99999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_luck < 0) || (_luck > 99999)) {\n" +
      "            return 0;\n" +
      "        } else if ((_mt < 0) || (_mt > 2)) {\n" +
      "            return 0;\n" +
      "        }\n" +
      "        return 1;\n" +
      "    }\n" +
      "\n" +
      "}"



  }
  let indexes = []
  for (let key in examples) {
    localStorage.setItem(key, examples[key])
    indexes.push(key)
  }
  return indexes
}
