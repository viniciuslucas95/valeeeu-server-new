import { Module } from '@nestjs/common';
import { WorkerProfilesService } from './worker_profiles.service';
import { WorkerProfilesController } from './worker_profiles.controller';
import { WorkerProfile } from './entities/worker_profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkerProfile, User])],
  controllers: [WorkerProfilesController],
  providers: [WorkerProfilesService]
})
export class WorkerProfilesModule { }
