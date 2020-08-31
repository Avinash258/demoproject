import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


@Entity()
export class SensorEvent  {

  @ObjectIdColumn()
  public id?: ObjectID;

  @Column() ip: string;

  @Column() mac: string;

  @Column() channel?: string;

  @Column() device?: string;

  @Column() device_id?: string;

  @Column() datatype: string;

  @Column() sensor: string;

  @Column() channelAddress?: string;

  @Column() value: string;

  @Column() event_time: Date;

  @Column() createdBy?: string;

  @Column() updatedBy?: string;

  @Column() generatedBy?: string;

  @Column() campus: string;

  @Column() building: string;

  @Column() floor: string;

  @Column() device_type?: string;

  @Column() zone: any;

}
