"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGames = void 0;
var axios_1 = __importDefault(require("axios"));
var moment_1 = __importDefault(require("moment"));
/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 * @async
 * @function
 * @name getGames
 * @param {string} country ISO country code
 * @param {boolean} includeAll include all offers like DLC's
 * @returns currentGames: games that are currently free. nextGames: announced games that will be free.
 */
var getGames = function (country, includeAll) {
    if (country === void 0) { country = "US"; }
    if (includeAll === void 0) { includeAll = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var data, _a, currentGames, nextGames, error_1;
        var _b, _c, _d, _e;
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
                        throw new Error("An error occurred\n        error: " + data.errors.map(function (err) {
                            return JSON.stringify(err, Object.getOwnPropertyNames(err), "\t");
                        }) + "\n        ");
                    _a = (_e = (_d = (_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.Catalog) === null || _c === void 0 ? void 0 : _c.searchStore) === null || _d === void 0 ? void 0 : _d.elements) === null || _e === void 0 ? void 0 : _e.reduce(function (acc, curr) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
                        var isBaseGame = includeAll ? true : curr.offerType === "BASE_GAME";
                        var hasPromotionalOffers = ((_b = (_a = curr.promotions) === null || _a === void 0 ? void 0 : _a.promotionalOffers) === null || _b === void 0 ? void 0 : _b.length) !== 0;
                        var hasUpcomingPromotionalOffers = ((_d = (_c = curr.promotions) === null || _c === void 0 ? void 0 : _c.upcomingPromotionalOffers) === null || _d === void 0 ? void 0 : _d.length) !== 0;
                        var isFree = ((_f = (_e = curr.price) === null || _e === void 0 ? void 0 : _e.totalPrice) === null || _f === void 0 ? void 0 : _f.discountPrice) === 0;
                        var inThisWeek = moment_1.default() >
                            moment_1.default((_j = (_h = (_g = curr.promotions) === null || _g === void 0 ? void 0 : _g.promotionalOffers[0]) === null || _h === void 0 ? void 0 : _h.promotionalOffers[0]) === null || _j === void 0 ? void 0 : _j.startDate) &&
                            moment_1.default() <
                                moment_1.default((_m = (_l = (_k = curr.promotions) === null || _k === void 0 ? void 0 : _k.promotionalOffers[0]) === null || _l === void 0 ? void 0 : _l.promotionalOffers[0]) === null || _m === void 0 ? void 0 : _m.endDate);
                        var inNextWeek = moment_1.default().add(1, "week") >
                            moment_1.default((_q = (_p = (_o = curr.promotions) === null || _o === void 0 ? void 0 : _o.upcomingPromotionalOffers[0]) === null || _p === void 0 ? void 0 : _p.promotionalOffers[0]) === null || _q === void 0 ? void 0 : _q.startDate) &&
                            moment_1.default().add(1, "week") <
                                moment_1.default((_t = (_s = (_r = curr.promotions) === null || _r === void 0 ? void 0 : _r.upcomingPromotionalOffers[0]) === null || _s === void 0 ? void 0 : _s.promotionalOffers[0]) === null || _t === void 0 ? void 0 : _t.endDate);
                        var willBeFree = ((_x = (_w = (_v = (_u = curr.promotions) === null || _u === void 0 ? void 0 : _u.upcomingPromotionalOffers[0]) === null || _v === void 0 ? void 0 : _v.promotionalOffers[0]) === null || _w === void 0 ? void 0 : _w.discountSetting) === null || _x === void 0 ? void 0 : _x.discountPercentage) === 0;
                        if (isBaseGame && hasPromotionalOffers && isFree && inThisWeek)
                            return __assign(__assign({}, acc), { currentGames: __spreadArray(__spreadArray([], acc.currentGames), [curr]) });
                        if (isBaseGame &&
                            hasUpcomingPromotionalOffers &&
                            willBeFree &&
                            inNextWeek)
                            return __assign(__assign({}, acc), { nextGames: __spreadArray(__spreadArray([], acc.nextGames), [curr]) });
                        return __assign({}, acc);
                    }, {
                        currentGames: [],
                        nextGames: [],
                    }), currentGames = _a.currentGames, nextGames = _a.nextGames;
                    return [2 /*return*/, { currentGames: currentGames, nextGames: nextGames }];
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