webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n    margin-bottom: 40px;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 22%;\n    overflow: auto;\n  }\n}\n\nh1,h2,a,p{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>About BTS</h1>\n          <p>\n            Business Transfers & Strategies provides services to individuals seeking to buy a small or\n            mid-sized business and to companies seeking to expand through acquisition.  BTS provides\n            the business experience and methodologies buyers\n            need in order to realize their goal of business ownership.\n            We provide an efficient and proven method to confidentially\n            and objectively advise buyers on business search, due diligence, deal structure and financing.\n            Our individual clients are current or former executives making the transition\n            from the corporate world to independent business ownership.  Our corporate clients are mid-sized companies ($5M - $50M annual revenue) seeking to expand capacity, capabilities, or customers.  Our specialty is matching specific client requirements with acquisition targets that are not advertised for sale in the public market.  As a result, our clients have the benefit of exclusive access to these unadvertised sellers.  Our primary focus is manufacturing, construction, distribution and service businesses with up to $50M in annual revenues\n            and that produce an EBITDA of up to $10M.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-about-us',
        template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-us/btsoverview/btsoverview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));\n  background-repeat:no-repeat;\n\t/*@include background-size(cover);*/\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n    margin-bottom: 40px;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 22%;\n    overflow: auto;\n  }\n}\n\nh1,h2,a,p{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/btsoverview/btsoverview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>BTS Overview</h1>\n          <p>\n            Business Transfers & Strategies provides services\n            to individuals seeking to buy a small or mid-sized business and to companies seeking to\n            expand through acquisition.  BTS provides the business experience\n            and methodologies buyers need in order to realize their goal of business ownership.  We\n            provide an efficient and proven method to confidentially and objectively advise buyers on business search, due\n            diligence, deal structure and financing.\n            Our individual clients are current or former executives making the transition from the\n            corporate world to independent business ownership.  Our corporate clients are mid-sized\n            companies ($5M - $50M annual revenue) seeking to expand capacity, capabilities, or\n            customers.  Our specialty is matching specific client requirements with acquisition\n            targets that are not advertised for sale in the public market.  As a result, our\n            clients have the benefit of exclusive access to these unadvertised sellers.  Our primary focus is\n            manufacturing, construction, distribution and service businesses with up to $50M in annual revenues\n            and that produce an EBITDA of up to $10M.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/btsoverview/btsoverview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BTSOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BTSOverviewComponent = (function () {
    function BTSOverviewComponent() {
    }
    BTSOverviewComponent.prototype.ngOnInit = function () {
    };
    return BTSOverviewComponent;
}());
BTSOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-btsoverview',
        template: __webpack_require__("../../../../../src/app/about-us/btsoverview/btsoverview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-us/btsoverview/btsoverview.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], BTSOverviewComponent);

//# sourceMappingURL=btsoverview.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-us/transactions/transactions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html { overflow-y: scroll; }\nbody { position: absolute; }\n\n#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    max-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n    overflow-y: scroll;\n    padding-bottom: 5%;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:repeat;\n\t/*@include background-size(cover);*/\n\tbackground-attachment: scroll;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n  height: auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  transition: box-shadow .3s ease;\n  overflow: auto;\n\t&:active{\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 90vw;\n    max-height: 100vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: 100vh;\n  }\n}\n\nh1,h2,a,p, li, table{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n    overflow: scroll;\n\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n/*th, td { resize: both; overflow: auto; }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Transaction Experience & Industry Coverage</h1>\n          <p>\n            The majority of our transactions have been within the Manufacturing, Construction,\n            Distribution/Wholesaling and B2B Service industries,\n            and have been within the following lines of business:\n          </p>\n          <div class=\"table-responsive\">\n            <table border=\"2\" class=\"table\"align=\"center\">\n            <tbody>\n              <tr valign=\"middle\" align=\"center\">\n                <td align=\"center\">\n                  <p align=\"center\"><strong>Manufacturing</strong></p>\n                </td>\n                <td>\n                  <p align=\"center\"><strong>Construction\n                    </strong></p>\n                </td>\n              </tr>\n              <tr>\n                <td>Metals</td>\n                <td>HVAC/Sheet Metal\n                   <br>\n                </td>\n\n              </tr>\n              <tr>\n                <td>Plastics</td>\n                <td>Custom Cabinetry<br>\n                </td>\n              </tr>\n              <tr>\n                <td>Foods</td>\n                <td>Waterproofing </td>\n\n              </tr>\n              <tr>\n                <td>Medical Devices<br>\n                </td>\n                <td>Abatement</td>\n\n              </tr>\n              <tr>\n                <td>Chemicals</td>\n                <td>Marble/Granite\n                </td>\n\n              </tr>\n              <tr>\n                <td>Instruments</td>\n                <td>Millwork</td>\n\n              </tr>\n              <tr>\n                <td>Electronics\n                </td>\n                <td>Flooring</td>\n\n              </tr>\n              <tr valign=\"middle\" align=\"center\">\n                <td>\n                  <p align=\"center\"><strong>Distribution/Wholesaling</strong></p>\n                </td>\n                <td>\n                  <p align=\"center\"><strong>Services</strong>\n                  </p>\n                </td>\n              </tr>\n              <tr>\n                <td>Industrial\n                  Supplies\n                </td>\n                <td>Printing</td>\n              </tr>\n              <tr>\n                <td>Foods</td>\n                <td>Publishing</td>\n              </tr>\n              <tr>\n                <td>Durables</td>\n                <td>Laboratory</td>\n              </tr>\n              <tr>\n                <td>Giftware</td>\n                <td>Transportation\n                </td>\n              </tr>\n              <tr>\n                <td>Housewares</td>\n                <td>Warehousing</td>\n              </tr>\n              <tr>\n                <td>Tools</td>\n                <td>Calibration<br>\n                </td>\n              </tr>\n              <tr>\n                <td>Home Furnishings</td>\n                <td>Research</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n          <p>\n            The following is a sample of companies (with annual revenues) uncovered for our clients:\n          </p>\n          <div class=\"table-responsive\">\n            <table border=\"0\" class=\"table\"align=\"center\">\n              <tbody>\n                <tr>\n                  <td><u>Manufacturers</u></td>\n                  <td></td>\n                  <td>\n                  </td>\n                  <td><u>Distributors</u>\n                    <br>\n                  </td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td>Architectural\n                    Metalwork </td>\n                  <td>$1.5M</td>\n                  <td></td>\n                  <td>Craftwork Import </td>\n                  <td>$6.0M</td>\n                </tr>\n                <tr>\n                  <td>Household Wares </td>\n                  <td>$3.5M</td>\n                  <td></td>\n                  <td>Art Licensing/Dist.\n                    </td>\n                  <td>$6.0M</td>\n                </tr>\n                <tr>\n                  <td>Food Products </td>\n                  <td>$3.0M</td>\n                  <td></td>\n                  <td>Industrial Cleaning\n                    Supplies <br>\n                  </td>\n                  <td>$6.0M<br>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"vertical-align:\n                    top;\">Custom\n                    Woodworking <br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\">$7.5M<br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\"><br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\"><br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\"><br>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Medical Consumables\n                    <br>\n                  </td>\n                  <td>$3.0M<br>\n                  </td>\n                  <td></td>\n                  <td><u>Service Companies</u></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td>Medical Plastics </td>\n                  <td>$6.0M</td>\n                  <td></td>\n                  <td>Software Company <u></u></td>\n                  <td>$1.2M</td>\n                </tr>\n                <tr>\n                  <td>Metal Company </td>\n                  <td>$2.4M</td>\n                  <td></td>\n                  <td>Rigging </td>\n                  <td>$4.0M</td>\n                </tr>\n                <tr>\n                  <td>Sheet Metal </td>\n                  <td>$3.5M <br>\n                  </td>\n                  <td></td>\n                  <td>Abatement Company </td>\n                  <td>$2.0M</td>\n                </tr>\n                <tr>\n                  <td>Medical Implants <br>\n                  </td>\n                  <td>$13.0M<br>\n                  </td>\n                  <td></td>\n                  <td>Medical Records </td>\n                  <td>$9.0M<br>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"vertical-align:\n                    top;\">Biological\n                    Reagents\n                    <br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\">$6.0M<br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\"><br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\"><br>\n                  </td>\n                  <td style=\"vertical-align:\n                    top;\"><br>\n                  </td>\n                </tr>\n              </tbody>\n                                    </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsComponent = (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    return TransactionsComponent;
}());
TransactionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-transactions',
        template: __webpack_require__("../../../../../src/app/about-us/transactions/transactions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-us/transactions/transactions.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], TransactionsComponent);

//# sourceMappingURL=transactions.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-us/who-we-serve/who-we-serve.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  html, body {\n    overflow: scroll;\n  }\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    padding-bottom: 5%;\n    overflow: auto;\n  }\n}\n\nh1,h2,a,p, li{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/who-we-serve/who-we-serve.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Who We Serve</h1>\n          <p>\n            Our services are for well-qualified buyers with management\n            experience and sufficient capital to purchase and manage a\n            small or mid-sized business.  Our clients hire us because\n            they do not want to become experts at finding and buying businesses.\n            Our clients seek businesses with \"upside potential\" where they\n            can apply their skills, experience, and interests to grow an already\n            profitable, healthy business.\n          </p>\n\n          <p class=\"goLeft\">\n            Our typical individual client's background includes:\n          </p>\n          <ul>\n            <li>\n              15+ years of corporate management or business ownership experience\n            </li>\n            <li>\n              Liquid assets or equity of at least $500K to invest in the transaction\n            </li>\n            <li>\n              Sales & Marketing, General Management and/or Operations expertise\n            </li>\n            <li>\n              Directly applicable or transferable experience within the industry of the business being acquired\n            </li>\n          </ul>\n\n          <p class=\"goLeft\">\n            Our typical corporate client has the following attributes:\n          </p>\n          <ul>\n            <li>\n              Established business with $5M - $50M in annual revenue\n            </li>\n            <li>\n              Seeking to acquire a company based in North America\n            </li>\n            <li>\n              Willing to pay fair market price for additional capacity, capabilities, product lines or customers\n            </li>\n            <li>\n              Directly applicable or transferable experience within the industry of the business being acquired\n            </li>\n          </ul>\n\n          <p>\n            We also assist Search Funds, Family Offices and Private Equity Groups who are seeking acquisition opportunities.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/who-we-serve/who-we-serve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoWeServeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhoWeServeComponent = (function () {
    function WhoWeServeComponent() {
    }
    WhoWeServeComponent.prototype.ngOnInit = function () {
    };
    return WhoWeServeComponent;
}());
WhoWeServeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-who-we-serve',
        template: __webpack_require__("../../../../../src/app/about-us/who-we-serve/who-we-serve.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-us/who-we-serve/who-we-serve.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], WhoWeServeComponent);

//# sourceMappingURL=who-we-serve.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-us/why-hire-us/why-hire-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  html, body {\n    overflow: scroll;\n  }\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    padding-bottom: 5%;\n    overflow: auto;\n  }\n}\n\nh1,h2,a,p, li{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/why-hire-us/why-hire-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Why Hire Us?</h1>\n          <p>\n            Acquiring a business is an important decision - one\n            where you can not afford to make mistakes.  It takes many transactions to know where the pitfalls\n            can occur and how to avoid them.  Our clients do not want to become experts at finding and buying businesses - they want to apply their management\n            skills as soon as possible in a great business.\n            Many times, our clients come to us\n            after looking for a suitable acquisition target for\n            over a year to no avail.  They have wasted significant time and money.\n          </p>\n\n          <p class=\"goLeft\">\n            Our typical individual client's background includes:\n          </p>\n          <ul>\n            <li>\n              Did you know that only 15% of the businesses sold each year advertised their business for sale in the public market?\n            </li>\n            <li>\n              Do you know how to access the other 85%?\n            </li>\n          </ul>\n\n        <p>\n          We do - its our specialty!  And, we don't just uncover a few acquisition targets - we uncover many.\nIt is not uncommon for our clients to look at dozens of companies that meet their acquisition criteria.  Our lead generation system allows our clients to spend the majority of their time screening and analyzing, not searching.  Very often, our client is the only buyer talking to the business seller.\n\nBottom line - Our clients find more businesses, find them faster and get a better deal with us on their team versus going it alone!\n        </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/why-hire-us/why-hire-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyHireUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhyHireUsComponent = (function () {
    function WhyHireUsComponent() {
    }
    WhyHireUsComponent.prototype.ngOnInit = function () {
    };
    return WhyHireUsComponent;
}());
WhyHireUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-why-hire-us',
        template: __webpack_require__("../../../../../src/app/about-us/why-hire-us/why-hire-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-us/why-hire-us/why-hire-us.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], WhyHireUsComponent);

//# sourceMappingURL=why-hire-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/advisors/advisors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n    margin-bottom: 40px;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 22%;\n    overflow: auto;\n  }\n}\n\nh1,h2,a,p,li{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  margin-top: 0px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.fa-file-text {\n  color: white;\n}\n\n.goLeft , li{\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advisors/advisors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Our Advisors</h1>\n          <p>\n            Business Transfers & Strategies is built on a foundation of professionalism, integrity and business acumen.  Clients receive personalized service that supports them in the successful acquisition of a profitable business.\n          </p>\n          <table width=\"100%\" cellspacing=\"0\" cellpadding=\"5\" border=\"0\">\n                            <tbody>\n                              <tr>\n                                <td valign=\"baseline\" align=\"center\">\n                                  <table>\n                                    <tbody>\n                                      <tr>\n                                        <td align=\"center\">\n                                          <table width=\"100%\" cellspacing=\"0\" border=\"0\">\n                                            <tbody>\n                                              <tr>\n                                                <td><img src=\"../assets/stevePhoto.jpg\" class=\"img-responsive\"></td>\n                                              </tr>\n                                              <tr>\n                                                <td align=\"center\"></td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n                                        </td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                </td>\n                                <td width=\"100%\">\n                                  <div align=\"left\">\n                                    <p><strong>Steven Smith,</strong>\n                                      BSME, MBA, Principal and\n                                      co-founder of <strong>Business\n                                        Transfers &amp; Strategies (BTS)</strong>,<strong>\n                                      </strong>has a variety of business\n                                      experience, primarily within the\n                                      disciplines of marketing,\n                                      sales,product management,\n                                      finance\n                                      andlegal.Prior\n                                      to co-founding BTS, Steven spent\n                                      nearly fifteen years in the high\n                                      technology sector, where he was\n                                      instrumental in the hyper-growth\n                                      of several pre- and post-IPO\n                                      companies. His resume\n                                      includes such companies as Xircom,\n                                      Hayes, Digital and CMGI.\n                                      Steven's unique blend\n                                      ofexpertiseallows him\n                                      to quickly recognize and assess\n                                      opportunities, skillfully\n                                      construct the acquisition\n                                      structure and finalize business\n                                      terms, and successfully close\n                                      transactions.His careful\n                                      analysisof business\n                                      informationandcollaborative\n                                      styleproduces a win-win for\n                                      both the buyer and the\n                                      seller.</p>\n                                    <p>Steve can be reached at <a href=\"mailto:steve.smith@business-transfers.com\">steve.smith@business-transfers.com</a></p>\n                                    <hr></div>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n\n\n                          <table width=\"100%\" cellspacing=\"0\" cellpadding=\"5\" border=\"0\">\n                                            <tbody>\n                                              <tr>\n                                                <td valign=\"baseline\" align=\"center\">\n                                                  <table>\n                                                    <tbody>\n                                                      <tr>\n                                                        <td align=\"center\">\n                                                          <table width=\"100%\" cellspacing=\"0\" border=\"0\">\n                                                            <tbody>\n                                                              <tr>\n                                                                <td><img src=\"../assets/brehnPhoto.jpg\" class=\"img-responsive\"></td>\n                                                              </tr>\n                                                              <tr>\n                                                                <td align=\"center\"></td>\n                                                              </tr>\n                                                            </tbody>\n                                                          </table>\n                                                        </td>\n                                                      </tr>\n                                                    </tbody>\n                                                  </table>\n                                                </td>\n                                                <td width=\"100%\">\n                                                  <div align=\"left\">\n                                                    <p><strong>Brehn&nbsp;Smith,</strong>\n                                      BSAE, MBA, Principal and\n                                      co-founder of&nbsp; <strong>Business\n                                        Transfers &amp; Strategies (BTS)</strong>,&nbsp;has\n\n                                      20 years international experience\n                                      in engineering, program\n                                      management,&nbsp;and operations\n                                      management with such companies as\n                                      HP, Agilent, Cisco\n                                      Systems,&nbsp;and Philips\n                                      Electronics.&nbsp;\n                                      She&nbsp;applies this\n                                      experience&nbsp;in evaluating the\n                                      strength of company business and\n                                      operations systems.&nbsp; Using\n                                      her Six Sigma Blackbelt skills,\n                                      she quickly gathers client\n                                      requirements, assesses business\n                                      strengths and weaknesses,&nbsp;and\n                                      matches&nbsp;clients to\n                                      appropriate businesses.&nbsp; She\n                                      is instrumental in conducting Due\n                                      Diligence and managing the\n                                      acquisition process to a timely\n                                      completion.&nbsp; In addition to\n                                      her corporate\n                                      experience,&nbsp;she&nbsp;has\n                                      been&nbsp;a successful consultant\n                                      and trainer for nearly 15\n                                      years.&nbsp; </p>\n                                                    <p>Brehn can be reached at <a href=\"mailto:brehn.smith@business-transfers.com\">brehn.smith@business-transfers.com</a></p>\n                                                    <hr></div>\n                                                </td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n\n\n\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/advisors/advisors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvisorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvisorsComponent = (function () {
    function AdvisorsComponent() {
    }
    AdvisorsComponent.prototype.ngOnInit = function () {
    };
    return AdvisorsComponent;
}());
AdvisorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-advisors',
        template: __webpack_require__("../../../../../src/app/advisors/advisors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/advisors/advisors.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdvisorsComponent);

//# sourceMappingURL=advisors.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-xs-12 {\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2\">\n      <app-side-bar></app-side-bar>\n    </div>\n    <div class=\"col-xs-12 col-md-10\">\n      <router-outlet>\n        <!-- <app-home-slide [@routerTransition]=\"\"></app-home-slide>\n        <app-about-us [@routerTransition]=\"\"></app-about-us>\n        <app-btsoverview [@routerTransition]=\"\"></app-btsoverview>\n        <app-who-we-serve [@routerTransition]=\"\"></app-who-we-serve>\n        <app-transactions [@routerTransition]=\"\"></app-transactions>\n        <app-in-the-news [@routerTransition]=\"\"></app-in-the-news> -->\n      </router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_slide_home_slide_component__ = __webpack_require__("../../../../../src/app/home-slide/home-slide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_us_btsoverview_btsoverview_component__ = __webpack_require__("../../../../../src/app/about-us/btsoverview/btsoverview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_us_who_we_serve_who_we_serve_component__ = __webpack_require__("../../../../../src/app/about-us/who-we-serve/who-we-serve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_us_transactions_transactions_component__ = __webpack_require__("../../../../../src/app/about-us/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_us_why_hire_us_why_hire_us_component__ = __webpack_require__("../../../../../src/app/about-us/why-hire-us/why-hire-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__in_the_news_in_the_news_component__ = __webpack_require__("../../../../../src/app/in-the-news/in-the-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__process_process_component__ = __webpack_require__("../../../../../src/app/process/process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__process_phase1_phase1_component__ = __webpack_require__("../../../../../src/app/process/phase1/phase1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__process_phase2_phase2_component__ = __webpack_require__("../../../../../src/app/process/phase2/phase2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__process_phase3_phase3_component__ = __webpack_require__("../../../../../src/app/process/phase3/phase3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__advisors_advisors_component__ = __webpack_require__("../../../../../src/app/advisors/advisors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_slide_home_slide_component__["a" /* HomeSlideComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'btsoverview', component: __WEBPACK_IMPORTED_MODULE_8__about_us_btsoverview_btsoverview_component__["a" /* BTSOverviewComponent */] },
    { path: 'who-we-serve', component: __WEBPACK_IMPORTED_MODULE_9__about_us_who_we_serve_who_we_serve_component__["a" /* WhoWeServeComponent */] },
    { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_11__about_us_transactions_transactions_component__["a" /* TransactionsComponent */] },
    { path: 'why-hire-us', component: __WEBPACK_IMPORTED_MODULE_12__about_us_why_hire_us_why_hire_us_component__["a" /* WhyHireUsComponent */] },
    { path: 'testimonials', component: __WEBPACK_IMPORTED_MODULE_13__testimonials_testimonials_component__["a" /* TestimonialsComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_14__in_the_news_in_the_news_component__["a" /* InTheNewsComponent */] },
    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_15__resources_resources_component__["a" /* ResourcesComponent */] },
    { path: 'process', component: __WEBPACK_IMPORTED_MODULE_16__process_process_component__["a" /* ProcessComponent */] },
    { path: 'phase1', component: __WEBPACK_IMPORTED_MODULE_17__process_phase1_phase1_component__["a" /* Phase1Component */] },
    { path: 'phase2', component: __WEBPACK_IMPORTED_MODULE_18__process_phase2_phase2_component__["a" /* Phase2Component */] },
    { path: 'phase3', component: __WEBPACK_IMPORTED_MODULE_19__process_phase3_phase3_component__["a" /* Phase3Component */] },
    { path: 'advisors', component: __WEBPACK_IMPORTED_MODULE_20__advisors_advisors_component__["a" /* AdvisorsComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_21__contactus_contactus_component__["a" /* ContactusComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_slide_home_slide_component__["a" /* HomeSlideComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_us_btsoverview_btsoverview_component__["a" /* BTSOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_us_who_we_serve_who_we_serve_component__["a" /* WhoWeServeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_us_transactions_transactions_component__["a" /* TransactionsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__about_us_why_hire_us_why_hire_us_component__["a" /* WhyHireUsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__testimonials_testimonials_component__["a" /* TestimonialsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__in_the_news_in_the_news_component__["a" /* InTheNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__resources_resources_component__["a" /* ResourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__process_process_component__["a" /* ProcessComponent */],
            __WEBPACK_IMPORTED_MODULE_17__process_phase1_phase1_component__["a" /* Phase1Component */],
            __WEBPACK_IMPORTED_MODULE_18__process_phase2_phase2_component__["a" /* Phase2Component */],
            __WEBPACK_IMPORTED_MODULE_19__process_phase3_phase3_component__["a" /* Phase3Component */],
            __WEBPACK_IMPORTED_MODULE_20__advisors_advisors_component__["a" /* AdvisorsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__contactus_contactus_component__["a" /* ContactusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_22__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCI_vHoJNa989QASBl0RJ5yEJp66mYZPWk'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html { overflow-y: scroll; }\nbody { position: absolute; }\n\n#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    max-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n    overflow-y: scroll;\n    padding-bottom: 5%;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:repeat;\n\t@include background-size(cover);\n\tbackground-attachment: scroll;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n  height: auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  transition: box-shadow .3s ease;\n  overflow: auto;\n\t&:active{\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 90vw;\n    max-height: 100vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: 100vh;\n  }\n}\n\nh1,h2,a,p, li, table{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n    overflow: scroll;\n\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n/*th, td { resize: both; overflow: auto; }*/\nagm-map {\n  height: 300px;\n  width: 35vw;\n}\ntable {\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>BTS has two offices to serve you:</h1>\n          <table width=\"100%\" cellspacing=\"0\" cellpadding=\"5\" border=\"0\">\n            <tbody>\n              <tr>\n                <td valign=\"baseline\" align=\"right\">\n                  <table>\n                    <tbody>\n                      <tr>\n                        <td align=\"right\">\n                          <table>\n                            <tbody>\n                              <tr>\n                                <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                                </agm-map>\n                              </tr>\n                              <tr>\n                                <td align=\"center\"></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </td>\n                <td width=\"100%\">\n                  <div align=\"left\">\n                    <p>\n                      <strong>Massachusetts Office:</strong><br>\n                      67 South Bedford Street <br>\n                      Suite 400W <br>\n                      Burlington, MA  01803 <br>\n                      (781) 229-5857\n                    </p>\n                    <p>\n                      <strong>New Hampshire Office:</strong> <br>\n                      Windham, NH  03087 <br>\n                      (603) 425-0110 <br>\n                    </p>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <br>\n          <h1>Or contact us using the following form: </h1>\n          <form id=\"myForm\" action=\"mailto:steve.smith@business-transfers.com\" method=\"post\" enctype=\"text/plain\">\n                    <table border=\"0\" align=\"center\">\n                      <tbody>\n                        <tr>\n                          <td>Name:</td>\n                          <td><input type=\"text\" name=\"Name\"></td>\n                        <tr>\n                          <td>Address:</td>\n                          <td><input type=\"text\" name=\"Address\"></td>\n                        </tr>\n                        <tr>\n                          <td>Phone Number:</td>\n                          <td><input type=\"number\" name=\"Phone Number\"></td>\n                        </tr>\n                        <tr>\n                          <td>E-mail:</td>\n                          <td><input type=\"email\" name=\"E-mail\"></td>\n                        </tr>\n                        <tr>\n                          <td>Information Requested:</td>\n                          <td><textarea name=\"Information Requested\" cols=\"19\" form=\"myForm\"></textarea></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <br>\n                    <input type=\"submit\" class=\"btn btn-large\" value=\"Send\">\n                  </form>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactusComponent = (function () {
    function ContactusComponent() {
        this.title = 'My first AGM project';
        this.lat = 42.484743;
        this.lng = -71.200669;
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-contactus',
        template: __webpack_require__("../../../../../src/app/contactus/contactus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contactus/contactus.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], ContactusComponent);

//# sourceMappingURL=contactus.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-slide/home-slide.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n}\n\n#box2 {\n  position: relative;\n  float: right;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n.blurred-bg-2{\n  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:500px;\n\theight:300px;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 90vw;\n    max-height: 100vh;\n    overflow: auto;\n    /*margin: 20px;*/\n  }\n  .content {\n    overflow: auto;\n    /*margin-bottom: 20px;*/\n  }\n  #box2 > .content {\n    margin-bottom: 60px;\n  }\n  .slide {\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: 100vh;\n  }\n}\n\nh1,h2,a,p{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-slide/home-slide.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>OUR SERVICES</h1>\n          <p>\n            Business Transfers & Strategies is committed to\n            assisting business buyers.  We are not business\n            brokers, nor do we represent business sellers.\n            We are advisors to buyers who seek to acquire a\n            business with annual sales up to $50 million.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box2\" class=\"box blurred-bg-2 tinted\">\n        <div class=\"content\">\n          <h1>OUR PROCESS</h1>\n          <p>\n            Business Transfers & Strategies uses a proprietary\n            process to assist buyers in finding, evaluating, financing\n            and closing on a business that meets their exact\n            specifications.  We are experts in finding companies\n            that are not publicly listed for sale and guiding\n            our clients through the entire acquisition process.\n            Having direct access to business sellers ensures\n            that you won't have to outbid other buyers.\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home-slide/home-slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSlideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeSlideComponent = (function () {
    function HomeSlideComponent() {
    }
    HomeSlideComponent.prototype.ngOnInit = function () {
    };
    HomeSlideComponent.prototype.ngAfterViewInit = function () {
    };
    return HomeSlideComponent;
}());
HomeSlideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-home-slide',
        template: __webpack_require__("../../../../../src/app/home-slide/home-slide.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-slide/home-slide.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], HomeSlideComponent);

//# sourceMappingURL=home-slide.component.js.map

/***/ }),

/***/ "../../../../../src/app/in-the-news/in-the-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n    margin-bottom: 40px;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 22%;\n    overflow: auto;\n  }\n}\n\nh1,h2,a,p{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.fa-file-text {\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/in-the-news/in-the-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>In The News</h1>\n          <p>\n            Business Transfers & Strategies was featured in the March 2006\n            issue of M&A Today, a national newsletter for the Mergers & Acquisitions industry.\n            Click the icon below to read the article.\n          </p>\n            <a href=\"http://www.business-transfers.com/images/MA_BTrans_4web.pdf\">\n              <i class=\"fa fa-file-text fa-3x\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/in-the-news/in-the-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InTheNewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InTheNewsComponent = (function () {
    function InTheNewsComponent() {
    }
    InTheNewsComponent.prototype.ngOnInit = function () {
    };
    return InTheNewsComponent;
}());
InTheNewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-in-the-news',
        template: __webpack_require__("../../../../../src/app/in-the-news/in-the-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/in-the-news/in-the-news.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], InTheNewsComponent);

//# sourceMappingURL=in-the-news.component.js.map

/***/ }),

/***/ "../../../../../src/app/process/phase1/phase1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html { overflow-y: scroll; }\nbody { position: absolute; }\n\n#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    max-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n    overflow-y: scroll;\n    padding-bottom: 5%;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:repeat;\n\t@include background-size(cover);\n\tbackground-attachment: scroll;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n  height: auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  transition: box-shadow .3s ease;\n  overflow: auto;\n\t&:active{\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 90vw;\n    max-height: 100vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: 100vh;\n  }\n}\n\nh1,h2,a,p, li, table{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n    overflow: scroll;\n\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n/*th, td { resize: both; overflow: auto; }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/process/phase1/phase1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Phase 1:  Preparation & Lead Generation</h1>\n          <p class=\"goLeft\">\n            Phase 1 prepares the buyer and sets the criteria for the business search. It is comprised of the following activities:\n          </p>\n          <ul>\n            <li>\n              Finalizing the client's specific acquisition criteria:\n              <ul>\n                <li>\n                  We spend time with our clients defining the ideal acquisition target, including such\n                  items as annual sales, owner's cash flow, industry, location, number of employees, years in business, etc.\n                </li>\n                <li>\n                  The search process is then tailored to identify targets that meet these specific requirements. We identify many more acquisition\n                  targets than our clients could find on their\n                  own because of our experience and our well-established referral network.\n                </li>\n              </ul>\n            </li>\n\n            <li>\n              Implementing an intensive search of the market to identify businesses that meet the client's acquisition criteria:\n              <ul>\n                <li>\n                  Our clients see an ongoing stream of businesses that match their criteria, and have their choice of which businesses to pursue.\n                </li>\n                <li>\n                  We coach our clients on effective techniques to quickly screen out marginal businesses so that they don't waste time and money.\n                </li>\n                <li>\n                  Our search process typically produces many more responses than you can identify searching on your own.\n                </li>\n              </ul>\n            </li>\n\n            <li>\n              Preparing our clients to meet owners of profitable businesses that meet their acquisition criteria:\n              <ul>\n                <li>\n                  We assist our clients in documenting their \"buying\" credentials such that they can successfully market themselves to business owners.\n                </li>\n                <li>\n                  We coach our clients on precisely what to say to owners, and more importantly what NOT to say, so that owners see each client as a qualified buyer and don't screen them out.\n                </li>\n                <li>\n                  Our clients typically visit as many as 20 businesses that meet their specific acquisition criteria.\n                </li>\n              </ul>\n            </li>\n          </ul>\n\n          <p>\n          <a href=\"/phase2\">Go To Phase 2:  Business Selection</a>\n          </p>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/process/phase1/phase1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phase1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Phase1Component = (function () {
    function Phase1Component() {
    }
    Phase1Component.prototype.ngOnInit = function () {
    };
    return Phase1Component;
}());
Phase1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-phase1',
        template: __webpack_require__("../../../../../src/app/process/phase1/phase1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/process/phase1/phase1.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], Phase1Component);

//# sourceMappingURL=phase1.component.js.map

/***/ }),

/***/ "../../../../../src/app/process/phase2/phase2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html { overflow-y: scroll; }\nbody { position: absolute; }\n\n#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    max-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n    overflow-y: scroll;\n    padding-bottom: 5%;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:repeat;\n\t@include background-size(cover);\n\tbackground-attachment: scroll;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n  height: auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  transition: box-shadow .3s ease;\n  overflow: auto;\n\t&:active{\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 90vw;\n    max-height: 100vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: 100vh;\n  }\n}\n\nh1,h2,a,p, li, table{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n    overflow: scroll;\n\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n/*th, td { resize: both; overflow: auto; }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/process/phase2/phase2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Phase 2:  Business Selection & Letter of Intent</h1>\n          <p class=\"goLeft\">\n            Phase 2 consists of analyzing the selected businesses and determining which ones will be presented with a Letter of Intent (LOI):\n          </p>\n          <ul>\n            <li>\n            Conduct premises visits on businesses that pass the initial screening:\n              <ul>\n                <li>\n                  We accompany our clients on owner/business visits to ensure that our clients get all the information they need to accurately assess the business.\n                </li>\n                <li>\n                  Since the businesses that our clients are visiting are not for sale in the public market, our clients talk directly to the business owners and don't have to compete with and outbid other buyers.\n                </li>\n              </ul>\n            </li>\n\n            <li>\n              Analyze the initial information (financials, contracts, relevant business documents, etc.) provided by the business owner:\n              <ul>\n                <li>\n                  We coach our clients on how to analyze and compare each business's pros and cons.\n                </li>\n                <li>\n                  We show our clients how to compare each acquisition target to industry norms such that they can identify strengths and weaknesses within the business.\n                </li>\n              </ul>\n            </li>\n\n            <li>\n              Suggest the offer price and terms for acquisition of the selected business(es):\n              <ul>\n                <li>\n                We work with the client to determine the best terms on which they can purchase the business and incorporate those terms into a non-binding Letter of Intent.\n                </li>\n                <li>\n                  We counsel our clients on how to use the Letter of Intent and other legal templates safely, thus minimizing their legal fees and risk.\n                </li>\n              </ul>\n            </li>\n          </ul>\n\n          <p>\n            During this phase, our clients will usually select the remainder of their advisory team (attorney, CPA, appraiser, etc.). BTS can supply a list of advisors who are highly skilled in business transactions of the type and size the buyer is pursuing.\n          <br>\n          <br>\n            <a href=\"/phase3\">Go To Phase 3:  Business Acquisition</a>\n          </p>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/process/phase2/phase2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phase2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Phase2Component = (function () {
    function Phase2Component() {
    }
    Phase2Component.prototype.ngOnInit = function () {
    };
    return Phase2Component;
}());
Phase2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-phase2',
        template: __webpack_require__("../../../../../src/app/process/phase2/phase2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/process/phase2/phase2.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], Phase2Component);

//# sourceMappingURL=phase2.component.js.map

/***/ }),

/***/ "../../../../../src/app/process/phase3/phase3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html { overflow-y: scroll; }\nbody { position: absolute; }\n\n#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    max-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n    overflow-y: scroll;\n    padding-bottom: 5%;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:repeat;\n\t@include background-size(cover);\n\tbackground-attachment: scroll;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n  height: auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  transition: box-shadow .3s ease;\n  overflow: auto;\n\t&:active{\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 90vw;\n    max-height: 100vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: 100vh;\n  }\n}\n\nh1,h2,a,p, li, table{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n    overflow: scroll;\n\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n/*th, td { resize: both; overflow: auto; }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/process/phase3/phase3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Phase 3:  Business Acquisition</h1>\n          <p class=\"goLeft\">\n            Phase 3 consists of all the activities conducted between Letter of Intent signing and deal closure.  We guide our clients through due diligence, purchase price adjustments, financing and deal structure - everything it takes to successfully complete the acquisition.\n          </p>\n          <ul>\n            <li>\n              We counsel our clients on proven techniques to persuade the seller to accept a fair price and terms.  We assist in obtaining an independent business valuation to minimize the risk of overpaying and to facilitate negotiations.\n            </li>\n            <li>\n              We teach our clients the dynamics of buy/sell negotiations so they get the best deal on the best possible terms while minimizing their personal risk.  Our significant negotiation experience leads to a higher completion rate.\n            </li>\n            <li>\n              When necessary, BTS wears the 'black hat' so that our clients can stay friendly with the seller, who oftentimes remains with the business for some time after the sale.\n            </li>\n            <li>\n              We provide a comprehensive checklist of due diligence items and the project management oversight to ensure it is completed in a thorough and timely manner.  The checklist covers the financial and non-financial factors that are critical to evaluating the business.\n            </li>\n            <li>\n              We introduce our clients, if needed, to specialists in HR, insurance, strategic planning, operations planning, etc. to assist in due diligence and ownership transition.\n            </li>\n            <li>\n              We introduce our clients to the lenders who are most likely to provide the best acquisition financing for the client's specific transaction.  Our close relationships with funding sources and expertise in packaging a deal accelerates the approval process and increases the odds of success.\n            </li>\n            <li>\n              We counsel our clients on how to negotiate with lenders for the best possible terms.  We show our clients how to minimize or eliminate personal collateral and guarantees and how to lessen or remove restrictive bank covenants.\n            </li>\n            <li>\n              Last, but not least, we counsel our clients on how to efficiently use the services and skills of their attorney and CPA such that they save money.  Many unassisted buyers will pay $300-$500/hr to an attorney to perform an action that they could have performed on their own with guidance from BTS.\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/process/phase3/phase3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phase3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Phase3Component = (function () {
    function Phase3Component() {
    }
    Phase3Component.prototype.ngOnInit = function () {
    };
    return Phase3Component;
}());
Phase3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-phase3',
        template: __webpack_require__("../../../../../src/app/process/phase3/phase3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/process/phase3/phase3.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], Phase3Component);

//# sourceMappingURL=phase3.component.js.map

/***/ }),

/***/ "../../../../../src/app/process/process.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n    margin-bottom: 40px;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 22%;\n    overflow: auto;\n  }\n}\n\nh1,h2,a,p,li{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.fa-file-text {\n  color: white;\n}\n\n.goLeft , li{\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/process/process.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Our Process</h1>\n          <p class=\"goLeft\">\n            We specialize in uncovering businesses that fit our client's acquisition criteria and are not available for sale on the public market.\n            We skillfully and discreetly assist buyers in all phases of the transaction.  Our involvement includes:\n          </p>\n          <ul>\n            <li>\n              Developing the client's acquisition criteria\n            </li>\n            <li>\n              Formulating a strategy for identifying and approaching the acquisition targets\n            </li>\n            <li>\n              Initiating contact with and screening the target companies\n            </li>\n            <li>\n              Assessing the target company and suggesting a range of value\n            </li>\n            <li>\n              Formulating the appropriate deal structure and managing due diligence\n            </li>\n            <li>\n              Finalizing the terms of purchase\n            </li>\n            <li>\n              Facilitating acquisition financing\n            </li>\n          </ul>\n          <p class=\"goLeft\">\n            These services are delivered using a Three-Phase Process:\n          </p>\n          <p class=\"goLeft\">\n            <a href=\"/phase1\">1. Preparation and Lead Generation</a>\n            <br>\n            <a href=\"/phase2\">2. Business Selection & Letter of Intent</a>\n            <br>\n            <a href=\"/phase3\">3. Business Acquisition</a>\n            <br>\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/process/process.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessComponent = (function () {
    function ProcessComponent() {
    }
    ProcessComponent.prototype.ngOnInit = function () {
    };
    return ProcessComponent;
}());
ProcessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-process',
        template: __webpack_require__("../../../../../src/app/process/process.component.html"),
        styles: [__webpack_require__("../../../../../src/app/process/process.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], ProcessComponent);

//# sourceMappingURL=process.component.js.map

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    min-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));\n  background-repeat:no-repeat;\n\t@include background-size(cover);\n\tbackground-attachment: fixed;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n\theight:auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: box-shadow .3s ease;\n\n\t&:active{\n    cursor:move;\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 100vw;\n    max-height: 90vh;\n    overflow: auto;\n    margin-bottom: 40px;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 22%;\n    overflow: auto;\n  }\n}\n\nh1,h2,h3,li,a,p{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n\t}\n}\nh2{ font-size: 14px }\np,h3{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\nh3 {\n  font-weight: 200;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Useful Resources</h1>\n          <h3>Printed Material</h3>\n          <ul>\n            <li>\n              Buying Your Own Business by Russell Robb provides a useful overview of the buying process, and insight into how to create and utilize your acquisition team.\n            </li>\n            <li>\n              You Can Negotiate Anything by Herb Cohen provides a simple framework for negotiating.  He provides many practical examples and techniques that are useful in the business acquisition process - whether it's negotiating with the business owner or the bank.\n            </li>\n          </ul>\n          <h3>On The Web</h3>\n          <ul>\n            <li>\n              http://www.toolkit.com/ is the Business Owner's Toolkit site and is a good source for general information.  This site contains links to relevant templates, plus additional references for items such as due diligence, corporate structure, financing, etc.\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourcesComponent = (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    return ResourcesComponent;
}());
ResourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-resources',
        template: __webpack_require__("../../../../../src/app/resources/resources.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resources/resources.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], ResourcesComponent);

//# sourceMappingURL=resources.component.js.map

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-side-menu {\n  overflow: auto;\n  font-family: verdana;\n  font-size: 12px;\n  font-weight: 200;\n  background-color: #2e353d;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 260px;\n  height: 100%;\n  color: #e1ffff;\n}\n.nav-side-menu .brand {\n  background-color: #23282e;\n  line-height: 50px;\n  display: block;\n  text-align: center;\n  font-size: 14px;\n}\n.nav-side-menu .toggle-btn {\n  display: none;\n}\n.nav-side-menu ul,\n.nav-side-menu li {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  line-height: 35px;\n  cursor: pointer;\n\n/*.collapsed{\n       .arrow:before{\n                 font-family: FontAwesome;\n                 content: \"\\f053\";\n                 display: inline-block;\n                 padding-left:10px;\n                 padding-right: 10px;\n                 vertical-align: middle;\n                 float:right;\n            }\n     }*/\n\n}\n.nav-side-menu ul :not(collapsed) .arrow:before,\n.nav-side-menu li :not(collapsed) .arrow:before {\n  font-family: FontAwesome;\n  content: \"\\F078\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  float: left;\n}\n.nav-side-menu ul .active,\n.nav-side-menu li .active {\n  border-left: 3px solid #d19b3d;\n  background-color: #456796;\n}\n.nav-side-menu ul .sub-menu li.active,\n.nav-side-menu li .sub-menu li.active {\n  color: #d19b3d;\n}\n.nav-side-menu ul .sub-menu li.active a,\n.nav-side-menu li .sub-menu li.active a {\n  color: #d19b3d;\n}\n.nav-side-menu ul .sub-menu li,\n.nav-side-menu li .sub-menu li {\n  background-color: #181c20;\n  border: none;\n  line-height: 28px;\n  border-bottom: 1px solid #23282e;\n  margin-left: 0px;\n}\n.nav-side-menu ul .sub-menu li:hover,\n.nav-side-menu li .sub-menu li:hover {\n  background-color: #020203;\n}\n.nav-side-menu ul .sub-menu li:before,\n.nav-side-menu li .sub-menu li:before {\n  font-family: FontAwesome;\n  content: \"\\F105\";\n  display: inline-block;\n  /*padding-left: 10px;*/\n  padding-right: 5px;\n  vertical-align: middle;\n  padding-left: 2vw;\n}\n.nav-side-menu li {\n  padding-left: 0px;\n  border-left: 3px solid #2e353d;\n  border-bottom: 1px solid #23282e;\n}\n.nav-side-menu li a {\n  text-decoration: none;\n  color: #e1ffff;\n  padding-left: 10px;\n}\n.nav-side-menu li a i {\n  padding-left: 10px;\n  width: 20px;\n  padding-right: 20px;\n}\n.nav-side-menu li:hover {\n  border-left: 3px solid #d19b3d;\n  background-color: #4f5b69;\n  transition: all 1s ease;\n}\n@media (max-width: 767px) {\n  .nav-side-menu {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .nav-side-menu .toggle-btn {\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    /*z-index: 10 !important;*/\n    /*padding: 3px;*/\n    background-color: #ffffff;\n    color: #000;\n    width: 40px;\n    text-align: center;\n  }\n  .brand {\n    text-align: left !important;\n    font-size: 22px;\n    padding-left: 20px;\n    line-height: 50px !important;\n  }\n}\n@media (min-width: 767px) {\n  .nav-side-menu .menu-list .menu-content {\n    display: block;\n  }\n}\n\nbody {\n margin-top: 0px;\n margin-right: 0px;\n margin-bottom: 0px;\n margin-left: 0px\n}\n\n#bars{\n  background-color: #23282e;\n  color: #e1ffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 nav-side-menu\">\n    <div class=\"brand\">Brand Logo</div>\n    <i  id=\"bars\" class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\">\n    </i>\n    <div class=\"menu-list\">\n        <ul id=\"menu-content\" class=\"menu-content collapse out active\">\n            <li>\n                <a routerLink=\"/\">\n                    <i class=\"fa fa-home fa-lg\"></i> Home\n                </a>\n            </li>\n            <li data-toggle=\"collapse\" data-target=\"#about\" class=\"collapsed\">\n                <a routerLink=\"/about-us\">\n                  <i class=\"fa fa-info-circle fa-lg\"></i> About Us<i class=\"fa fa-chevron-down\"></i>\n\n                </a>\n            </li>\n            <ul class=\"sub-menu collapse\" id=\"about\">\n                <li><a routerLink=\"/btsoverview\">BTS Overview</a></li>\n                <li><a routerLink=\"/who-we-serve\">Who We Serve</a></li>\n                <li><a routerLink=\"/transactions\">Transaction Experience</a></li>\n                <li><a routerLink=\"/why-hire-us\">Why Hire Us</a></li>\n            </ul>\n\n            <li>\n                <a routerLink=\"advisors\">\n                    <i class=\"fa fa-users fa-lg\"></i> Our Advisors\n                </a>\n            </li>\n\n            <li data-toggle=\"collapse\" data-target=\"#process\" class=\"collapsed\">\n                <a routerLink=\"/process\">\n                  <i class=\"fa fa-bar-chart fa-lg\"></i> Our Process<i class=\"fa fa-chevron-down\"></i>\n                </a>\n            </li>\n            <ul class=\"sub-menu collapse\" id=\"process\">\n                <li><a routerLink=\"phase1\">Phase 1 - Preparation</a></li>\n                <li><a routerLink=\"phase2\">Phase 2 - Business Selection</a></li>\n                <li><a routerLink=\"phase3\">Phase 3 - Business Acquisition</a></li>\n            </ul>\n            <li>\n                <a routerLink=\"/testimonials\">\n                    <i class=\"fa fa-comments-o fa-lg\"></i> Testimonials\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/news\">\n                    <i class=\"fa fa-newspaper-o fa-lg\"></i> In The News\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/resources\">\n                    <i class=\"fa fa-tint fa-lg\"></i> Resources\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/contactus\">\n                    <i class=\"fa fa-phone fa-lg\"></i> Contact Us\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideBarComponent);

//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/testimonials/testimonials.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html { overflow-y: scroll; }\nbody { position: absolute; }\n\n#topParagraph {\n  position: relative;\n  float: left;\n  padding-top:5vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.slide {\n    background-image:url(" + __webpack_require__("../../../../../src/assets/homeImage.jpg") + ");\n    max-height: 100vh;\n    min-width: 100vw;\n    background-attachment: scroll;\n    background-position: center;\n    background-repeat: repeat;\n    background-size: cover;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position:relative;\n    overflow-y: scroll;\n    padding-bottom: 5%;\n}\n\n.blurred-bg-1{\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));\n  background-repeat:repeat;\n\t@include background-size(cover);\n\tbackground-attachment: scroll;\n}\n\n.box{\n  padding-top:5vh;\n\twidth:auto;\n  height: auto;\n\tposition:relative;\n\tborder-radius:5px;\n\t@include box-shadow(0 20px 30px rgba(0,0,0,.6));\n\tborder:1px solid rgba(255,255,255,.3);\n\tpadding:20px;\n\ttext-align: center;\n\t@include box-sizing(border-box);\n\ttext-shadow:0 1px 1px rgba(0,0,0,.4);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  transition: box-shadow .3s ease;\n  overflow: auto;\n\t&:active{\n    @include box-shadow(0 20px 50px rgba(0,0,0,.9));\n  }\n\n  .content{\n    margin: auto;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .box {\n    max-width: 90vw;\n    max-height: 100vh;\n    overflow: auto;\n  }\n  .content {\n    overflow: auto;\n  }\n  .slide {\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: 100vh;\n  }\n}\n\nh1,h2,a,p, li, table{\n\tcolor:white;\n\tfont-weight:100;\n\n\t.tinted &{\n\t\tcolor:black;\n\t\ttext-shadow:0 1px 1px rgba(255,255,255,.2);\n    overflow: scroll;\n\n\t}\n}\nh2{ font-size: 14px }\np{\n  margin: 20px;\n  &.related{\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #444;\n\n    a{\n      font-weight: 700;\n      text-decoration: none;\n      &:hover{\n        text-decoration: underline;\n      }\n    }\n  }\n}\n\n.goLeft, li {\n  text-align: left;\n}\n/*th, td { resize: both; overflow: auto; }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/testimonials/testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row slide\">\n\n    <div class=\"col-md-9 col-xs-12\" id=\"topParagraph\">\n      <div id=\"box1\" class=\"box blurred-bg-1 tinted\">\n        <div class=\"content\">\n          <h1>Testimonials</h1>\n          <p>\n            “I had been searching for a good business for six months prior to working with BTS.  Within a few weeks, we had contacted over 100 companies that were interested in a transaction.  Steve and his partners were great at sorting out the weak businesses from the strong ones.  We ended up making offers on six businesses, and I got the best one!  Steve was particularly gifted at working through tricky negotiations to ensure that I got a good deal.  BTS did such a great job, I have recommended them three times already!” - <strong>Rob Olney, President, ETM Manufacturing Company</strong>\n          </p>\n\n          <p>\n            “A few months into a frustrating self-directed search, I was referred to BTS.  Their confidence and professionalism immediately won me over, so I took a leap of faith and signed on.  They promised to deliver real value and certainly kept their word.  I recommend anyone committed to acquiring their own small business to work with BTS.  They will find opportunities you would have never imagined, and then make deals happen when inevitable obstacles appear.  They protect your interests among sellers and selling agents who are only looking to close a transaction and collect a fee.  If the cost of BTS services is an issue, consider the cost of not finding a company to buy or ending up with a mediocre company.  BTS will pay for itself many times over by finding high quality candidates and structuring a deal in your best interest.  I am only a couple of weeks post-closing, but I am very happy with the company I have found and am optimistic with my future.”\n            <strong>– Gene Holmstead, President, Process Piping Technology</strong>\n          </p>\n\n          <p>“I spent the last 7 years of my corporate business career as division general manager for Fortune 500 corporations.  This experience has proven invaluable as I begin the day to day management of my own company.  However, nothing in my former business experience prepared me for the level of detail and the nuances of having to manage every aspect of a new business acquisition.  Without the support and counsel of Steve and Brehn Smith, I would not have known the sequence of steps including accessing potential acquisition targets, due diligence, selecting accounting and legal advice, securing financing and final negotiations required to complete my business acquisition.  The team at Business Transfers and Strategies worked tirelessly on my behalf.  I strongly recommend their services to anyone considering an acquisition.”\n          <strong> – Graham West, President, Morgan Awning Company</strong>\n         </p>\n\n         <p>\n           “Business Transfers & Strategies provides the buyer with an effective solution to one of the most challenging steps in the process – finding the business that’s “not for sale” and bringing the owner to the table.  I found them to be responsive and diligent, working long and hard to sort through the candidates in order to help me find the right deal.”\n           <strong>- Mark Brandon, President, Diamond Machining Technology</strong>\n         </p>\n\n         <p>“In just three weeks, BTS has proven to me that their system is the most effective way to find solid candidates for acquisition.  I have been put in touch with more strong prospects than I saw in months of contacting brokers and sifting through public listings.  And, because these businesses were not publicly listed for sale, I was put in touch directly with the owners – not brokers.  Add BTS’s experience and professionalism, and it’s not hard to see why I’m sold.”\n          <strong>– Dennis Schaecher, Principal, Business Ownership Strategies</strong>\n         </p>\n\n         <p>\n           “I’ve always known Steve to be extremely thorough, conscientious, and honest in his work – whether is resulted in information that would be well-received or not.  Steve and I have had some frank discussions regarding business opportunities, including franchising, and he always was able to back up his findings with concrete, defensible information.  I would not hesitate in enlisting the assistance of BTS if a potential opportunity presents itself that I would like to consider.”\n          <strong>– Gene Boucher, President, NuEra Solutions Group</strong>\n         </p>\n\n         <p>\"BTS has the ability to sort through voluminous information to focus its clients on the issues presented.  BTS understands its clientele and provides the level of service needed in each particular case.  The follow-through and attention to detail provided by BTS speaks volumes as to the quality of the advice and resources devoted to each client.  At the end of the day, it is clear to me that BTS is solely focused on providing the best results to its clients.\"\n          <strong>- Joseph C. Marrow, Esq., Morse, Barnes-Brown & Pendleton, P.C.</strong>\n         </p>\n\n         <p>\n           “Business Transfers & Strategies (BTS) brings top-notch professionalism, attention to detail, follow-up and overall deal-making experience and business savvy to every aspect of every deal.  Having worked with a number of business brokers in the past, I can say with confidence that BTS outshines them all by bringing considerably more to the table on behalf of each client on a consistent, day-to-day basis.  If you are someone even beginning to contemplate the purchase of a business, you need to contact them as early in the process as possible – your team is incomplete without BTS.”\n           <strong>- Marc Clerc, Esq., Clerc & Associates, P.C.</strong>\n         </p>\n\n         <p>\n           \"When I met you, I was preparing to make an offer on a business that I thought had great potential.  I was lucky to find you when I did, as you quickly made me see that this would have been a very costly mistake.  Your counsel proved invaluable.\"\n           <strong>– R. C., York, ME</strong>\n         </p>\n\n         <p>\n           “I have worked on several acquisitions with Business Transfers and Strategies in the past two years. My experiences have been excellent.  They are real pros and work very hard for their clients.  Buyers and sellers of businesses often have very different tax, business and non-business objectives.  They are aware of these differences and have a knack of helping them to overcome many of the potential obstacles to insure that the deal works for both parties.Their research and planning ethic when looking at a business for one of their buyer-clients is second to none.  They will spend whatever time it takes to insure that all of the information needed to make a sound buying decision is made available to their clients and to us where we have been the accounting, valuation, tax and business advisors in a potential transaction.Buying a business is a major investment.  Buyers want to know that their agents and advisors always have their best interests at heart.  I have found Business Transfers and Strategies to be that ally and advocate that any potential purchaser would want to have on their side.”\n           <strong>- Jack Bachini, CPA, CVA, MBA, Bachini, David & Company, P.C., CPAs</strong>\n         </p>\n\n         <p>\n           “Steve casts a wide net that allows his clients to choose from the broad panoply of responding firms he attracts.  No smoke and mirrors here.  He moves through the consideration, evaluation, and acquisition stages capably, succinctly, and without emotion.”\n           <strong> - Bruce A. Gold, CPA, Managing Partner, Gold & Goldberg, LLP</strong>\n         </p>\n\n         <p>\n           “Over the last two years I have worked on a number of transactions with Steve assisting his clients with their bank financing needs to purchase a business.  In my opinion, Steve has done an excellent job for his clients and the banks.  For his clients, he has sourced good companies at reasonable purchase prices in a number of different industries.  For the banks, he has helped explain the transaction and financing needs; coordinated and managed meetings between the client and the bank; and gathered the information needed by the bank to make its financing decision.  He also has developed a number of strong relationships with local banks, which has helped his clients find bank financing at competitive rates.”\n           <strong>- Commercial Lender for a large New England regional bank.</strong>\n         </p>\n\n         <p>\n           \"Steve was the consummate professional in representing the buyer of my client’s business.  Time and again, Steve resurrected what appeared to be a 'dead deal' through his creativity, persistence and his deep experience in structuring transactions.  Without his guidance and level-headed approach, this deal simply would not have happened.\"\n           <strong> - Michael Pelzar, Managing Director, Kaufman & Company LLC</strong>\n         </p>\n\n         <p>\n           \"I think BTS provides a very valuable service to their clients.\"\n           <strong>- Lou Pereira, President, Herold-Lambert Group, Inc.</strong>\n         </p>\n\n         <p>\n           “Steve has a professional and fresh way of advising buyers interested in purchasing businesses.  He has presented information regarding the business buying process to Keystone candidates interested in entrepreneurial ventures in both a group format and individually.  Steve has an honest, knowledgeable and sincere style that has been received well by his audience.  I would not hesitate to refer continual business to him.” - Cheri Paulson, Senior Vice President, Keystone Associates\n           <strong>- A Career Management Firm</strong>\n         </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/testimonials/testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router_animations__ = __webpack_require__("../../../../../src/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialsComponent = (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    return TestimonialsComponent;
}());
TestimonialsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-testimonials',
        template: __webpack_require__("../../../../../src/app/testimonials/testimonials.component.html"),
        styles: [__webpack_require__("../../../../../src/app/testimonials/testimonials.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], TestimonialsComponent);

//# sourceMappingURL=testimonials.component.js.map

/***/ }),

/***/ "../../../../../src/assets/homeImage.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "homeImage.4adbdb2d84b78dfea7c4.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return fadeIn();
}
function fadeIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }))
        ])
    ]);
}
function slideToRight() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto', height: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: 'auto', height: 'auto' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map
