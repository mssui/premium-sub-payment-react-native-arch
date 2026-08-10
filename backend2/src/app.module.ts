import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { configuration } from "./config/configuration";
import { validate } from "./config/env.validation";
import { FirebaseModule } from './integrations/firebase/firebase.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
    validate,
  }),
  PrismaModule,
  FirebaseModule,
  AuthModule,
  UsersModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
