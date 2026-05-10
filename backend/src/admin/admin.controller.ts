import { Controller, Get, UseGuards, Request, ForbiddenException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TripsService } from '../trips/trips.service';
import { UsersService } from '../users/users.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('admin')
export class AdminController {
  constructor(private tripsService: TripsService, private usersService: UsersService) {}

  @Get('stats')
  async getStats(@Request() req: any) {
    if (req.user.role !== 'admin') throw new ForbiddenException('Admins only');
    const [tripStats, users] = await Promise.all([
      this.tripsService.getStats(),
      this.usersService.findAll(),
    ]);
    return { ...tripStats, totalUsers: users.length, users };
  }
}
