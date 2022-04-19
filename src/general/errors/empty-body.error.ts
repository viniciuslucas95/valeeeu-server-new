import { BadRequestException } from "@nestjs/common";

export class EmptyBodyException extends BadRequestException {
    constructor() {
        super('EmptyBody')
    }
}