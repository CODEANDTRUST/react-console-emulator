"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_reactInnerHtml=_interopRequireDefault(require("react-inner-html")),_defaults=_interopRequireDefault(require("defaults")),_TerminalMessage=_interopRequireDefault(require("./defs/types/TerminalMessage")),_TerminalMessage2=_interopRequireDefault(require("./defs/styles/TerminalMessage"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}var TerminalMessage=function(a){function b(){return(0,_classCallCheck2["default"])(this,b),c.apply(this,arguments)}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this.props,b=a.content,c=a.style,d=a.className,e={message:(0,_defaults["default"])(c,_TerminalMessage2["default"])};return this.props.dangerMode?_react["default"].createElement("div",(0,_extends2["default"])({className:d,style:e.message},(0,_reactInnerHtml["default"])(b))):_react["default"].createElement("div",{className:d,style:e.message},b)}}]),b}(_react.Component);exports["default"]=TerminalMessage,(0,_defineProperty2["default"])(TerminalMessage,"propTypes",_TerminalMessage["default"]);