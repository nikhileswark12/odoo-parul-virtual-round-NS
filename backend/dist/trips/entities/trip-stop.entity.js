"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripStop = void 0;
const typeorm_1 = require("typeorm");
const trip_entity_1 = require("./trip.entity");
let TripStop = class TripStop {
    id;
    cityName;
    cityId;
    region;
    state;
    arrivalDate;
    departureDate;
    orderIndex;
    activities;
    trip;
    tripId;
    createdAt;
};
exports.TripStop = TripStop;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TripStop.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripStop.prototype, "cityName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TripStop.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TripStop.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TripStop.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], TripStop.prototype, "arrivalDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], TripStop.prototype, "departureDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TripStop.prototype, "orderIndex", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Array)
], TripStop.prototype, "activities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trip_entity_1.Trip, (trip) => trip.stops, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'tripId' }),
    __metadata("design:type", trip_entity_1.Trip)
], TripStop.prototype, "trip", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripStop.prototype, "tripId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TripStop.prototype, "createdAt", void 0);
exports.TripStop = TripStop = __decorate([
    (0, typeorm_1.Entity)('trip_stops')
], TripStop);
//# sourceMappingURL=trip-stop.entity.js.map