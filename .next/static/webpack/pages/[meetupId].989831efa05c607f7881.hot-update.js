webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meetup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.jsx");


var _jsxFileName = "G:\\fci\\kalbonyan_elmarsos\\Udemy\\03.React-The-Complete-Guide(inclHooks,ReactRouter,Redux)\\23.A-Pretty-Deep-Dive-Introduction-to-Next.js\\practical-demo\\pages\\[meetupId]\\index.js";



var __N_SSG = true;
function Meetup(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Adding new Meetup "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "You can save new meetup online mongodb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: props.meetup.title,
      src: props.meetup.image,
      description: props.meetup.description,
      address: props.meetup.address // title={"A First Meetup"}
      // src={
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      // }
      // description={"This is a first meetup!"}
      // address={"Some address 5, 12345 Some City"}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Meetup;

var _c;

$RefreshReg$(_c, "Meetup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXAiLCJwcm9wcyIsIm1lZXR1cCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3BDLHNCQUNFO0FBQUEsZUFDRyxHQURILGVBRUUscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVNFLHFFQUFDLHlFQUFEO0FBQ0UsV0FBSyxFQUFFQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FEdEI7QUFFRSxTQUFHLEVBQUVGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUZwQjtBQUdFLGlCQUFXLEVBQUVILEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxXQUg1QjtBQUlFLGFBQU8sRUFBRUosS0FBSyxDQUFDQyxNQUFOLENBQWFJLE9BSnhCLENBS0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBLGtCQURGO0FBd0JEO0tBekJ1Qk4sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLjk4OTgzMWVmYTA1YzYwN2Y3ODgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWV0dXAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QWRkaW5nIG5ldyBNZWV0dXAgPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJZb3UgY2FuIHNhdmUgbmV3IG1lZXR1cCBvbmxpbmUgbW9uZ29kYlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwRGV0YWlsc1xyXG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXAudGl0bGV9XHJcbiAgICAgICAgc3JjPXtwcm9wcy5tZWV0dXAuaW1hZ2V9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cC5kZXNjcmlwdGlvbn1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXAuYWRkcmVzc31cclxuICAgICAgICAvLyB0aXRsZT17XCJBIEZpcnN0IE1lZXR1cFwifVxyXG4gICAgICAgIC8vIHNyYz17XHJcbiAgICAgICAgLy8gICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIlxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBkZXNjcmlwdGlvbj17XCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwIVwifVxyXG4gICAgICAgIC8vIGFkZHJlc3M9e1wiU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwifVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKGNvbnRleHQpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL21haG1vdWQ6YWRtaW5AdGFza21hbmFnZXJkYi5yZDJmZi5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBtZWFucyBpIGNsaWVudCB1c2VkIGFueSBkeW5hbWljIHJvdXRlIHJhdGhlciB0aGFuIG0xLCBtMiB0aGVuIGZpcmUgNDA0IGVycm9yLCwsLCBpZiB0cnVlIHRoaXMgbWVhbnMgYWNjZXB0IGFueSByb3V0ZVxyXG4gICAgcGF0aHM6IG1lZXR1cHMubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IGl0ZW0uX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICAgIC8vIHBhdGhzOiBbXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBwYXJhbXM6IHtcclxuICAgIC8vICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIHBhcmFtczoge1xyXG4gICAgLy8gICAgICAgbWVldHVwSWQ6IFwibTJcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gXSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuXHJcbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vbWFobW91ZDphZG1pbkB0YXNrbWFuYWdlcmRiLnJkMmZmLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRiID0gY29ubmVjdGlvbi5kYigpO1xyXG4gIGNvbnN0IG1lZXRVcENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgdGFyZ2V0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0VXBDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgX2lkOiBPYmplY3RJZChtZWV0dXBJZCksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXA6IHtcclxuICAgICAgICBpZDogdGFyZ2V0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgaW1hZ2U6IHRhcmdldGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgIHRpdGxlOiB0YXJnZXRlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiB0YXJnZXRlZE1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0YXJnZXRlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgICAgLy8gbWVldHVwOiB7XHJcbiAgICAgIC8vICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcclxuICAgICAgLy8gICBzcmM6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbiAgICAgIC8vICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==