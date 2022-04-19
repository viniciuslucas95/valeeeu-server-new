import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UsersService } from './users.service';
import { HashUserPasswordPipe } from './pipes/hash-user-password.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserIdParams } from './params/user-id.param';
import { EmptyBodyValidationPipe } from 'src/general/pipes/empty-body-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body(new HashUserPasswordPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':userId')
  findOne(@Param() { userId }: UserIdParams) {
    return this.usersService.findOne(userId);
  }

  @Patch(':userId')
  @HttpCode(204)
  update(
    @Param() { userId }: UserIdParams,
    @Body(new EmptyBodyValidationPipe(), new HashUserPasswordPipe()) updateUserDto: UpdateUserDto) {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':userId')
  @HttpCode(204)
  remove(@Param() { userId }: UserIdParams) {
    return this.usersService.remove(userId);
  }
}
