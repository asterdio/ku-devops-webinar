import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello to everyone at KU Hackathon 2023! We welcome you to this webinar regarding the 12 factor Apps Methodology and its use in Cloud-Native Environment';
  }
}
