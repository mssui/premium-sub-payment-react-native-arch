import {
  Injectable
} from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

@Injectable()
export class FirebaseService {

  constructor(
    private readonly config: ConfigService,
  ) {

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

  private readonly auth = getAuth();
  
  async verifyIdToken(token: string) {
    return this.auth.verifyIdToken(token);
  }

}
