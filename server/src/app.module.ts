import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { configService } from './config/config.service';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [],
  providers: [],
})
export class AppModule {}
