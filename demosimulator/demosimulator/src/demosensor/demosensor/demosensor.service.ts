import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorEvent } from '../sensor-event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DemosensorService {
constructor(@InjectRepository(SensorEvent) private readonly sensorEvent: Repository<SensorEvent>){

}

    async find(where?: object, skip?: number, take?: number): Promise<SensorEvent[]> {
        // take = take ? Number(take) : 100;
        skip = skip ? Number(skip) : 0;
        where = where ? typeof where === "string" ? JSON.parse(where) : where : {};
        const sensorEvent = await this.sensorEvent.find({ skip, take, where });
        if (sensorEvent !== undefined) {
          return sensorEvent;
        } else {
          return [];
        }
      }

     async saveTodb(sensor_event:SensorEvent)
      {
        await this.sensorEvent.save(sensor_event);
      }
}
