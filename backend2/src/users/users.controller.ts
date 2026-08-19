import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CurrentUser } from "@/auth/decorators/current-user.decorator";
import { FirebaseGuard } from "@/auth/guards/firebase.guard";

import type { AuthenticatedUser } from "@/authenticated-user.interface";


@ApiTags("Users")
@ApiBearerAuth()
@Controller("users")
export class UsersController {
  @Get("me")
  @UseGuards(FirebaseGuard)
  getMe(
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return user;
  }
}