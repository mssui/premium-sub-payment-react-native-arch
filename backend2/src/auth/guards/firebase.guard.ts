import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import { AuthenticatedRequest } from "@/authenticated-request.interface";
import { FirebaseService } from "@/integrations/firebase/firebase.service";

@Injectable()
export class FirebaseGuard implements CanActivate {
  constructor(
    private readonly firebaseService: FirebaseService,
  ) { }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const request = context
      .switchToHttp()
      .getRequest<AuthenticatedRequest>();

    const authorization = request.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedException(
        "Missing Authorization header",
      );
    }

    if (!authorization.startsWith("Bearer ")) {
      throw new UnauthorizedException(
        "Invalid Authorization header",
      );
    }

    const token = authorization.substring(7);

    try {
      const decodedToken =
        await this.firebaseService.verifyIdToken(token);

      request.user = {
        uid: decodedToken.uid,
        email: decodedToken.email,
        name: decodedToken.name,
      };

      return true;
    } catch {
      throw new UnauthorizedException("Invalid Firebase token");
    }
  }
}

