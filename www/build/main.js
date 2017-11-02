webpackJsonp([6],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var auth = (function () {
    function auth(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    auth.prototype.cadastrar = function (user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    auth.prototype.login = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    auth.prototype.signOut = function () {
        return this.signOutFirebase();
    };
    auth.prototype.signOutFirebase = function () {
        return this.angularFireAuth.auth.signOut();
    };
    return auth;
}());
auth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], auth);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_usuario__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, toastCtrl, authService, NavParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.NavParams = NavParams;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__providers_auth_usuario__["a" /* Usuario */]();
        this.CadastroPage = __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */];
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.form.form.valid) {
            this.authService.login(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
    };
    LoginPage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
], LoginPage.prototype, "form", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n<!-- Testando o AAAAAAAABranch -->\n\n\n<ion-content padding class="bg">\n  <ion-row><ion-col style="text-align:center">\n  <img src="../../assets/bomdemais.png">\n  </ion-col></ion-row>\n<ion-grid>\n  <ion-row><ion-col style="text-align:center">\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item class="yellow">\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n\n      <ion-item class="yellow">\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button class="botao botaologin" [disabled]="!form.form.valid" (click)="login()">\n      ENTRAR\n    </button>\n\n</form>\n</ion-col></ion-row>\n<ion-row><ion-col style="text-align:center">\n  Não possui uma conta? <br>\n  <button icon-start class="botao botaocadastre" (click)="cadastrar()">\n      <ion-icon name="home"> </ion-icon>\n      CRIE AGORA\n    </button>\n \n  </ion-col>\n</ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* auth */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarrinhoPage = (function () {
    function CarrinhoPage() {
    }
    return CarrinhoPage;
}());
CarrinhoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-carrinho',template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/pages/carrinho/carrinho.html"*/'<!--\n  Generated template for the CarrinhoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CarrinhoPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/pages/carrinho/carrinho.html"*/,
    })
], CarrinhoPage);

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardapioPage = (function () {
    function CardapioPage() {
    }
    CardapioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardapioPage');
    };
    return CardapioPage;
}());
CardapioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cardapio',template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/pages/cardapio/cardapio.html"*/'<!--\n  Generated template for the CardapioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cardapio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n  <ion-card class="bg">\n    <ion-list>\n        <ion-item class="bg">\n          <ion-thumbnail item-start>\n            <img src="../../assets/salmao.jpg">\n          </ion-thumbnail>\n          <h2>Salmão Grelhado</h2>\n          <p>2 pessoas • R$30</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n              <img src="../../assets/peixe.jpg">\n            </ion-thumbnail>\n            <h2>Peixe Frito</h2>\n            <p>4 pessoas • R$50</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="../../assets/download.jpeg">\n              </ion-thumbnail>\n              <h2>1/2 Carne de sol</h2>\n              <p>3 pessoas • R$40</p>\n              <button ion-button clear item-end>View</button>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="../../assets/salmao.jpg">\n                </ion-thumbnail>\n                <h2>Salmão Grelhado</h2>\n                <p>2 pessoas • R$30</p>\n                <button ion-button clear item-end>View</button>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="../../assets/salmao.jpg">\n                  </ion-thumbnail>\n                  <h2>Salmão Grelhado</h2>\n                  <p>2 pessoas • R$30</p>\n                  <button ion-button clear item-end>View</button>\n                </ion-item>\n      </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/pages/cardapio/cardapio.html"*/,
    })
], CardapioPage);

//# sourceMappingURL=cardapio.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sobre',template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/pages/sobre/sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>pensando aqui ainda </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/pages/sobre/sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Item */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministracaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdministracaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Item = (function () {
    function Item() {
    }
    return Item;
}());

var AdministracaoPage = (function () {
    function AdministracaoPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.lista = db.list('/items');
        this.item = new Item();
        this.listaItems = this.lista.valueChanges();
    }
    AdministracaoPage.prototype.cadastrarItem = function () {
        var _this = this;
        this.lista.push(this.item).then(function () {
            _this.item = new Item();
            console.log('cadastrando');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        });
    };
    return AdministracaoPage;
}());
AdministracaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-administracao',template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/pages/administracao/administracao.html"*/'<!--\n  Generated template for the AdministracaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro de Itens</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n  <h2>Cadastre</h2>\n  <p>Abaixo, coloque o nome do item, o tipo, a descrição e o preço do mesmo.</p>\n\n    <ion-list>\n        <ion-item class="yellow"> \n          <ion-label fixed>Nome do item a inserir no cardápio:</ion-label>\n          <ion-input type="text" [(ngModel)]="nome"></ion-input>\n        </ion-item>\n        <ion-item class="yellow">\n          <ion-label>Tipo de item:</ion-label>\n          <ion-select [(ngModel)]="tipo">\n              <ion-option value="prato">Prato</ion-option>\n              <ion-option value="bebida">Bebida</ion-option>\n              <ion-option value="acompanhamento">Acompanhamento</ion-option>\n                \n          </ion-select>\n        </ion-item>\n        <ion-label fixed>Descrição:</ion-label>\n        <ion-input class="yellow" type="text" [(ngModel)]="desc"></ion-input>\n        <ion-label fixed>Preço:</ion-label>\n        <ion-input class="yellow" type="text" [(ngModel)]="preco"></ion-input>\n        \n        <ion-col style="text-align:center">\n        <ion-item>\n          <button class="botao botaocadastrar" (click)="cadastrarItem()">Cadastrar</button>\n        </ion-item>  \n      </ion-col>\n        \n     </ion-list>\n\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/pages/administracao/administracao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], AdministracaoPage);

//# sourceMappingURL=administracao.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_usuario__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_usuario__["a" /* Usuario */]();
    }
    CadastroPage.prototype.cadastrar = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.cadastrar(this.user)
                .then(function (user) {
                user.sendEmailVerification();
                toast_1.setMessage('Usuário criado com sucesso.');
                toast_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                if (error.code == 'auth/email-already-in-use') {
                    toast_1.setMessage('O e-mail digitado já está em uso.');
                }
                else if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toast_1.setMessage('Não está habilitado criar usuários.');
                }
                else if (error.code == 'auth/weak-password') {
                    toast_1.setMessage('A senha digitada é muito fraca.');
                }
                toast_1.present();
            });
        }
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    return CadastroPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */])
], CadastroPage.prototype, "form", void 0);
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro de Usuários</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg">\n    <ion-grid>\n        <ion-row><ion-col style="text-align:center">\n<form #form="ngForm" novalidate>\n    <ion-list>\n\n        <ion-item class="yellow">\n            <ion-label stacked>Nome</ion-label>\n            <ion-input type="text" name="nome" [(ngModel)]="user.nome" #email="ngModel" required></ion-input>\n          </ion-item>\n\n        <ion-item class="yellow">\n            <ion-label stacked>CPF ou CNPJ</ion-label>\n            <ion-input type="text" name="cpf" [(ngModel)]="user.cpf" #email="ngModel" required></ion-input>\n          </ion-item>\n          \n\n      <ion-item class="yellow">\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item class="yellow">\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n  \n\n    </ion-list>\n<ion-col style="text-align:center">\n    <button class="botao botaocadastrar" block color="primary" [disabled]="!form.form.valid" (click)="cadastrar()">\n      CADASTRAR\n    </button>\n  </ion-col>\n  </form>\n  </ion-col></ion-row></ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/pages/cadastro/cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* auth */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administracao/administracao.module": [
		986,
		5
	],
	"../pages/cadastro/cadastro.module": [
		987,
		4
	],
	"../pages/cardapio/cardapio.module": [
		988,
		3
	],
	"../pages/carrinho/carrinho.module": [
		989,
		2
	],
	"../pages/login/login.module": [
		990,
		1
	],
	"../pages/sobre/sobre.module": [
		991,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 310;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(576);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_carrinho_carrinho__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cardapio_cardapio__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sobre_sobre__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_administracao_administracao__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_cloud_angular__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_cardapio_serv_cardapio_serv__ = __webpack_require__(985);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var config = {
    apiKey: "AIzaSyBITZurRDoUk6fnA9NftDytegR5c32yVMk",
    authDomain: "restaurante-f6140.firebaseapp.com",
    databaseURL: "https://restaurante-f6140.firebaseio.com",
    projectId: "restaurante-f6140",
    storageBucket: "restaurante-f6140.appspot.com",
    messagingSenderId: "355554439013"
};
var cloudSettings = {
    'core': {
        'app_id': '0673d468'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_administracao_administracao__["a" /* AdministracaoPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_cardapio_cardapio__["a" /* CardapioPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_carrinho_carrinho__["a" /* CarrinhoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/administracao/administracao.module#AdministracaoPageModule', name: 'AdministracaoPage', segment: 'administracao', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cardapio/cardapio.module#CardapioPageModule', name: 'CardapioPage', segment: 'cardapio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_administracao_administracao__["a" /* AdministracaoPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_cardapio_cardapio__["a" /* CardapioPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_carrinho_carrinho__["a" /* CarrinhoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_11__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* auth */],
            __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_cardapio_serv_cardapio_serv__["a" /* CardapioServProvider */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl, navParams, auth, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.geolocation = geolocation;
    }
    HomePage.prototype.teste = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.auth.signOut()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/pages/home/home.html"*/'<ion-header class="verde">\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="verde">Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="bg">\n    <ion-row><ion-col style="text-align:center">\n        <img src="../../assets/bomdemais.png">\n        </ion-col></ion-row>\n    <ion-grid>\n        <ion-row><ion-col style="text-align:center">\n      </ion-col></ion-row>\n      <ion-row><ion-col style="text-align:center">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod semper tortor nec sodales. Proin sagittis, urna ut rhoncus vehicula, ante tellus ornare tellus, vel sollicitudin mi ligula et purus. Praesent eleifend dapibus gravida. Quisque fermentum urna sed dolor aliquam, a facilisis eros mollis. Aenean commodo consequat orci, eget maximus ipsum egestas in. Nulla facilisi. Fusce pharetra hendrerit placerat. Donec eu tortor porttitor, hendrerit erat ac, mattis sapien. Quisque varius pretium orci id placerat. Proin pharetra est gravida arcu interdum, quis tempor felis accumsan. Quisque justo erat, tempor id ipsum et, lobortis scelerisque libero. Curabitur consectetur sapien magna, eget pharetra odio suscipit vel. Vivamus sit amet gravida ligula, sit amet accumsan nibh.</p><br>\n        <button icon-start class="botao botaocadastre" (click)="signOut()">\n            <ion-icon name="home"> </ion-icon>\n            Sair\n          </button>\n       \n        </ion-col>\n      </ion-row>\n      </ion-grid>\n\n      <div #map id="map"></div> \n  \n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* auth */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_carrinho_carrinho__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_cardapio_cardapio__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_sobre_sobre__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_administracao_administracao__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(570);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //PAGINA INICIAL DO APLICATIVO
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Administracao', component: __WEBPACK_IMPORTED_MODULE_3__pages_administracao_administracao__["a" /* AdministracaoPage */] },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_2__pages_sobre_sobre__["a" /* SobrePage */] },
            { title: 'Cardapio', component: __WEBPACK_IMPORTED_MODULE_1__pages_cardapio_cardapio__["a" /* CardapioPage */] },
            { title: 'Carrinho', component: __WEBPACK_IMPORTED_MODULE_0__pages_carrinho_carrinho__["a" /* CarrinhoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/matheusmedeiros/RestauranteLSI/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/matheusmedeiros/RestauranteLSI/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.listar = function () {
        return this.afd.list('/medicos/');
    };
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapioServProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CardapioServProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CardapioServProvider = (function () {
    function CardapioServProvider(db, angularFireAuth, fb) {
        this.db = db;
        this.angularFireAuth = angularFireAuth;
        this.fb = fb;
    }
    CardapioServProvider.prototype.getAll = function () {
        return this.items;
    };
    CardapioServProvider.prototype.save = function (item) {
        if (item.$nome) {
            return this.items.update(item.$nome, { nome: item.nome });
        }
        else {
            return this.items.push({ nome: item.nome, foto: item.foto, preco: item.preco });
        }
    };
    CardapioServProvider.prototype.uploadSalvar = function (item) {
        var itemcarrinho = { nome: item.nome, foto: item.foto, preco: item.preco };
        this.save(itemcarrinho);
    };
    return CardapioServProvider;
}());
CardapioServProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */]])
], CardapioServProvider);

//# sourceMappingURL=cardapio-serv.js.map

/***/ })

},[571]);
//# sourceMappingURL=main.js.map