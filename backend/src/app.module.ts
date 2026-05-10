import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import * as fs from 'fs';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TripsModule } from './trips/trips.module';
import { CitiesModule } from './cities/cities.module';
import { ActivitiesModule } from './activities/activities.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbPath = config.get('DB_PATH', './data/traveloop.db');
        const dir = path.dirname(path.resolve(dbPath));
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        return {
          type: 'better-sqlite3',
          database: dbPath,
          autoLoadEntities: true,
          synchronize: true,
          logging: false,
        } as any;
      },
    }),
    AuthModule,
    UsersModule,
    TripsModule,
    CitiesModule,
    ActivitiesModule,
    AdminModule,
    SharedModule,
  ],
})
export class AppModule {}
