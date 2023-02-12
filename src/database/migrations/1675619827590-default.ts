import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675619827590 implements MigrationInterface {
    name = 'default1675619827590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "username" text NOT NULL, "password" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "url" ("id" uuid NOT NULL, "main" text NOT NULL, "uri" text NOT NULL, "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "url" ADD CONSTRAINT "FK_5a6f06cf39e1d19c00f7524c4e8" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "url" DROP CONSTRAINT "FK_5a6f06cf39e1d19c00f7524c4e8"`);
        await queryRunner.query(`DROP TABLE "url"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
