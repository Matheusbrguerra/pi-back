import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Utilize a url base nas rotas a seguir \n baseurl/auth/signup \n baseurl/auth/signin';
  }
}
