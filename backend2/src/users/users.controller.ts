import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CurrentUser } from "@/auth/decorators/current-user.decorator";
import { FirebaseGuard } from "@/auth/guards/firebase.guard";

import type { AuthenticatedUser } from "@/authenticated-user.interface";
import { UserService } from "./users.service";


@ApiTags("Users")
@ApiBearerAuth()
@Controller("users")
export class UsersController {
  constructor(private userService: UserService) {}
  @Get("me")
  @UseGuards(FirebaseGuard)
  async getMe(
    @CurrentUser() user: AuthenticatedUser,
  ) {
    let userData = await this.userService.getCurrentUser(user);

    if (!userData) {
      //"User not found, creating new user in DB"
      userData = await this.userService.createNewUser(user);
    }

    return userData;
  }
}