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
exports.TripsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const crypto_1 = require("crypto");
const trip_entity_1 = require("./entities/trip.entity");
const trip_stop_entity_1 = require("./entities/trip-stop.entity");
const budget_item_entity_1 = require("./entities/budget-item.entity");
const packing_item_entity_1 = require("./entities/packing-item.entity");
const trip_note_entity_1 = require("./entities/trip-note.entity");
let TripsService = class TripsService {
    tripsRepo;
    stopsRepo;
    budgetRepo;
    packingRepo;
    notesRepo;
    constructor(tripsRepo, stopsRepo, budgetRepo, packingRepo, notesRepo) {
        this.tripsRepo = tripsRepo;
        this.stopsRepo = stopsRepo;
        this.budgetRepo = budgetRepo;
        this.packingRepo = packingRepo;
        this.notesRepo = notesRepo;
    }
    async createTrip(userId, data) {
        const trip = this.tripsRepo.create({ ...data, userId });
        return this.tripsRepo.save(trip);
    }
    async getTrips(userId) {
        return this.tripsRepo.find({
            where: { userId },
            relations: ['stops'],
            order: { createdAt: 'DESC' },
        });
    }
    async getTrip(id, userId) {
        const trip = await this.tripsRepo.findOne({
            where: { id },
            relations: ['stops', 'budgetItems', 'packingItems', 'notes'],
        });
        if (!trip)
            throw new common_1.NotFoundException('Trip not found');
        if (trip.userId !== userId)
            throw new common_1.ForbiddenException();
        return trip;
    }
    async updateTrip(id, userId, data) {
        const trip = await this.getTrip(id, userId);
        Object.assign(trip, data);
        return this.tripsRepo.save(trip);
    }
    async deleteTrip(id, userId) {
        const trip = await this.getTrip(id, userId);
        await this.tripsRepo.remove(trip);
        return { message: 'Trip deleted' };
    }
    async shareTrip(id, userId, isPublic) {
        const trip = await this.getTrip(id, userId);
        trip.isPublic = isPublic;
        if (isPublic && !trip.shareToken) {
            trip.shareToken = (0, crypto_1.randomBytes)(12).toString('hex');
        }
        return this.tripsRepo.save(trip);
    }
    async getSharedTrip(token) {
        const trip = await this.tripsRepo.findOne({
            where: { shareToken: token, isPublic: true },
            relations: ['stops', 'budgetItems'],
        });
        if (!trip)
            throw new common_1.NotFoundException('Shared trip not found');
        return trip;
    }
    async addStop(tripId, userId, data) {
        await this.getTrip(tripId, userId);
        const count = await this.stopsRepo.count({ where: { tripId } });
        const stop = this.stopsRepo.create({ ...data, tripId, orderIndex: count });
        return this.stopsRepo.save(stop);
    }
    async updateStop(tripId, stopId, userId, data) {
        await this.getTrip(tripId, userId);
        const stop = await this.stopsRepo.findOne({ where: { id: stopId, tripId } });
        if (!stop)
            throw new common_1.NotFoundException('Stop not found');
        Object.assign(stop, data);
        return this.stopsRepo.save(stop);
    }
    async deleteStop(tripId, stopId, userId) {
        await this.getTrip(tripId, userId);
        await this.stopsRepo.delete({ id: stopId, tripId });
        return { message: 'Stop deleted' };
    }
    async reorderStops(tripId, userId, stopIds) {
        await this.getTrip(tripId, userId);
        for (let i = 0; i < stopIds.length; i++) {
            await this.stopsRepo.update({ id: stopIds[i], tripId }, { orderIndex: i });
        }
        return { message: 'Stops reordered' };
    }
    async getBudget(tripId, userId) {
        await this.getTrip(tripId, userId);
        return this.budgetRepo.find({ where: { tripId } });
    }
    async addBudgetItem(tripId, userId, data) {
        await this.getTrip(tripId, userId);
        const item = this.budgetRepo.create({ ...data, tripId });
        return this.budgetRepo.save(item);
    }
    async deleteBudgetItem(tripId, itemId, userId) {
        await this.getTrip(tripId, userId);
        await this.budgetRepo.delete({ id: itemId, tripId });
        return { message: 'Budget item deleted' };
    }
    async getPacking(tripId, userId) {
        await this.getTrip(tripId, userId);
        return this.packingRepo.find({ where: { tripId }, order: { createdAt: 'ASC' } });
    }
    async addPackingItem(tripId, userId, data) {
        await this.getTrip(tripId, userId);
        const item = this.packingRepo.create({ ...data, tripId });
        return this.packingRepo.save(item);
    }
    async updatePackingItem(tripId, itemId, userId, data) {
        await this.getTrip(tripId, userId);
        await this.packingRepo.update({ id: itemId, tripId }, data);
        return this.packingRepo.findOne({ where: { id: itemId } });
    }
    async deletePackingItem(tripId, itemId, userId) {
        await this.getTrip(tripId, userId);
        await this.packingRepo.delete({ id: itemId, tripId });
        return { message: 'Packing item deleted' };
    }
    async getNotes(tripId, userId) {
        await this.getTrip(tripId, userId);
        return this.notesRepo.find({ where: { tripId }, order: { createdAt: 'DESC' } });
    }
    async addNote(tripId, userId, data) {
        await this.getTrip(tripId, userId);
        const note = this.notesRepo.create({ ...data, tripId });
        return this.notesRepo.save(note);
    }
    async updateNote(tripId, noteId, userId, data) {
        await this.getTrip(tripId, userId);
        await this.notesRepo.update({ id: noteId, tripId }, data);
        return this.notesRepo.findOne({ where: { id: noteId } });
    }
    async deleteNote(tripId, noteId, userId) {
        await this.getTrip(tripId, userId);
        await this.notesRepo.delete({ id: noteId, tripId });
        return { message: 'Note deleted' };
    }
    async getStats() {
        const total = await this.tripsRepo.count();
        const shared = await this.tripsRepo.count({ where: { isPublic: true } });
        const topCities = await this.stopsRepo
            .createQueryBuilder('s')
            .select('s.cityName', 'city')
            .addSelect('COUNT(*)', 'count')
            .groupBy('s.cityName')
            .orderBy('count', 'DESC')
            .limit(10)
            .getRawMany();
        return { totalTrips: total, sharedTrips: shared, topCities };
    }
};
exports.TripsService = TripsService;
exports.TripsService = TripsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trip_entity_1.Trip)),
    __param(1, (0, typeorm_1.InjectRepository)(trip_stop_entity_1.TripStop)),
    __param(2, (0, typeorm_1.InjectRepository)(budget_item_entity_1.BudgetItem)),
    __param(3, (0, typeorm_1.InjectRepository)(packing_item_entity_1.PackingItem)),
    __param(4, (0, typeorm_1.InjectRepository)(trip_note_entity_1.TripNote)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TripsService);
//# sourceMappingURL=trips.service.js.map