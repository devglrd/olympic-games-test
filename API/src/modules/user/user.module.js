"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./user.entity");
var user_service_1 = require("./user.service");
var user_controller_1 = require("./user.controller");
var user_resssource_1 = require("./user-resssource");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
            exports: [user_service_1.UsersService],
            providers: [user_service_1.UsersService, user_resssource_1.UserRessource],
            controllers: [user_controller_1.UserController]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;