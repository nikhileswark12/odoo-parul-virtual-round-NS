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
exports.CitiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const INDIA_CITIES = [
    { id: 'manali', name: 'Manali', state: 'Himachal Pradesh', region: 'North India', type: 'hill-station', costIndex: 'medium', popularity: 95, description: 'Gateway to the Himalayas with stunning valleys', image: 'manali' },
    { id: 'shimla', name: 'Shimla', state: 'Himachal Pradesh', region: 'North India', type: 'hill-station', costIndex: 'medium', popularity: 92, description: 'The Queen of Hills, former British summer capital', image: 'shimla' },
    { id: 'ooty', name: 'Ooty', state: 'Tamil Nadu', region: 'South India', type: 'hill-station', costIndex: 'low', popularity: 88, description: 'Queen of Nilgiris surrounded by tea gardens', image: 'ooty' },
    { id: 'munnar', name: 'Munnar', state: 'Kerala', region: 'South India', type: 'hill-station', costIndex: 'medium', popularity: 90, description: 'Lush tea plantations and misty mountains', image: 'munnar' },
    { id: 'darjeeling', name: 'Darjeeling', state: 'West Bengal', region: 'East India', type: 'hill-station', costIndex: 'medium', popularity: 87, description: 'World-famous tea and Himalayan views', image: 'darjeeling' },
    { id: 'mussoorie', name: 'Mussoorie', state: 'Uttarakhand', region: 'North India', type: 'hill-station', costIndex: 'medium', popularity: 89, description: 'Queen of the Hills near Dehradun', image: 'mussoorie' },
    { id: 'kodaikanal', name: 'Kodaikanal', state: 'Tamil Nadu', region: 'South India', type: 'hill-station', costIndex: 'low', popularity: 83, description: 'Princess of Hill Stations with serene lake', image: 'kodaikanal' },
    { id: 'coorg', name: 'Coorg', state: 'Karnataka', region: 'South India', type: 'hill-station', costIndex: 'medium', popularity: 86, description: 'Scotland of India with coffee estates', image: 'coorg' },
    { id: 'goa', name: 'Goa', state: 'Goa', region: 'West India', type: 'beach', costIndex: 'medium', popularity: 98, description: 'India\'s beach paradise with vibrant nightlife', image: 'goa' },
    { id: 'varkala', name: 'Varkala', state: 'Kerala', region: 'South India', type: 'beach', costIndex: 'low', popularity: 82, description: 'Stunning cliffside beach with mineral springs', image: 'varkala' },
    { id: 'pondicherry', name: 'Pondicherry', state: 'Puducherry', region: 'South India', type: 'beach', costIndex: 'low', popularity: 85, description: 'French Riviera of the East', image: 'pondicherry' },
    { id: 'andaman', name: 'Andaman Islands', state: 'Andaman & Nicobar', region: 'Islands', type: 'beach', costIndex: 'high', popularity: 93, description: 'Pristine beaches and vibrant coral reefs', image: 'andaman' },
    { id: 'lakshadweep', name: 'Lakshadweep', state: 'Lakshadweep', region: 'Islands', type: 'beach', costIndex: 'high', popularity: 78, description: 'Coral paradise with crystal-clear lagoons', image: 'lakshadweep' },
    { id: 'kovalam', name: 'Kovalam', state: 'Kerala', region: 'South India', type: 'beach', costIndex: 'low', popularity: 81, description: 'Crescent-shaped beach with lighthouse', image: 'kovalam' },
    { id: 'agra', name: 'Agra', state: 'Uttar Pradesh', region: 'North India', type: 'heritage', costIndex: 'low', popularity: 97, description: 'Home of the magnificent Taj Mahal', image: 'agra' },
    { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', region: 'North India', type: 'heritage', costIndex: 'medium', popularity: 96, description: 'Pink City with royal palaces and forts', image: 'jaipur' },
    { id: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', region: 'North India', type: 'heritage', costIndex: 'low', popularity: 91, description: 'Oldest living city on the Ganges', image: 'varanasi' },
    { id: 'hampi', name: 'Hampi', state: 'Karnataka', region: 'South India', type: 'heritage', costIndex: 'low', popularity: 84, description: 'UNESCO World Heritage ruins of Vijayanagara', image: 'hampi' },
    { id: 'khajuraho', name: 'Khajuraho', state: 'Madhya Pradesh', region: 'Central India', type: 'heritage', costIndex: 'low', popularity: 80, description: 'Medieval temples with intricate sculptures', image: 'khajuraho' },
    { id: 'kerala-backwaters', name: 'Alleppey', state: 'Kerala', region: 'South India', type: 'tropical', costIndex: 'medium', popularity: 94, description: 'Venice of the East with serene backwaters', image: 'alleppey' },
    { id: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', region: 'South India', type: 'tropical', costIndex: 'low', popularity: 72, description: 'Gateway to Nilgiris with pleasant climate', image: 'coimbatore' },
    { id: 'delhi', name: 'New Delhi', state: 'Delhi', region: 'North India', type: 'metro', costIndex: 'medium', popularity: 99, description: 'India\'s capital with history and modernity', image: 'delhi' },
    { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', region: 'West India', type: 'metro', costIndex: 'high', popularity: 98, description: 'City of Dreams and financial capital', image: 'mumbai' },
    { id: 'bangalore', name: 'Bengaluru', state: 'Karnataka', region: 'South India', type: 'metro', costIndex: 'high', popularity: 95, description: 'Silicon Valley of India', image: 'bangalore' },
    { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', region: 'East India', type: 'metro', costIndex: 'low', popularity: 88, description: 'City of Joy and cultural heart of India', image: 'kolkata' },
    { id: 'jaisalmer', name: 'Jaisalmer', state: 'Rajasthan', region: 'North India', type: 'desert', costIndex: 'medium', popularity: 89, description: 'Golden City in the heart of Thar desert', image: 'jaisalmer' },
    { id: 'jodhpur', name: 'Jodhpur', state: 'Rajasthan', region: 'North India', type: 'desert', costIndex: 'medium', popularity: 88, description: 'Blue City with majestic Mehrangarh Fort', image: 'jodhpur' },
    { id: 'ranthambore', name: 'Ranthambore', state: 'Rajasthan', region: 'North India', type: 'wildlife', costIndex: 'high', popularity: 87, description: 'Famous tiger reserve in Rajasthan', image: 'ranthambore' },
    { id: 'jim-corbett', name: 'Jim Corbett', state: 'Uttarakhand', region: 'North India', type: 'wildlife', costIndex: 'high', popularity: 86, description: 'India\'s oldest national park', image: 'corbett' },
    { id: 'kaziranga', name: 'Kaziranga', state: 'Assam', region: 'Northeast India', type: 'wildlife', costIndex: 'medium', popularity: 85, description: 'UNESCO park home to one-horned rhinos', image: 'kaziranga' },
];
let CitiesController = class CitiesController {
    getCities(q, type, region, state) {
        let cities = [...INDIA_CITIES];
        if (q) {
            const lower = q.toLowerCase();
            cities = cities.filter(c => c.name.toLowerCase().includes(lower) ||
                c.state.toLowerCase().includes(lower) ||
                c.region.toLowerCase().includes(lower));
        }
        if (type)
            cities = cities.filter(c => c.type === type);
        if (region)
            cities = cities.filter(c => c.region === region);
        if (state)
            cities = cities.filter(c => c.state.toLowerCase().includes(state.toLowerCase()));
        return cities.sort((a, b) => b.popularity - a.popularity);
    }
    getTypes() {
        return [
            { id: 'hill-station', label: 'Hill Stations', emoji: '⛰️' },
            { id: 'beach', label: 'Beaches', emoji: '🏖️' },
            { id: 'heritage', label: 'Heritage & Culture', emoji: '🏛️' },
            { id: 'tropical', label: 'Tropical & Backwaters', emoji: '🌴' },
            { id: 'desert', label: 'Desert', emoji: '🏜️' },
            { id: 'wildlife', label: 'Wildlife', emoji: '🐯' },
            { id: 'metro', label: 'Metro Cities', emoji: '🏙️' },
        ];
    }
    getRegions() {
        return ['North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India', 'Islands'];
    }
};
exports.CitiesController = CitiesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_1.Query)('type')),
    __param(2, (0, common_1.Query)('region')),
    __param(3, (0, common_1.Query)('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "getCities", null);
__decorate([
    (0, common_1.Get)('types'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "getTypes", null);
__decorate([
    (0, common_1.Get)('regions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "getRegions", null);
exports.CitiesController = CitiesController = __decorate([
    (0, swagger_1.ApiTags)('Cities'),
    (0, common_1.Controller)('cities')
], CitiesController);
//# sourceMappingURL=cities.controller.js.map