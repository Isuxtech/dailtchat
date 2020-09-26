(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homeBanner"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeBanner.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeBanner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      current_count: 0,
      quotes: [{
        title: 'the king is God',
        body: ' There is no King but God who sits in heaven and on earth',
        name: 'James Bond'
      }, {
        title: 'Amen to the king is God',
        body: ' There is no King but God who sits in heaven and on earth',
        name: 'James Bond'
      }, {
        title: 'again the king is God',
        body: ' There is no King but God who sits in heaven and on earth',
        name: 'James Bond'
      }, {
        title: 'last the king is God',
        body: ' There is no King but God who sits in heaven and on earth',
        name: 'James Bond'
      }],
      shows: false,
      duration: 8000
    };
  },
  computed: {
    del: function del() {
      var _this = this;

      var loopinterval = setInterval(function () {
        _this.getQuote();
      }, this.duration);
    }
  },
  methods: {
    getQuote: function getQuote() {
      var _this2 = this;

      var timer = setTimeout(function () {
        _this2.shows = !_this2.shows;

        if (_this2.current_count < _this2.quotes.length - 1) {
          _this2.current_count++;
        } else {
          _this2.current_count = 0;
        }
      }, 7000);
      this.shows = !this.shows;
    }
  },
  mounted: function mounted() {
    this.del;
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(loopinterval);
    clearTimeout(timer);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeBanner.vue?vue&type=template&id=32766ff6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homeBanner.vue?vue&type=template&id=32766ff6& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "banner" }, [
    _vm.shows
      ? _c("section", { staticClass: "banner-roller" }, [
          _c("h2", [_vm._v(_vm._s(_vm.quotes[_vm.current_count].title))]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.quotes[_vm.current_count].body))]),
          _vm._v(" "),
          _c("strong", [_vm._v(_vm._s(_vm.quotes[_vm.current_count].name))])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/homeBanner.vue":
/*!************************************************!*\
  !*** ./resources/js/components/homeBanner.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeBanner_vue_vue_type_template_id_32766ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeBanner.vue?vue&type=template&id=32766ff6& */ "./resources/js/components/homeBanner.vue?vue&type=template&id=32766ff6&");
/* harmony import */ var _homeBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeBanner.vue?vue&type=script&lang=js& */ "./resources/js/components/homeBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _homeBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeBanner_vue_vue_type_template_id_32766ff6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeBanner_vue_vue_type_template_id_32766ff6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/homeBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/homeBanner.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/homeBanner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./homeBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/homeBanner.vue?vue&type=template&id=32766ff6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/homeBanner.vue?vue&type=template&id=32766ff6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeBanner_vue_vue_type_template_id_32766ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./homeBanner.vue?vue&type=template&id=32766ff6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homeBanner.vue?vue&type=template&id=32766ff6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeBanner_vue_vue_type_template_id_32766ff6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeBanner_vue_vue_type_template_id_32766ff6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);