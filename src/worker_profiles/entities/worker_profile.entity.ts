import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class WorkerProfile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    job: string;

    @OneToOne(() => User, user => user.workerProfile)
    user: User;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}