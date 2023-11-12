import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/service/auth/auth.service';
import { AuthController } from './auth/controller/auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    AuthModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
