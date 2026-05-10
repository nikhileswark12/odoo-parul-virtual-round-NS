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
exports.Trip = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/user.entity");
const trip_stop_entity_1 = require("./trip-stop.entity");
const budget_item_entity_1 = require("./budget-item.entity");
const packing_item_entity_1 = require("./packing-item.entity");
const trip_note_entity_1 = require("./trip-note.entity");
let Trip = class Trip {
    id;
    name;
    description;
    startDate;
    endDate;
    coverPhoto;
    isPublic;
    shareToken;
    status;
    user;
    userId;
    stops;
    budgetItems;
    packingItems;
    notes;
    createdAt;
    updatedAt;
};
exports.Trip = Trip;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Trip.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Trip.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], Trip.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Trip.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Trip.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Trip.prototype, "coverPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Trip.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: true }),
    __metadata("design:type", String)
], Trip.prototype, "shareToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'draft' }),
    __metadata("design:type", String)
], Trip.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.trips, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Trip.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Trip.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => trip_stop_entity_1.TripStop, (stop) => stop.trip, { cascade: true }),
    __metadata("design:type", Array)
], Trip.prototype, "stops", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => budget_item_entity_1.BudgetItem, (b) => b.trip, { cascade: true }),
    __metadata("design:type", Array)
], Trip.prototype, "budgetItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => packing_item_entity_1.PackingItem, (p) => p.trip, { cascade: true }),
    __metadata("design:type", Array)
], Trip.prototype, "packingItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => trip_note_entity_1.TripNote, (n) => n.trip, { cascade: true }),
    __metadata("design:type", Array)
], Trip.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Trip.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Trip.prototype, "updatedAt", void 0);
exports.Trip = Trip = __decorate([
    (0, typeorm_1.Entity)('trips')
], Trip);
//# sourceMappingURL=trip.entity.js.map