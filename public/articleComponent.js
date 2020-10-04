(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articleComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/articleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'articles',
  data: function data() {
    return {
      is_loaded: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    'article': 'GET_ARTICLE'
  })),
  methods: {
    getPost: function getPost(slug) {
      var _this = this;

      axios.get("/api/posts/".concat(slug)).then(function (response) {
        _this.$store.dispatch('storeArticle', {
          article: response.data
        });

        _this.is_loaded = true;
      })["catch"](function (err) {
        _this.is_loaded = false; // tell the user what happened and then
        // return the user to the home path immediately
      });
    }
  },
  created: function created() {
    this.getPost(this.$route.params.slug);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nsection[data-v-e5d1511c]{\n   background-color: white;\n    width:100%;\n}\n.intro[data-v-e5d1511c]{\n    transform: translateY(-25%);\n    background-color:white;\n    width:50%;\n    padding:0 20px 30px 30px;\n    font-weight:600;\n    margin-left:30px;\n    box-shadow: 0px 0px 4px 1px gray;\n    border-radius: 5px;\n    position:relative;\n    font-family: 'Roboto', sans-serif !important;\n}\n.category[data-v-e5d1511c]{\n    color:white;\n    padding:10px;\n    background-color:saddlebrown;\n    transform:translateY(-4px);\n    border-radius: 5px;\n}\n.article-date[data-v-e5d1511c]{\n    position:absolute;\n    top:95%;\n    right:0;\n    font-size:0.8rem;\n    color:saddlebrown;\n    padding:0px 10px 5px 10px;\n    background-color: white;\n    border-radius:0 0 10px 10px;\n}\n.intro-title[data-v-e5d1511c]{\n    margin-bottom: 20px;\n}\n.intro-content[data-v-e5d1511c]{\n    font-style: italic;\n    color:gray;\n    font-family: 'Montserrat', sans-serif!important;\n    font-weight: 400;\n}\n.wrapper[data-v-e5d1511c]{\n    line-height: 1.4;\n    font-size: 1.2rem;\n    transform: translateY(-20px);\n    font-family: 'Roboto', sans-serif !important;\n    margin-top:50px;\n}\narticle[data-v-e5d1511c]{\n    width:80%;\n    margin:auto;\n}\n@media (max-width:440px){\n.intro[data-v-e5d1511c]{\n        width:95%;\n        font-size: 1em ;\n        margin-left:5px;\n        padding:0 10px 15px 15px;\n        transform: translateY(-15%);\n}\narticle[data-v-e5d1511c]{\n        width:98%;\n        margin:auto;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "div",
      {
        staticClass: "intro",
        style: { "box-shadow": "0px 0px 4px 1px " + _vm.article.color }
      },
      [
        _c("h4", {
          staticClass: "category",
          style: { "background-color": _vm.article.color },
          domProps: { textContent: _vm._s(_vm.article.category_name) }
        }),
        _vm._v(" "),
        _c("h2", {
          staticClass: "intro-title",
          domProps: { textContent: _vm._s(_vm.article.title) }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "intro-content" }, [
          _vm._m(0),
          _vm._v("\n            " + _vm._s(_vm.article.title) + "\n        ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "article-date",
            style: {
              color: "" + _vm.article.color,
              "box-shadow":
                "2px 2px 2px 0px " +
                _vm.article.color +
                ", -2px 2px 2px 0px " +
                _vm.article.color
            }
          },
          [
            _vm._v(" " + _vm._s(_vm.article.dayName) + "\n            "),
            _c(
              "span",
              { staticStyle: { "font-size": "1.3rem", padding: "5px" } },
              [_vm._v(_vm._s(_vm.article.day))]
            ),
            _vm._v("\n            " + _vm._s(_vm.article.month) + "\n        ")
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "wrapper" }, [
      _c("article", [
        _c("p", [
          _vm._v("\n            " + _vm._s(_vm.article.body) + "\n          ")
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [_vm._v("Abstract "), _c("br")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/articleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/articleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articleComponent_vue_vue_type_template_id_e5d1511c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true& */ "./resources/js/components/articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true&");
/* harmony import */ var _articleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/articleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _articleComponent_vue_vue_type_style_index_0_id_e5d1511c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css& */ "./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _articleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _articleComponent_vue_vue_type_template_id_e5d1511c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _articleComponent_vue_vue_type_template_id_e5d1511c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e5d1511c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/articleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/articleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/articleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./articleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_style_index_0_id_e5d1511c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=style&index=0&id=e5d1511c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_style_index_0_id_e5d1511c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_style_index_0_id_e5d1511c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_style_index_0_id_e5d1511c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_style_index_0_id_e5d1511c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_style_index_0_id_e5d1511c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_template_id_e5d1511c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/articleComponent.vue?vue&type=template&id=e5d1511c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_template_id_e5d1511c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComponent_vue_vue_type_template_id_e5d1511c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);