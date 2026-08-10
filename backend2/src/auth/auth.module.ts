import { Module } from "@nestjs/common";

import { FirebaseModule } from "@/integrations/firebase/firebase.module";

import { FirebaseGuard } from "./guards/firebase.guard";

@Module({
  imports: [FirebaseModule],
  providers: [FirebaseGuard],
  exports: [FirebaseGuard, FirebaseModule],
})
export class AuthModule {}
