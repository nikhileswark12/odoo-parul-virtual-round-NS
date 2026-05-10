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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsController = void 0;
const common_1 = require("@nestjs/common");
const trips_service_1 = require("./trips.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let TripsController = class TripsController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    create(req, body) {
        return this.svc.createTrip(req.user.sub, body);
    }
    list(req) {
        return this.svc.getTrips(req.user.sub);
    }
    get(id, req) {
        return this.svc.getTrip(id, req.user.sub);
    }
    update(id, req, body) {
        return this.svc.updateTrip(id, req.user.sub, body);
    }
    remove(id, req) {
        return this.svc.deleteTrip(id, req.user.sub);
    }
    share(id, req, body) {
        return this.svc.shareTrip(id, req.user.sub, body.isPublic);
    }
    addStop(tripId, req, body) {
        return this.svc.addStop(tripId, req.user.sub, body);
    }
    updateStop(tripId, stopId, req, body) {
        return this.svc.updateStop(tripId, stopId, req.user.sub, body);
    }
    deleteStop(tripId, stopId, req) {
        return this.svc.deleteStop(tripId, stopId, req.user.sub);
    }
    reorderStops(tripId, req, body) {
        return this.svc.reorderStops(tripId, req.user.sub, body.stopIds);
    }
    getBudget(tripId, req) {
        return this.svc.getBudget(tripId, req.user.sub);
    }
    addBudgetItem(tripId, req, body) {
        return this.svc.addBudgetItem(tripId, req.user.sub, body);
    }
    deleteBudgetItem(tripId, itemId, req) {
        return this.svc.deleteBudgetItem(tripId, itemId, req.user.sub);
    }
    getPacking(tripId, req) {
        return this.svc.getPacking(tripId, req.user.sub);
    }
    addPacking(tripId, req, body) {
        return this.svc.addPackingItem(tripId, req.user.sub, body);
    }
    updatePacking(tripId, itemId, req, body) {
        return this.svc.updatePackingItem(tripId, itemId, req.user.sub, body);
    }
    deletePacking(tripId, itemId, req) {
        return this.svc.deletePackingItem(tripId, itemId, req.user.sub);
    }
    getNotes(tripId, req) {
        return this.svc.getNotes(tripId, req.user.sub);
    }
    addNote(tripId, req, body) {
        return this.svc.addNote(tripId, req.user.sub, body);
    }
    updateNote(tripId, noteId, req, body) {
        return this.svc.updateNote(tripId, noteId, req.user.sub, body);
    }
    deleteNote(tripId, noteId, req) {
        return this.svc.deleteNote(tripId, noteId, req.user.sub);
    }
};
exports.TripsController = TripsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "get", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/share'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "share", null);
__decorate([
    (0, common_1.Post)(':id/stops'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "addStop", null);
__decorate([
    (0, common_1.Put)(':id/stops/:stopId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('stopId')),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "updateStop", null);
__decorate([
    (0, common_1.Delete)(':id/stops/:stopId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('stopId')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "deleteStop", null);
__decorate([
    (0, common_1.Patch)(':id/stops/reorder'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "reorderStops", null);
__decorate([
    (0, common_1.Get)(':id/budget'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "getBudget", null);
__decorate([
    (0, common_1.Post)(':id/budget'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "addBudgetItem", null);
__decorate([
    (0, common_1.Delete)(':id/budget/:itemId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('itemId')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "deleteBudgetItem", null);
__decorate([
    (0, common_1.Get)(':id/packing'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "getPacking", null);
__decorate([
    (0, common_1.Post)(':id/packing'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "addPacking", null);
__decorate([
    (0, common_1.Put)(':id/packing/:itemId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('itemId')),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "updatePacking", null);
__decorate([
    (0, common_1.Delete)(':id/packing/:itemId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('itemId')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "deletePacking", null);
__decorate([
    (0, common_1.Get)(':id/notes'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "getNotes", null);
__decorate([
    (0, common_1.Post)(':id/notes'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "addNote", null);
__decorate([
    (0, common_1.Put)(':id/notes/:noteId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('noteId')),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "updateNote", null);
__decorate([
    (0, common_1.Delete)(':id/notes/:noteId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('noteId')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "deleteNote", null);
exports.TripsController = TripsController = __decorate([
    (0, swagger_1.ApiTags)('Trips'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('trips'),
    __metadata("design:paramtypes", [trips_service_1.TripsService])
], TripsController);
//# sourceMappingURL=trips.controller.js.map