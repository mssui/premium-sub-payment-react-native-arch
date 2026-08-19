import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  getUserByUid(uid: string) {
    return this.prisma.user.findUnique({
      where: { firebaseUid: uid },
    });
  }

  createUser(data: any) {
    const dataToSave = { ...data, firebaseUid: data.uid, displayName: data.name };
    delete dataToSave["uid"];
    delete dataToSave["name"];
    
    return this.prisma.user.create({
      data: { ...dataToSave },
    });
  }
}