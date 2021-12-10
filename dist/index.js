"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGames = void 0;
var axios_1 = __importDefault(require("axios"));
var countryCodes = [
    "TR",
    "US",
    "GB",
    "DE",
    "AR",
    "ES",
    "MX",
    "FR",
    "IT",
    "JP",
    "KR",
    "PL",
    "BR",
    "RU",
    "TH",
    "CN",
];
/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 * @async
 * @function
 * @name getGames
 * @param {string} country ISO country code
 * @returns currents: games that are currently free. nexts: announced games that will be free.
 */
var getGames = function (country) {
    if (country === void 0) { country = "US"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var data, freeGames, currents, nexts, error_1;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 2, , 3]);
                    if (country.toUpperCase() !== country)
                        throw new TypeError("Country code must be uppercase your code: " + country);
                    return [4 /*yield*/, axios_1.default.get("https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=" + country)];
                case 1:
                    data = (_f.sent()).data;
                    if (data === null || data === void 0 ? void 0 : data.errors)
                        throw new TypeError("An error occurred\n        error: " + ((_a = data.errors[0]) === null || _a === void 0 ? void 0 : _a.serviceResponse) + "\n        ");
                    freeGames = (_e = (_d = (_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.Catalog) === null || _c === void 0 ? void 0 : _c.searchStore) === null || _d === void 0 ? void 0 : _d.elements) === null || _e === void 0 ? void 0 : _e.filter(function (game) {
                        var _a, _b, _c, _d, _e, _f;
                        return ((game === null || game === void 0 ? void 0 : game.offerType) === "BASE_GAME" ||
                            ((_b = (_a = game === null || game === void 0 ? void 0 : game.promotions) === null || _a === void 0 ? void 0 : _a.promotionalOffers) === null || _b === void 0 ? void 0 : _b.length) !== 0 ||
                            ((_d = (_c = game === null || game === void 0 ? void 0 : game.promotions) === null || _c === void 0 ? void 0 : _c.upcomingPromotionalOffers) === null || _d === void 0 ? void 0 : _d.length) !== 0) && ((_f = (_e = game === null || game === void 0 ? void 0 : game.price) === null || _e === void 0 ? void 0 : _e.totalPrice) === null || _f === void 0 ? void 0 : _f.discountPrice) === 0;
                    });
                    currents = freeGames === null || freeGames === void 0 ? void 0 : freeGames.filter(function (game) {
                        var _a, _b, _c, _d, _e, _f;
                        return ((_c = (_b = (_a = game === null || game === void 0 ? void 0 : game.price) === null || _a === void 0 ? void 0 : _a.lineOffers[0]) === null || _b === void 0 ? void 0 : _b.appliedRules) === null || _c === void 0 ? void 0 : _c.length) !== 0 ||
                            Date.parse((_f = (_e = (_d = game === null || game === void 0 ? void 0 : game.promotions) === null || _d === void 0 ? void 0 : _d.promotionalOffers[0]) === null || _e === void 0 ? void 0 : _e.promotionalOffers[0]) === null || _f === void 0 ? void 0 : _f.startDate) < Date.now();
                    });
                    nexts = freeGames.filter(function (game) {
                        var _a, _b;
                        return ((_b = (_a = game === null || game === void 0 ? void 0 : game.promotions) === null || _a === void 0 ? void 0 : _a.upcomingPromotionalOffers) === null || _b === void 0 ? void 0 : _b.length) !== 0 &&
                            (game === null || game === void 0 ? void 0 : game.promotions) !== null;
                    });
                    return [2 /*return*/, { currents: currents, nexts: nexts }];
                case 2:
                    error_1 = _f.sent();
                    throw new Error(error_1);
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.getGames = getGames;
//# sourceMappingURL=index.js.map