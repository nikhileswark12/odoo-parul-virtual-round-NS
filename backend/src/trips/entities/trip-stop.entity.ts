import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Trip } from './trip.entity';

@Entity('trip_stops')
export class TripStop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cityName: string;

  @Column({ nullable: true })
  cityId?: string;

  @Column({ nullable: true })
  region?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ type: 'date' })
  arrivalDate: string;

  @Column({ type: 'date' })
  departureDate: string;

  @Column({ default: 0 })
  orderIndex: number;

  @Column('simple-json', { nullable: true })
  activities?: { id: string; name: string; cost: number; duration: number; category: string }[];

  @ManyToOne(() => Trip, (trip) => trip.stops, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tripId' })
  trip: Trip;

  @Column()
  tripId: string;

  @CreateDateColumn()
  createdAt: Date;
}
