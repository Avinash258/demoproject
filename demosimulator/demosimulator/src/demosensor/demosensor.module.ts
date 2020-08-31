import { Module } from '@nestjs/common';
import { DemosensorService } from './demosensor/demosensor.service';
import { TestdemoModule } from 'src/testdemo/testdemo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorEvent } from './sensor-event.entity';

@Module({
  imports:[TestdemoModule,TypeOrmModule.forFeature([SensorEvent])],
  providers: [DemosensorService]
})
export class DemosensorModule {


}
