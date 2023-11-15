import { Module } from '@nestjs/common';
import { AuthService } from './service/auth/auth.service';
import { AuthController } from './controller/auth/auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { LocalStrategy } from './common/strategies/local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { configService } from '../config/config.service';
import { DatabaseService } from '../database/database.service';
import { UsersService } from '../users/service/users/users.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: configService.getSecret(),
      global: true,
      signOptions: { expiresIn: '1d' }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtService, DatabaseService, UsersService],
  controllers: [AuthController],
  exports: [AuthService]
})

export class AuthModule { }
