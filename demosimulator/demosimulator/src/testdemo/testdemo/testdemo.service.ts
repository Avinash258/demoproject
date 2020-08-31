import { Injectable, Global } from '@nestjs/common';
import { DemosensorService } from 'src/demosensor/demosensor/demosensor.service';
import { SensorEvent } from 'src/demosensor/sensor-event.entity';
import { GLOBAL} from 'src/config/sensorconfig';
const ObjectID=require('mongodb').ObjectID;
@Injectable()
export class TestdemoService {

    constructor(private readonly demosensorservice:DemosensorService){
        
    }
    async onApplicationBootstrap() {
        var sensordata = await this.demosensorservice.find();
        var PIR_value = ['SW1ON', 'SW1OFF'];
        var ALS_value = [0, 1, 2, 3];
        var EIP_6BC_value = ['PB1SC', 'PB2SC', 'PB3SC', 'PB4SC', 'PB5SC', 'PB6SC', 'PB1DC', 'PB2DC'];
        var date = new Date();
        var last = new Date(date.getTime() - (GLOBAL.NO_OF_DAYS * 24 * 60 * 60 * 1000));
        var noOfRecords = GLOBAL.FREQUENCY_PER_HOUR * 24 * GLOBAL.NO_OF_DAYS;
        var timediff = 60 * 60 / GLOBAL.FREQUENCY_PER_HOUR;
        while (last < date) {
            let sensorval: any = "";
            let type: any = "";
            if (GLOBAL.SENSOR === 'power') {
                sensorval = Math.floor(Math.random() * 2000);
                type = 'int';
            } else if (GLOBAL.SENSOR === 'EIP_PIR') {
                const random = Math.floor(Math.random() * PIR_value.length);
                sensorval = PIR_value[random];
                type = 'string';
            } else if (GLOBAL.SENSOR === 'EIP_ALS') {
                sensorval = Math.floor(Math.random() * 2000);
                type = 'int';
            } else if (GLOBAL.SENSOR === 'EIP_6BC') {
                const random = Math.floor(Math.random() * EIP_6BC_value.length);
                sensorval = EIP_6BC_value[random];
                type = 'string';
            }
            var sensorobjdata: SensorEvent = {
                // id:new ObjectID(11),
                ip: GLOBAL.IP,
                mac: GLOBAL.MAC,
                datatype: type,
                sensor: GLOBAL.SENSOR,
                value: sensorval,
                event_time: last,//new Date(),
                device_type:'nuled',
                campus: '5ef01eca3526dd215db19525',
                building: '5ef01ed93526dd215db19526',
                floor: '5ef01ef63526dd215db19527',
                zone: GLOBAL.ZONE
            }
             await this.demosensorservice.saveTodb(sensorobjdata as SensorEvent);
            last.setSeconds(last.getSeconds() + timediff);
           
        }
    }
}
