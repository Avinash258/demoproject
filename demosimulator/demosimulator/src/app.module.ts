import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensoreventModule } from './sensor/sensorevent/sensorevent.module';
import { DemosensorModule } from './demosensor/demosensor.module';
import { TestdemoModule } from './testdemo/testdemo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://172.40.0.40:27017/',
     // port: 27107,
      //username: 'root',
     // password: 'root',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SensoreventModule,
    DemosensorModule,
    TestdemoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
