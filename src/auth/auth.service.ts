import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    private readonly apiKey: string
    constructor(private readonly configService: ConfigService) {}
}
