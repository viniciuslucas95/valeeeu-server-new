import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseMigrations1650312390780 implements MigrationInterface {
    name = 'BaseMigrations1650312390780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "worker_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "job" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_002df6bfaf600aa8929115fa142" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "worker_profile_id" uuid, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "REL_83fea0de6f5ce13b228cb18cf8" UNIQUE ("worker_profile_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_83fea0de6f5ce13b228cb18cf81" FOREIGN KEY ("worker_profile_id") REFERENCES "worker_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_83fea0de6f5ce13b228cb18cf81"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "worker_profile"`);
    }

}
