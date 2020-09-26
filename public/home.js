(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  data: function data() {
    return {
      'article': [],
      'scrollHeight': null,
      'current_page': null,
      'last_page': null,
      'next_page_url': null,
      'nextPagepresent': true,
      'no_article': false
    };
  },
  created: function created() {
    this.getAxios(); // console.log(this.getNumber)
  },
  computed: {
    // explain of getting items in vuex store
    getNumber: function getNumber() {
      return this.$store.getters.GET_NUMBER;
    }
  },
  methods: {
    getAxios: function getAxios() {
      var _this = this;

      var nextPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api/posts';
      axios.get(nextPage).then(function (resolve) {
        var page_result = resolve.data;

        var _iterator = _createForOfIteratorHelper(page_result.data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var more_articles = _step.value;

            _this.article.push(more_articles);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this.current_page = page_result.current_page;
        _this.last_page = page_result.last_page;
        _this.next_page_url = page_result.next_page_url;

        if (_this.current_page == _this.last_page) {
          _this.nextPagepresent = false;
        }
      })["catch"](function (err) {
        console.log(err, 'error was encountered in the auto getter');
        _this.no_article = true;
      });
    },
    loadNext: function loadNext() {
      this.getAxios(this.next_page_url);
    } // postLoader(){
    //  const obs = this.$refs['observeTarget'];
    // parent.observer = new IntersectionObserver((entries,onserver)=>{
    //         entries.forEach((entry)=>{
    //             if(entry.isIntersecting)
    //             {
    //                 // console.log(entry)
    //                 if(this.current_page !== this.last_page){
    //                     this.getAxios(this.next_page_url)
    //                     console.log(window.screenX)
    //                 }else{
    //                     onserver.unobserve(obs);
    //                 }
    //             }
    //
    //
    //         })
    //     }, {root:null, threshold:1, rootMargin:'0px 0px 0px 0px'}
    // )
    // parent.observer.observe(this.$refs['observeTarget'])
    //   }

  } // do the watching here

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("main", [
      _vm.no_article
        ? _c("h2", { class: ["empty-post"] }, [_vm._v("no post found")])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        _vm._l(_vm.article, function(articles) {
          return _c("div", { key: articles.id, staticClass: "card" }, [
            _c("img", {
              staticClass: "card-img",
              attrs: { src: articles.image_url, alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-content" }, [
              _c("h2", {
                staticClass: "card-title card-link",
                domProps: { textContent: _vm._s(articles.title) },
                on: {
                  click: function($event) {
                    return _vm.$router.push({
                      name: "article",
                      params: { slug: articles.slug }
                    })
                  }
                }
              }),
              _vm._v(" "),
              _c("p", {
                staticClass: "card-text",
                domProps: { textContent: _vm._s(articles.abstract) }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "card-date",
                style: { "background-color": articles.color }
              },
              [
                _c("h4", {
                  domProps: { textContent: _vm._s(articles.dayName) }
                }),
                _vm._v(" "),
                _c(
                  "h4",
                  {
                    staticClass: "card-day",
                    domProps: { textContent: _vm._s(articles.day) }
                  },
                  [_vm._v("12")]
                ),
                _vm._v(" "),
                _c(
                  "h4",
                  {
                    staticClass: "card-year",
                    domProps: { textContent: _vm._s(articles.month) }
                  },
                  [_vm._v("FEB")]
                )
              ]
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "next-wrapper" }, [
        _vm.nextPagepresent
          ? _c("button", { staticClass: "next", on: { click: _vm.loadNext } }, [
              _vm._v(" Next")
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=fa6affac& */ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=fa6affac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);