/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Nunito', sans-serif;\r\n}\r\n\r\n.battleship-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background-color: #f3f4f6;\r\n  padding: 1rem;\r\n}\r\n\r\n.game-title {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.boards-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.player-section {\r\n  text-align: center;\r\n}\r\n\r\n.player-name-1,\r\n.player-name-2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 800;\r\n  margin: 0;\r\n}\r\n\r\n.edit-name {\r\n  font-size: 0.7rem;\r\n  margin: 0;\r\n  font-weight: bold;\r\n  line-height: 2rem;\r\n}\r\n\r\n.game-board-1,\r\n.game-board-2 {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  gap: 0.25rem;\r\n}\r\n\r\n.board-cell {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border: none;\r\n  border-radius: 0.25rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.board-cell:hover {\r\n  background-color: #41454d;\r\n}\r\n\r\n.cell-empty,\r\n.board-cell.hide {\r\n  background-color: #bfdbfe;\r\n}\r\n\r\n.cell-ship {\r\n  background-color: #6b7280;\r\n}\r\n\r\n.cell-hit {\r\n  background-color: #ef4444;\r\n}\r\n\r\n.cell-miss {\r\n  background-color: #ffffff;\r\n}\r\n\r\n.message-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  min-width: 50%;\r\n}\r\n\r\n.game-message {\r\n  font-size: 1.125rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.turn-indicator {\r\n  font-size: 1rem;\r\n}\r\n\r\n#player-vs-player,\r\n#player-vs-computer,\r\n#new-game,\r\n#start-game,\r\n#randomize-ships-1,\r\n#randomize-ships-2 {\r\n  background-color: #2f71d4;\r\n  color: #ffffff;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 0.5rem 1.5rem;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition:\r\n    background-color 0.3s ease,\r\n    transform 0.2s ease;\r\n}\r\n\r\n#player-vs-player:hover,\r\n#player-vs-computer:hover,\r\n#new-game:hover,\r\n#start-game:hover,\r\n#randomize-ships-1:hover,\r\n#randomize-ships-2:hover {\r\n  background-color: #213488;\r\n}\r\n\r\n#player-vs-player:active,\r\n#player-vs-computer:active,\r\n#new-game:active,\r\n#start-game:active,\r\n#randomize-ships-1:active,\r\n#randomize-ships-2:active {\r\n  background-color: #213488;\r\n  transform: scale(0.95);\r\n}\r\n\r\n#options {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  align-items: center;\r\n}\r\n\r\n#randomize-buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 2rem;\r\n}\r\n\r\n#start-game {\r\n  max-width: 10rem;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard {\r\n  constructor() {\r\n    this.size = 10;\r\n    this.board = this.createBoard();\r\n    this.ships = [];\r\n    this.missedAttacks = [];\r\n  }\r\n\r\n  createBoard() {\r\n    return Array.from({ length: this.size }, () => Array(this.size).fill(null));\r\n  }\r\n\r\n  clearBoard() {\r\n    this.board = Array.from({ length: this.size }, () =>\r\n      Array(this.size).fill(null),\r\n    );\r\n    this.ships = [];\r\n    this.missedAttacks = [];\r\n  }\r\n\r\n  placeShip(x, y, ship, orientation) {\r\n    if (orientation === 'horizontal') {\r\n      if (y + ship.length > this.size) {\r\n        throw new Error('Ship cannot be placed outside the board.');\r\n      }\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (this.board[x][y + i] !== null) {\r\n          throw new Error('Ship cannot be placed on top of another ship.');\r\n        }\r\n      }\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[x][y + i] = ship;\r\n      }\r\n      this.ships.push(ship);\r\n    } else if (orientation === 'vertical') {\r\n      if (x + ship.length > this.size) {\r\n        throw new Error('Ship cannot be placed outside the board.');\r\n      }\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (this.board[x + i][y] !== null) {\r\n          throw new Error('Ship cannot be placed on top of another ship.');\r\n        }\r\n      }\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[x + i][y] = ship;\r\n      }\r\n      this.ships.push(ship);\r\n    } else {\r\n      throw new Error('Invalid orientation.');\r\n    }\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    if (this.board[x][y] !== null) {\r\n      this.board[x][y].hit();\r\n      return true;\r\n    } else {\r\n      this.missedAttacks.push([x, y]);\r\n      return false;\r\n    }\r\n  }\r\n\r\n  getHitStatus(row, col) {\r\n    const cell = this.board[row][col];\r\n    if (cell === null) {\r\n      return 'empty';\r\n    } else if (cell.sunk) {\r\n      return 'sunk';\r\n    } else if (cell.hits > 0) {\r\n      return 'hit';\r\n    } else {\r\n      return 'ship';\r\n    }\r\n  }\r\n\r\n  allSunk() {\r\n    return this.ships.every((ship) => ship.sunk === true);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://project-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\nconst Game = function () {\r\n  let player1;\r\n  let player2;\r\n  let currentPlayer;\r\n  let gameMode;\r\n  let gameStatus = true;\r\n  let name1;\r\n  let name2;\r\n  const container = document.querySelector('.message-section');\r\n  const options = document.getElementById('options');\r\n  const randomize = document.getElementById('randomize-buttons');\r\n  const board1 = document.querySelector('.game-board-1');\r\n  const board2 = document.querySelector('.game-board-2');\r\n  const turn = document.querySelector('.turn-indicator');\r\n  const message = document.querySelector('.game-message');\r\n  const newGameButton = document.createElement('button');\r\n  newGameButton.textContent = 'New Game';\r\n  newGameButton.id = 'new-game';\r\n\r\n  const Ships = [\r\n    {\r\n      name: 'Carrier',\r\n      size: 4,\r\n      quantity: 1,\r\n    },\r\n    {\r\n      name: 'Battleship',\r\n      size: 3,\r\n      quantity: 2,\r\n    },\r\n    {\r\n      name: 'Cruiser',\r\n      size: 2,\r\n      quantity: 3,\r\n    },\r\n    {\r\n      name: 'Submarine',\r\n      size: 1,\r\n      quantity: 4,\r\n    },\r\n  ];\r\n\r\n  const newGame = () => {\r\n    name1 = document.querySelector('.player-name-1').textContent;\r\n    player1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(name1);\r\n    if (gameMode === 'player-vs-computer') {\r\n      player2 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Computer');\r\n    } else {\r\n      name2 = document.querySelector('.player-name-2').textContent;\r\n      player2 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(name2);\r\n    }\r\n    currentPlayer = player1;\r\n    setShips(player1);\r\n    setShips(player2);\r\n    renderPreview();\r\n    newGameButton.remove();\r\n    if (message.firstChild) {\r\n      message.firstChild.remove();\r\n    }\r\n  };\r\n\r\n  const renderPreview = () => {\r\n    board1.innerHTML = '';\r\n    board2.innerHTML = '';\r\n\r\n    renderBoard(player1.board, board1, true);\r\n\r\n    if (gameMode === 'player-vs-player') {\r\n      renderBoard(player2.board, board2, true);\r\n    } else {\r\n      renderBoard(player2.board, board2);\r\n    }\r\n\r\n    const existingStartButton = document.getElementById('start-game');\r\n    if (existingStartButton) {\r\n      existingStartButton.remove();\r\n    }\r\n\r\n    const existingRandomizeButton1 =\r\n      document.getElementById('randomize-ships-1');\r\n    if (existingRandomizeButton1) {\r\n      existingRandomizeButton1.remove();\r\n    }\r\n\r\n    const existingRandomizeButton2 =\r\n      document.getElementById('randomize-ships-2');\r\n    if (existingRandomizeButton2) {\r\n      existingRandomizeButton2.remove();\r\n    }\r\n\r\n    const startGameButton = document.createElement('button');\r\n    startGameButton.textContent = 'Start Game';\r\n    startGameButton.id = 'start-game';\r\n    startGameButton.addEventListener('click', () => {\r\n      showGameboard();\r\n      message.textContent = '';\r\n      startGameButton.remove();\r\n      randomizeButton1.remove();\r\n      if (gameMode === 'player-vs-player') {\r\n        randomizeButton2.remove();\r\n      }\r\n    });\r\n\r\n    const randomizeButton1 = document.createElement('button');\r\n    randomizeButton1.textContent = `Randomize ${player1.name}'s Ships`;\r\n    randomizeButton1.id = 'randomize-ships-1';\r\n    randomizeButton1.addEventListener('click', () => {\r\n      player1.board.clearBoard();\r\n      randomizeShips(player1);\r\n      renderBoard(player1.board, board1, true);\r\n    });\r\n    randomize.appendChild(randomizeButton1);\r\n    let randomizeButton2;\r\n    if (gameMode === 'player-vs-player') {\r\n      randomizeButton2 = document.createElement('button');\r\n      randomizeButton2.textContent = `Randomize ${player2.name}'s Ships`;\r\n      randomizeButton2.id = 'randomize-ships-2';\r\n      randomizeButton2.addEventListener('click', () => {\r\n        player2.board.clearBoard();\r\n        randomizeShips(player2);\r\n        renderBoard(player2.board, board2, true);\r\n      });\r\n      randomize.appendChild(randomizeButton2);\r\n    }\r\n\r\n    options.appendChild(startGameButton);\r\n  };\r\n\r\n  const setShips = (player) => {\r\n    randomizeShips(player);\r\n  };\r\n\r\n  const randomizeShips = (player) => {\r\n    Ships.forEach((shipType) => {\r\n      for (let i = 0; i < shipType.quantity; i++) {\r\n        let placed = false;\r\n        while (!placed) {\r\n          try {\r\n            const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(shipType.size);\r\n            const x = Math.floor(Math.random() * 10);\r\n            const y = Math.floor(Math.random() * 10);\r\n            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';\r\n            player.board.placeShip(x, y, ship, orientation);\r\n\r\n            placed = true;\r\n          } catch (error) {}\r\n        }\r\n      }\r\n    });\r\n  };\r\n\r\n  const switchPlayer = () => {\r\n    currentPlayer = currentPlayer === player1 ? player2 : player1;\r\n    if (\r\n      gameMode === 'player-vs-computer' &&\r\n      currentPlayer === player2 &&\r\n      gameStatus\r\n    ) {\r\n      setTimeout(computerTurn, 500);\r\n    }\r\n    showturn();\r\n  };\r\n\r\n  const showturn = () => {\r\n    turn.textContent = `${currentPlayer.name} turn`;\r\n    if (gameMode === 'player-vs-player') {\r\n      updateBoardInteractivity();\r\n    }\r\n  };\r\n\r\n  const createCell = (type, row, col) => {\r\n    const cell = document.createElement('button');\r\n    cell.classList.add('board-cell');\r\n    cell.dataset.row = row;\r\n    cell.dataset.col = col;\r\n    cell.dataset.attacked = 'false';\r\n    if (type === 'empty') {\r\n      cell.classList.add('cell-empty');\r\n    } else if (type === 'ship') {\r\n      cell.classList.add('cell-ship');\r\n    }\r\n    cell.addEventListener('click', attackHandler);\r\n\r\n    return cell;\r\n  };\r\n\r\n  const renderBoard = (board, container, isPreview = false) => {\r\n    container.innerHTML = '';\r\n    board.board.forEach((row, rowIndex) => {\r\n      row.forEach((cell, cellIndex) => {\r\n        let cellType = board.getHitStatus(rowIndex, cellIndex);\r\n        if (isPreview) {\r\n          cellType = 'empty';\r\n        }\r\n        if (gameMode === 'player-vs-computer' && container === board2) {\r\n          cellType = 'empty';\r\n        } else {\r\n          cellType = board.getHitStatus(rowIndex, cellIndex);\r\n        }\r\n        const cellElement = createCell(cellType, rowIndex, cellIndex);\r\n\r\n        container.appendChild(cellElement);\r\n      });\r\n    });\r\n  };\r\n\r\n  const showGameboard = () => {\r\n    renderBoard(player1.board, board1);\r\n    renderBoard(player2.board, board2);\r\n    showturn();\r\n  };\r\n\r\n  const computerTurn = () => {\r\n    const availableCells = Array.from(\r\n      board1.querySelectorAll('.board-cell'),\r\n    ).filter((cell) => cell.dataset.attacked === 'false');\r\n\r\n    if (availableCells.length === 0) {\r\n      return;\r\n    }\r\n\r\n    const randomCell =\r\n      availableCells[Math.floor(Math.random() * availableCells.length)];\r\n    const row = randomCell.dataset.row;\r\n    const col = randomCell.dataset.col;\r\n\r\n    attackCell(row, col);\r\n  };\r\n\r\n  const attackCell = (row, col) => {\r\n    const cell = board1.querySelector(\r\n      `.board-cell[data-row=\"${row}\"][data-col=\"${col}\"]`,\r\n    );\r\n\r\n    if (cell.dataset.attacked === 'true') {\r\n      return;\r\n    }\r\n    cell.dataset.attacked = 'true';\r\n    switchPlayer();\r\n    let response = currentPlayer.board.receiveAttack(row, col);\r\n\r\n    if (response) {\r\n      cell.classList.remove('cell-empty');\r\n      cell.classList.add('cell-hit');\r\n    } else {\r\n      cell.classList.remove('cell-empty');\r\n      cell.classList.add('cell-miss');\r\n    }\r\n    showWinner();\r\n  };\r\n\r\n  const attackHandler = (event) => {\r\n    const cell = event.currentTarget;\r\n    if (cell.dataset.attacked === 'true') {\r\n      return;\r\n    }\r\n    const row = cell.dataset.row;\r\n    const col = cell.dataset.col;\r\n\r\n    cell.dataset.attacked = 'true';\r\n    switchPlayer();\r\n    let response = currentPlayer.board.receiveAttack(row, col);\r\n\r\n    if (response) {\r\n      cell.classList.remove('cell-ship');\r\n      cell.classList.add('cell-hit');\r\n    } else {\r\n      cell.classList.remove('cell-empty');\r\n      cell.classList.add('cell-miss');\r\n    }\r\n\r\n    showWinner();\r\n  };\r\n\r\n  const showWinner = () => {\r\n    if (currentPlayer.board.allSunk()) {\r\n      switchPlayer();\r\n      message.textContent = `${currentPlayer.name} wins`;\r\n      turn.textContent = '';\r\n      newGameButton.style.display = 'block';\r\n\r\n      gameStatus = false;\r\n      newGameButton.addEventListener('click', init);\r\n      container.appendChild(newGameButton);\r\n    }\r\n  };\r\n\r\n  const updateBoardInteractivity = () => {\r\n    if (currentPlayer === player1) {\r\n      board1.querySelectorAll('.board-cell').forEach((cell) => {\r\n        cell.disabled = true;\r\n        cell.classList.remove('hide');\r\n      });\r\n      board2.querySelectorAll('.board-cell').forEach((cell) => {\r\n        cell.disabled = false;\r\n        let status = cell.dataset.attacked;\r\n        if (status === 'false') {\r\n          cell.classList.add('hide');\r\n        } else if (status === 'true') {\r\n          cell.classList.remove('hide');\r\n        }\r\n      });\r\n    } else {\r\n      board2.querySelectorAll('.board-cell').forEach((cell) => {\r\n        cell.disabled = true;\r\n        cell.classList.remove('hide');\r\n      });\r\n      board1.querySelectorAll('.board-cell').forEach((cell) => {\r\n        cell.disabled = false;\r\n\r\n        let status = cell.dataset.attacked;\r\n        if (status === 'false') {\r\n          cell.classList.add('hide');\r\n        } else if (status === 'true') {\r\n          cell.classList.remove('hide');\r\n        }\r\n      });\r\n    }\r\n  };\r\n\r\n  const init = () => {\r\n    const selection = document.querySelector('.mode-selection');\r\n    selection.style.display = 'block';\r\n    newGameButton.style.display = 'none';\r\n    message.textContent = '';\r\n    board1.innerHTML = '';\r\n    board2.innerHTML = '';\r\n    document\r\n      .getElementById('player-vs-player')\r\n      .addEventListener('click', () => {\r\n        gameMode = 'player-vs-player';\r\n        newGame();\r\n        selection.style.display = 'none';\r\n      });\r\n    document\r\n      .getElementById('player-vs-computer')\r\n      .addEventListener('click', () => {\r\n        gameMode = 'player-vs-computer';\r\n        newGame();\r\n        selection.style.display = 'none';\r\n      });\r\n  };\r\n\r\n  return {\r\n    init,\r\n  };\r\n};\r\n\r\nconst game = Game();\r\n\r\ngame.init();\r\n\n\n//# sourceURL=webpack://project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nclass Player {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://project-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n    this.sunk = false;\r\n  }\r\n\r\n  hit() {\r\n    this.hits += 1;\r\n    this.isSunk();\r\n  }\r\n\r\n  isSunk() {\r\n    this.sunk = this.hits == this.length ? true : false;\r\n    return this.sunk;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;