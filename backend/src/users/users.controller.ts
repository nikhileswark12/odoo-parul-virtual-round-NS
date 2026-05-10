import { Controller, Get, Put, Delete, Body, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  getProfile(@Request() req: any) {
    return this.usersService.findById(req.user.sub);
  }

  @Put('profile')
  updateProfile(@Request() req: any, @Body() body: any) {
    const { password, role, ...safe } = body;
    return this.usersService.update(req.user.sub, safe);
  }

  @Delete('account')
  deleteAccount(@Request() req: any) {
    return this.usersService.delete(req.user.sub);
  }
}
