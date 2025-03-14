import {
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(context: ExecutionContext) {
    this.logger.log('Checking JWT authentication...');
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context) {
    const request = context.switchToHttp().getRequest();
    this.logger.log(
      `Raw Authorization Header: ${request.headers.authorization}`,
    );

    if (err || !user) {
      this.logger.error(
        `Unauthorized access attempt. Error: ${err ? err.message : 'No user found'}`,
      );
      throw new UnauthorizedException('Invalid or missing token');
    }

    this.logger.log(`User authenticated: ${JSON.stringify(user)}`);
    return user;
  }
}
