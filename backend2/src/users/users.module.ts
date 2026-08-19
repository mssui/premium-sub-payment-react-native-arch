import { Module } from "@nestjs/common";

import { AuthModule } from "@/auth/auth.module";
import { UserService } from "./users.service";

import { UsersRepository } from "./repositories/users.repository";
import { UsersController } from "./users.controller";

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [UsersRepository, UserService],
})
export class UsersModule {}