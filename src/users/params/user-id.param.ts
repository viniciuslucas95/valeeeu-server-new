import { IsUUID } from "class-validator";

export class UserIdParams {
    @IsUUID()
    userId: string;
}