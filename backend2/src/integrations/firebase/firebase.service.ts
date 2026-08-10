import {
  Injectable, OnModuleInit
} from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

@Injectable()
export class FirebaseService implements OnModuleInit {
  constructor(
    private readonly config: ConfigService,
  ) { }

  onModuleInit() {
    if (!getApps().length) {
      initializeApp({
        credential: cert({
          projectId: this.config.get<string>("firebase.projectId"),
          clientEmail: this.config.get<string>("firebase.clientEmail"),
          privateKey: this.config
            .get<string>("firebase.privateKey")
            ?.replace(/\\n/g, "\n"),
        }),
      });
    }
  }

  async verifyIdToken(token: string) {
    return getAuth().verifyIdToken(token);
  }
  

}
