import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreationAttributes } from 'sequelize';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@Inject('UserRepository') private userRepository: typeof User) {}

  async createUser(
    email: string,
    password: string,
    fullname: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userRepository.create<CreationAttributes<User>>({
      email,
      password: hashedPassword,
      fullname,
    } as CreationAttributes<User>);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
}
