import { ConflictException } from "@nestjs/common";

export class WorkerProfileConflictException extends ConflictException {
    constructor() {
        super('WorkerProfileConflict')
    }
}