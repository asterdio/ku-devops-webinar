import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi Aman, CI is implemented but I haven't used docker-compose.yml. Check the ci.yml for changes. Hello to everyone at KU Hackathon 2023!';
  }
}
