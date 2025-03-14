import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const logger = new Logger('Database');

      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        logging: configService.get<boolean>('DB_LOGGING', false),
      });

      sequelize.addModels([User]);
      await sequelize.sync();

      logger.log(`📡 Connected to Database: ${sequelize.getDatabaseName()}`);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
