import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi Aman CI is implemented but I haven't used docker-compose, Check the ci-yml, Hello to everyone at KU Hackathon 2023!';
  }
}
