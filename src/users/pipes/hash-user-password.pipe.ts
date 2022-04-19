import { Injectable, PipeTransform } from "@nestjs/common";
import { genSalt, hash } from "bcrypt";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class HashUserPasswordPipe implements PipeTransform<any> {
    async transform(dto: UpdateUserDto) {
        if (dto.password) {
            const salt = await genSalt()
            dto.password = await hash(dto.password, salt)
        }

        return dto
    }
}