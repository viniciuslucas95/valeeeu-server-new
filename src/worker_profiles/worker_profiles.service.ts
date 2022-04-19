import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UserNotFoundException } from 'src/users/errors/user-not-found.error';
import { Repository } from 'typeorm';
import { CreateWorkerProfileDto } from './dto/create-worker_profile.dto';
import { UpdateWorkerProfileDto } from './dto/update-worker_profile.dto';
import { WorkerProfile } from './entities/worker_profile.entity';
import { WorkerProfileConflictException } from './errors/worker_profile-conflict.error';

@Injectable()
export class WorkerProfilesService {
  constructor(
    @InjectRepository(WorkerProfile) private workerProfileRepository: Repository<WorkerProfile>,
    @InjectRepository(User) private userRepository: Repository<User>) { }

  async create(userId: string, createWorkerProfileDto: CreateWorkerProfileDto) {
    const user = await this.userRepository.findOneBy({ id: userId })

    if (!user) throw new UserNotFoundException()

    const workerProfile = this.workerProfileRepository.create(createWorkerProfileDto)

    if (user.workerProfile) throw new WorkerProfileConflictException()

    user.workerProfile = workerProfile

    this.userRepository.save(user);

    return { workerProfileId: workerProfile.id }
  }

  findAll() {
    return `This action returns all workerProfiles`
  }

  findOne(id: string) {
    return `This action returns a #${id} workerProfile`
  }

  update(id: string, updateWorkerProfileDto: UpdateWorkerProfileDto) {
    return `This action updates a #${id} workerProfile`
  }

  remove(id: string) {
    return `This action removes a #${id} workerProfile`
  }
}
