import { MinLength } from "class-validator";
import { MIN_NAME_LENGTH } from "src/users/constants/user.constant";

export class CreateWorkerProfileDto {
    @MinLength(MIN_NAME_LENGTH)
    job: string
}
