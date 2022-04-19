import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkerProfilesService } from './worker_profiles.service';
import { CreateWorkerProfileDto } from './dto/create-worker_profile.dto';
import { UpdateWorkerProfileDto } from './dto/update-worker_profile.dto';
import { UserIdParams } from 'src/users/params/user-id.param';
import { EmptyBodyValidationPipe } from 'src/general/pipes/empty-body-validation.pipe';
import { WorkerProfileIdParam } from './params/worker_profile-id.param';

@Controller('users/:userId/worker-profiles')
export class WorkerProfilesController {
  constructor(private readonly workerProfilesService: WorkerProfilesService) { }

  @Post()
  create(@Param() { userId }: UserIdParams, @Body() createWorkerProfileDto: CreateWorkerProfileDto) {
    return this.workerProfilesService.create(userId, createWorkerProfileDto);
  }

  @Get()
  findAll() {
    return this.workerProfilesService.findAll();
  }

  @Get(':workerId')
  findOne(@Param() { userId, workerProfileId }: WorkerProfileIdParam) {
    return this.workerProfilesService.findOne(userId);
  }

  @Patch(':workerId')
  update(@Param() { userId, workerProfileId }: WorkerProfileIdParam, @Body(new EmptyBodyValidationPipe()) updateWorkerProfileDto: UpdateWorkerProfileDto) {
    return this.workerProfilesService.update(userId, updateWorkerProfileDto);
  }

  @Delete(':workerId')
  remove(@Param() { userId, workerProfileId }: WorkerProfileIdParam) {
    return this.workerProfilesService.remove(userId);
  }
}
