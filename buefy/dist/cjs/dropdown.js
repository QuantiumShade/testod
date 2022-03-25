'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-45739695.js');
require('./helpers.js');
require('./chunk-9103eeda.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-841c0e0f.js');
require('./chunk-ae7e641a.js');
var __chunk_15 = require('./chunk-03279fd8.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Dropdown);
    __chunk_5.registerComponent(Vue, __chunk_15.DropdownItem);
  }
};
__chunk_5.use(Plugin);

exports.BDropdown = __chunk_15.Dropdown;
exports.BDropdownItem = __chunk_15.DropdownItem;
exports.default = Plugin;
