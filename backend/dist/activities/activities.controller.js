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
exports.ActivitiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ACTIVITIES = [
    { id: 'a1', name: 'Rohtang Pass Snow Experience', city: 'Manali', category: 'adventure', cost: 800, duration: 8, description: 'Drive to the famous Rohtang Pass for snow activities' },
    { id: 'a2', name: 'Solang Valley Paragliding', city: 'Manali', category: 'adventure', cost: 1500, duration: 3, description: 'Thrilling paragliding over the beautiful Solang Valley' },
    { id: 'a3', name: 'Old Manali Cafe Hop', city: 'Manali', category: 'food', cost: 400, duration: 2, description: 'Explore cozy cafes and taste local Himachali food' },
    { id: 'a4', name: 'North Goa Beach Party', city: 'Goa', category: 'leisure', cost: 500, duration: 4, description: 'Experience the legendary Goa beach nightlife' },
    { id: 'a5', name: 'Scuba Diving - Baga', city: 'Goa', category: 'adventure', cost: 2500, duration: 3, description: 'Explore coral reefs in the Arabian Sea' },
    { id: 'a6', name: 'Spice Plantation Tour', city: 'Goa', category: 'sightseeing', cost: 600, duration: 3, description: 'Visit a traditional Goan spice plantation' },
    { id: 'a7', name: 'Amber Fort Elephant Ride', city: 'Jaipur', category: 'cultural', cost: 1200, duration: 2, description: 'Majestic elephant ride to Amber Fort' },
    { id: 'a8', name: 'Pink City Heritage Walk', city: 'Jaipur', category: 'cultural', cost: 300, duration: 3, description: 'Guided walk through old Jaipur bazaars' },
    { id: 'a9', name: 'Rajasthani Dinner Show', city: 'Jaipur', category: 'food', cost: 1500, duration: 3, description: 'Traditional folk dances with authentic cuisine' },
    { id: 'a10', name: 'Taj Mahal Sunrise Visit', city: 'Agra', category: 'sightseeing', cost: 1100, duration: 3, description: 'Witness the Taj at golden sunrise hour' },
    { id: 'a11', name: 'Agra Fort Tour', city: 'Agra', category: 'cultural', cost: 550, duration: 2, description: 'Explore the magnificent Mughal fort' },
    { id: 'a12', name: 'Tea Estate Tour', city: 'Munnar', category: 'sightseeing', cost: 400, duration: 3, description: 'Walk through lush green tea gardens' },
    { id: 'a13', name: 'Eravikulam Trekking', city: 'Munnar', category: 'adventure', cost: 600, duration: 5, description: 'Trek in Eravikulam National Park' },
    { id: 'a14', name: 'Houseboat Backwater Cruise', city: 'Alleppey', category: 'leisure', cost: 6000, duration: 24, description: 'Overnight luxury houseboat in Kerala backwaters' },
    { id: 'a15', name: 'Kayaking in Backwaters', city: 'Alleppey', category: 'adventure', cost: 800, duration: 2, description: 'Kayak through tranquil backwater canals' },
    { id: 'a16', name: 'Ganga Aarti Ceremony', city: 'Varanasi', category: 'cultural', cost: 0, duration: 2, description: 'Witness the mesmerizing evening Ganga Aarti' },
    { id: 'a17', name: 'Boat Ride at Sunrise', city: 'Varanasi', category: 'sightseeing', cost: 400, duration: 2, description: 'Row on the Ganges at dawn' },
    { id: 'a18', name: 'Camel Safari in Thar', city: 'Jaisalmer', category: 'adventure', cost: 1800, duration: 4, description: 'Camel safari through golden sand dunes' },
    { id: 'a19', name: 'Desert Camping Night', city: 'Jaisalmer', category: 'leisure', cost: 3000, duration: 12, description: 'Stargazing and bonfire camp in the desert' },
    { id: 'a20', name: 'Toy Train Ride', city: 'Darjeeling', category: 'sightseeing', cost: 700, duration: 2, description: 'UNESCO heritage Darjeeling Himalayan Railway' },
    { id: 'a21', name: 'Tiger Hill Sunrise', city: 'Darjeeling', category: 'sightseeing', cost: 300, duration: 3, description: 'Watch sunrise over Kanchenjunga peaks' },
];
let ActivitiesController = class ActivitiesController {
    getActivities(city, category, q, maxCost) {
        let acts = [...ACTIVITIES];
        if (city)
            acts = acts.filter(a => a.city.toLowerCase().includes(city.toLowerCase()));
        if (category)
            acts = acts.filter(a => a.category === category);
        if (q)
            acts = acts.filter(a => a.name.toLowerCase().includes(q.toLowerCase()));
        if (maxCost)
            acts = acts.filter(a => a.cost <= Number(maxCost));
        return acts;
    }
    getCategories() {
        return [
            { id: 'adventure', label: 'Adventure', emoji: '🧗' },
            { id: 'cultural', label: 'Cultural', emoji: '🎭' },
            { id: 'sightseeing', label: 'Sightseeing', emoji: '📸' },
            { id: 'food', label: 'Food & Dining', emoji: '🍽️' },
            { id: 'leisure', label: 'Leisure', emoji: '🛥️' },
            { id: 'wellness', label: 'Wellness & Spa', emoji: '🧘' },
        ];
    }
};
exports.ActivitiesController = ActivitiesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('city')),
    __param(1, (0, common_1.Query)('category')),
    __param(2, (0, common_1.Query)('q')),
    __param(3, (0, common_1.Query)('maxCost')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], ActivitiesController.prototype, "getActivities", null);
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActivitiesController.prototype, "getCategories", null);
exports.ActivitiesController = ActivitiesController = __decorate([
    (0, swagger_1.ApiTags)('Activities'),
    (0, common_1.Controller)('activities')
], ActivitiesController);
//# sourceMappingURL=activities.controller.js.map