import { ConflictException } from "@nestjs/common";

export class UsernameConflictException extends ConflictException {
    constructor() {
        super('UsernameConflict')
    }
}