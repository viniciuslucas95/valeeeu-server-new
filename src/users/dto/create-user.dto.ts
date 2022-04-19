import { MinLength } from "class-validator";
import { CREDENTIALS_LENGTH, MIN_NAME_LENGTH } from "../constants/user.constant";
import { IsUsername } from "../validators/is-username.validator";

export class CreateUserDto {
    @IsUsername()
    @MinLength(CREDENTIALS_LENGTH)
    username: string;

    @MinLength(CREDENTIALS_LENGTH)
    password: string;

    @MinLength(MIN_NAME_LENGTH)
    name: string;
}
