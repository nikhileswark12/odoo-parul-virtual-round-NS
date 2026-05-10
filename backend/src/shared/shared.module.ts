import { Module } from '@nestjs/common';
import { SharedController } from './shared.controller';
import { TripsModule } from '../trips/trips.module';

@Module({
  imports: [TripsModule],
  controllers: [SharedController],
})
export class SharedModule {}
