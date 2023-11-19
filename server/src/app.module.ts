import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/service/auth/auth.service';
import { AuthController } from './auth/controller/auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './auth/common/strategies/google.strategy';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PassportModule,
    CategoriesModule,
    ItemsModule,
    ListModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AppModule { }
