import { Controller, Get, Param } from '@nestjs/common';
import { TripsService } from '../trips/trips.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Shared')
@Controller('shared')
export class SharedController {
  constructor(private tripsService: TripsService) {}

  @Get(':token')
  getSharedTrip(@Param('token') token: string) {
    return this.tripsService.getSharedTrip(token);
  }
}
