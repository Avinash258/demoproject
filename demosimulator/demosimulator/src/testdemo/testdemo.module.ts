import { Module } from '@nestjs/common';
import { TestdemoService } from './testdemo/testdemo.service';
import { DemosensorService } from 'src/demosensor/demosensor/demosensor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorEvent } from 'src/demosensor/sensor-event.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SensorEvent])],
  providers: [TestdemoService,DemosensorService]
})
export class TestdemoModule {}
