import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserNotFoundException } from './errors/user-not-found.error';
import { UsernameConflictException } from './errors/username-conflict.error';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOneBy({ username: createUserDto.username })

    if (user) throw new UsernameConflictException()

    const { id } = await this.userRepository.save(createUserDto)

    return { userId: id }
  }

  findAll() {
    return this.userRepository.find()
  }

  async findOne(userId: string) {
    const user = await this.userRepository.findOneBy({ id: userId })

    if (!user) throw new UserNotFoundException()

    return user
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(userId)

    const keys = Object.keys(updateUserDto);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'username') {
        if (user.username === updateUserDto.username) throw new UsernameConflictException()

        const otherUser = await this.userRepository.findOneBy({ username: updateUserDto.username, id: Not(userId) })

        if (otherUser) throw new UsernameConflictException()
      }

      user[keys[i]] = updateUserDto[keys[i]]
    }

    await this.userRepository.save(user)

    return
  }

  async remove(userId: string) {
    const user = await this.findOne(userId)

    if (!user) throw new UserNotFoundException()

    // const queryRunner = postgresqlAsyncOptions.

    return this.userRepository.delete({ id: userId })
  }
}