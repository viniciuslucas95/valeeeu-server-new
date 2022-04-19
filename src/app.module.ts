import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmAsyncConfig } from './configs/typeorm-async.config';
import { UsersModule } from './users/users.module';
import { WorkerProfilesModule } from './worker_profiles/worker_profiles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UsersModule,
    WorkerProfilesModule],
  controllers: [],
  providers: [],
})
export class AppModule { } 
