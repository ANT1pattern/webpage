/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles.scss */ "./src/styles.scss");
/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_terminal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/terminal.js */ "./src/terminal.js");


/*!
 * Ant1pattern Webpage
 *
 * Copyright (c) 2020, ANT1pattern <ant1pattern@protonmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

 // Banner text

var banner = "\nInitializing ANT1pattern Shell v0.1\nCopyright (c) 2020 Ant1pattern <ant1pattern@protonmail.com>\n\n.............................................................................\n \n _______  _______  _______  _______ \n|\\     /||\\     /||\\     /||\\     /|\n| +---+ || +---+ || +---+ || +---+ |\n| |   | || |   | || |   | || |   | |\n| |A  | || |N  | || |T  | || |1  | |\n| +---+ || +---+ || +---+ || +---+ |\n|/_____\\||/_____\\||/_____\\||/_____\\|\n                                    \n_______  _______  _______  _______  _______  _______  _______ \n|\\     /||\\     /||\\     /||\\     /||\\     /||\\     /||\\     /|\n| +---+ || +---+ || +---+ || +---+ || +---+ || +---+ || +---+ |\n| |   | || |   | || |   | || |   | || |   | || |   | || |   | |\n| |p  | || |a  | || |t  | || |t  | || |e  | || |r  | || |n  | |\n| +---+ || +---+ || +---+ || +---+ || +---+ || +---+ || +---+ |\n|/_____\\||/_____\\||/_____\\||/_____\\||/_____\\||/_____\\||/_____\\|\n-----------------------------------------------------------------------------\nWe provide the skills you need to ship your web3 product!\n-----------------------------------------------------------------------------\n\n\nType 'help for a list of available commands.\n\n\n\n";
var refInfo = {
  "Knockout Finance (ongoing)": {
    url: "https://github.com/ANT1pattern/knockout.finance",
    description: "more infos coming soon..."
  },
  "Lisk Ren Protocol Bridge (ongoing)": {
    url: "https://github.com/ANT1pattern/multichain",
    description: "A decentralized bridge between Lisk and Ethereum based on Ren Protocol. (impl)"
  },
  "ant1pattern Webpage (done)": {
    url: "https://github.com/ANT1pattern/webpage",
    description: "This Webpage. (impl, test, devops)"
  },
  "CTHU-Coin (done)": {
    url: "https://github.com/cthu-coin/Cthulhu_Soul",
    description: "Ethereum Game (project setup, tests)"
  }
};
var refList = Object.keys(refInfo).reduce(function (result, key) {
  return result.concat(["".concat(key, " - ").concat(refInfo[key].description, " ")]);
}, []).join('\n');
var refText = "\n\nReferences\n\n".concat(refList, "\n\n"); // Help text

var helpText = "\nAvailable commands:\n\nhelp - This output\nabout - Prints information about ANT1pattern\nteam - Shows team member\nservice - Prints our services\nref - Display references\ncontact - show contact options\nclear - Clears the display\n"; // Contact texts

var contactInfo = {
  discord: 'https://discord.gg/ywVNbvb86j',
  email: 'ant1pattern@protonmail.com',
  twitter: 'https://twitter.com/antipattern_eth',
  github: 'https://github.com/ant1pattern',
  gitcoin: 'https://gitcoin.co/grants/1159/ant1pattern',
  medium: 'https://medium.com/@ant1pattern'
};
var serviceInfo = {
  agile: "We provide the scrum master and develop the project agile.",
  // consulting: "We guide you through the project and show you best practices and possible risks.",
  development: "We develop Apps, Smart Contracts, Backends and Bots.",
  // quality: "We ensure quality through testing of apps and smart contracts on different levels.",
  devops: "We do the operations.",
  scale: "We set the right focus regarding your budget."
};
var teamInfo = {
  tosh1: 'p2p enthusiast and software engineer',
  fr1da: 'p2p enthusiast and accountant',
  rob1: 'p2p enthusiast and project manager',
  w1tt: 'graphics dude'
};
var serviceDetailInfo = {
  agile: "\nWe are a team which is focused on agile development. Our Principles are:\n\n1. Customer satisfaction by early and continuous delivery of valuable software.\n2. Welcome changing requirements, even in late development.\n3. Deliver working software frequently (weeks rather than months)\n4. Close, daily cooperation between business people and developers\n5. Projects are built around motivated individuals, who should be trusted\n6. Face-to-face conversation is the best form of communication (co-location)\n7. Working software is the primary measure of progress\n8. Sustainable development, able to maintain a constant pace\n9. Continuous attention to technical excellence and good design\n10. Simplicity\u2014the art of maximizing the amount of work not done\u2014is essential\n11. Best architectures, requirements, and designs emerge from self-organizing teams\n12. Regularly, the team reflects on how to become more effective, and adjusts accordingly\n\nWe understand that disruptive blockchain projects can not be preocesed as a normal software project. \n\nWith this understanding and the knowledge and experience as project manager. We are the best choice if you look for a scrum master.\n  ",
  consult: "\n\n  \n  ",
  development: "\nSmart Contracts\n\nWebApps\n\nBots\n\nShell scripts\n\nevery you need and want\n  \n",
  quality: "  \nWe develop for each individual projects its own quality assurance strategy.\n\nTypically those exist of:\n\n- Quality assured through experienced based development process\n- Code Reviews and Audits (Smart Contracts, Apps)\n- Testing on different levels (unit, integrationtests, e2e, security, performance)\n\n  ",
  devops: "\n  \n  DevOps\n\n  - Deployment Scripts for Smart Contracts\n  - CICD Pipelines for your DApp\n  \n  ",
  scale: "\n    @TODO: rob1\n  "
};
var teamDetailInfo = {
  tosh1: "\n\n  __                 .__     ____ \n_/  |_  ____   ______|  |__ /_   |\n\\   __\\/  _ \\ /  ___/|  |  \\ |   |\n |  | (  <_> )\\___ \\ |   Y  \\|   |\n |__|  \\____//____  >|___|  /|___|\n                  \\/      \\/ \n                  \nInfos:                  \n- build already webpages on geocities (1997)\n- into p2p since napster (1999)\n- into bitcoin since 2012\n- first own ERC20 token on Ethereum in 2016\n- participated on multiple ethereum hackathons\n- since 5years+ professional blockchain engineer and architect\n\nRoles:                  \n- CTO\n- Hacker\n- Oracle about Blockchain\n  ",
  fr1da: "\n    _____         ____     .___        \n  _/ ____\\_______/_   |  __| _/_____   \n  \\   __\\ \\_  __ \\|   | / __ | \\__  \\  \n   |  |    |  | \\/|   |/ /_/ |  / __ \\_\n   |__|    |__|   |___|\\____ | (____  /\n                            \\/      \\/\n- studied english, history and social economics\n- into p2p since bittorrent (2004)\n- into bitcoin since 2014\n- first own ERC20 token on Ethereum in 2016\n- since 5years+ professional crypto trader \n\n\nRoles:                  \n- CFO\n- Market Observer\n- Accountant\n",
  rob1: "\n                 ___.    ____ \n  _______   ____ \\_ |__ /_   |\n  \\_  __ \\ /  _ \\ | __ \\ |   |\n   |  | \\/(  <_> )| \\_\\ \\|   |\n   |__|    \\____/ |___  /|___|\n                      \\/   \n- father\n- studied informatics\n- into p2p since bittorrent (2004)\n- into bitcoin since 2014\n- participated on multiple ethereum hackathons\n- since 7years+ professional project manager\n- loves to hack hardware\n\n\nRoles:                  \n- CEO\n- Project manager\n",
  w1tt: "\n            ____   __     __   \n  __  _  __/_   |_/  |_ _/  |_ \n  \\ \\/ \\/ / |   |\\   __\\\\   __\\\n   \\     /  |   | |  |   |  |  \n    \\/\\_/   |___| |__|   |__|  \n                               \n- father\n- architect\n- artist \n\nRoles:                  \n- Graphics Dude\n"
};
var contactList = Object.keys(contactInfo).reduce(function (result, key) {
  return result.concat(["".concat(key, " - ").concat(contactInfo[key], " ")]);
}, []).join('\n');
var teamList = Object.keys(teamInfo).reduce(function (result, key) {
  return result.concat(["".concat(key, " - ").concat(teamInfo[key], " ")]);
}, []).join('\n');
var serviceList = Object.keys(serviceInfo).reduce(function (result, key) {
  return result.concat(["".concat(key, " - ").concat(serviceInfo[key], " ")]);
}, []).join('\n');
var contactText = "\nPlease contact us!\n\n".concat(contactList, "\n\nUse ex. 'contact twitter' to open the links.\n");
var serviceText = "\nServices\n\n".concat(serviceList, "\n\nUse ex. 'service development' to open further details.\n");
var teamText = "\nTeam member\n\n".concat(teamList, "\n\nUse ex. 'team tosh1' to open further details.\n");

var openTeam = function openTeam(key) {
  return teamDetailInfo[key];
};

var openService = function openService(key) {
  return serviceDetailInfo[key];
};

var openRef = function openRef(key) {
  return window.open(contactInfo[key].url);
};

var openContact = function openContact(key) {
  return window.open(key === 'email' ? "mailto: ".concat(contactInfo[key], " ") : contactInfo[key]);
}; // File browser


var browser = function () {
  var current = '/';
  var tree = [{
    location: '/',
    filename: 'documents',
    type: 'directory'
  }, {
    location: '/',
    filename: 'AUTHOR',
    type: 'file',
    content: 'Anders Evenrud <andersevenrud@gmail.com>'
  }];

  var fix = function fix(str) {
    return str.trim().replace(/\/+/g, '/') || '/';
  };

  var setCurrent = function setCurrent(dir) {
    if (typeof dir !== 'undefined') {
      if (dir == '..') {
        var parts = current.split('/');
        parts.pop();
        current = fix(parts.join('/'));
      } else {
        var found = tree.filter(function (iter) {
          return iter.location === current;
        }).find(function (iter) {
          return iter.filename === fix(dir);
        });

        if (found) {
          current = fix(current + '/' + dir);
        } else {
          return "Directory '".concat(dir, "' not found in '").concat(current, "'");
        }
      }

      return "Entered '".concat(current, "'");
    }

    return current;
  };

  var ls = function ls() {
    var found = tree.filter(function (iter) {
      return iter.location === current;
    });
    var fileCount = found.filter(function (iter) {
      return iter.type === 'file';
    }).length;
    var directoryCount = found.filter(function (iter) {
      return iter.type === 'directory';
    }).length;
    var status = "".concat(fileCount, " file(s), ").concat(directoryCount, " dir(s)");
    var maxlen = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(found.map(function (iter) {
      return iter.filename;
    }).map(function (n) {
      return n.length;
    })));
    var list = found.map(function (iter) {
      return "".concat(iter.filename.padEnd(maxlen + 1, ' '), " <").concat(iter.type, ">");
    }).join('\n');
    return "".concat(list, "\n\n").concat(status, " in ").concat(current);
  };

  var cat = function cat(filename) {
    var found = tree.filter(function (iter) {
      return iter.location === current;
    });
    var foundFile = found.find(function (iter) {
      return iter.filename === filename;
    });

    if (foundFile) {
      return foundFile.content;
    }

    return "File '".concat(filename, "' not found in '").concat(current, "'");
  };

  return {
    cwd: function cwd() {
      return setCurrent();
    },
    cd: function cd(dir) {
      return setCurrent(fix(dir));
    },
    cat: cat,
    ls: ls
  };
}(); ///////////////////////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////////////////////


var load = function load() {
  var t = Object(_src_terminal_js__WEBPACK_IMPORTED_MODULE_2__["terminal"])({
    prompt: function prompt() {
      return "$ ".concat(browser.cwd(), " > ");
    },
    banner: banner,
    commands: {
      help: function help() {
        return helpText;
      },
      service: function service(key) {
        if (key in serviceInfo) {
          return openService(key);
        }

        return serviceText;
      },
      team: function team(key) {
        if (key in teamInfo) {
          return openTeam(key);
        }

        return teamText;
      },
      ref: function ref(key) {
        if (key in refInfo) {
          openRef(key);
          return "Opening ".concat(key, " - ").concat(refInfo[key]);
        }

        return refText;
      },
      clear: function clear() {
        return t.clear();
      },
      contact: function contact(key) {
        if (key in contactInfo) {
          openContact(key);
          return "Opening ".concat(key, " - ").concat(contactInfo[key]);
        }

        return contactText;
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', load);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/terminal.js":
/*!*************************!*\
  !*** ./src/terminal.js ***!
  \*************************/
/*! exports provided: terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terminal", function() { return terminal; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


/**
 * AnderShell - Just a small CSS demo
 *
 * Copyright (c) 2011-2018, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
// Creates initial options
var createOptions = function createOptions(opts) {
  return Object.assign({}, {
    banner: 'Hello World',
    prompt: function prompt() {
      return '$ > ';
    },
    tickrate: 1000 / 60,
    buflen: 8,
    commands: {}
  }, opts || {});
}; // Creates our textarea element


var createElement = function createElement(root) {
  var el = document.createElement('textarea');
  el.contentEditable = true;
  el.spellcheck = false;
  el.value = '';
  root.appendChild(el);
  return el;
}; // Keys that must be ignored
// Sets text selection range


var setSelectionRange = function setSelectionRange(input) {
  var length = input.value.length;

  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(length, length);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', length);
    range.moveStart('character', length);
    range.select();
  }
}; // Gets the font size of an element


var getFontSize = function getFontSize(element) {
  return parseInt(window.getComputedStyle(element).getPropertyValue('font-size'), 10);
}; // Creates the rendering loop


var renderer = function renderer(tickrate, onrender) {
  var lastTick = 0;

  var tick = function tick(time) {
    var now = performance.now();
    var delta = now - lastTick;

    if (delta > tickrate) {
      lastTick = now - delta % tickrate;
      onrender();
    }

    window.requestAnimationFrame(tick);
  };

  return tick;
}; // Pronts buffer onto the textarea


var printer = function printer($element, buflen) {
  return function (buffer) {
    if (buffer.length > 0) {
      var len = Math.min(buflen, buffer.length);
      var val = buffer.splice(0, len);
      $element.value += val.join('');
      setSelectionRange($element);
      $element.scrollTop = $element.scrollHeight;
      return true;
    }

    return false;
  };
}; // Parses input


var parser = function parser(onparsed) {
  return function (str) {
    if (str.length) {
      var args = str.split(' ').map(function (s) {
        return s.trim();
      });
      var cmd = args.splice(0, 1)[0];
      console.debug(cmd, args);
      onparsed.apply(void 0, [cmd].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)));
    }
  };
}; // Command executor


var executor = function executor(commands) {
  return function (cmd) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return function (cb) {
      try {
        commands[cmd] ? cb(commands[cmd].apply(commands, args) + '\n') : cb("No such command '".concat(cmd, "'\n"));
      } catch (e) {
        console.warn(e);
        cb("Exception: ".concat(e, "\n"));
      }
    };
  };
}; // Handle keyboard events


var keyboard = function keyboard(parse) {
  var input = [];
  var keys = {
    8: 'backspace',
    13: 'enter'
  };

  var ignoreKey = function ignoreKey(code) {
    return code >= 33 && code <= 40;
  };

  var key = function key(ev) {
    return keys[ev.which || ev.keyCode];
  };

  return {
    keypress: function keypress(ev) {
      if (key(ev) === 'enter') {
        var str = input.join('').trim();
        parse(str);
        input = [];
      } else if (key(ev) !== 'backspace') {
        input.push(String.fromCharCode(ev.which || ev.keyCode));
      }
    },
    keydown: function keydown(ev) {
      if (key(ev) === 'backspace') {
        if (input.length > 0) {
          input.pop();
        } else {
          ev.preventDefault();
        }
      } else if (ignoreKey(ev.keyCode)) {
        ev.preventDefault();
      }
    }
  };
}; // Creates the terminal


var terminal = function terminal(opts) {
  var buffer = []; // What will be output to display

  var busy = false; // If we cannot type at the moment

  var _createOptions = createOptions(opts),
      prompt = _createOptions.prompt,
      banner = _createOptions.banner,
      commands = _createOptions.commands,
      buflen = _createOptions.buflen,
      tickrate = _createOptions.tickrate;

  var $root = document.querySelector('#terminal');
  var $element = createElement($root);
  var fontSize = getFontSize($element);
  var width = $element.offsetWidth;
  var cwidth = Math.round(width / fontSize * 1.9); // FIXME: Should be calculated via canvas

  var output = function output(_output, center) {
    var lines = _output.split(/\n/);

    if (center) {
      lines = lines.map(function (line) {
        return line.length > 0 ? line.padStart(line.length + (cwidth / 2 - line.length / 2), ' ') : line;
      });
    }

    var append = lines.join('\n') + '\n' + prompt();
    buffer = buffer.concat(append.split(''));
  };

  var print = printer($element, buflen);
  var execute = executor(commands);

  var onrender = function onrender() {
    return busy = print(buffer);
  };

  var onparsed = function onparsed(cmd) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return execute.apply(void 0, [cmd].concat(args))(output);
  };

  var render = renderer(tickrate, onrender);
  var parse = parser(onparsed);

  var focus = function focus() {
    return setTimeout(function () {
      return $element.focus();
    }, 1);
  };

  var kbd = keyboard(parse);

  var clear = function clear() {
    return $element.value = '';
  };

  var input = function input(ev) {
    return busy ? ev.preventDefault() : kbd[ev.type](ev);
  };

  $element.addEventListener('focus', function () {
    return setSelectionRange($element);
  });
  $element.addEventListener('blur', focus);
  $element.addEventListener('keypress', input);
  $element.addEventListener('keydown', input);
  window.addEventListener('focus', focus);
  $root.addEventListener('click', focus);
  $root.appendChild($element);
  render();
  output(banner, true);
  focus();
  return {
    focus: focus,
    parse: parse,
    clear: clear,
    print: output
  };
};

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/frankp/Projekte/ethereum-projects/antipattern-webpage/index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map