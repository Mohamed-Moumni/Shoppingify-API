import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/service/auth/auth.service';
import { AuthController } from './auth/controller/auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './auth/common/strategies/google.strategy';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PassportModule
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AppModule { }
