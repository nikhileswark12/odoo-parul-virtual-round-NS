import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Trip } from './trip.entity';

@Entity('packing_items')
export class PackingItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 'general' })
  category: string; // clothing | documents | electronics | toiletries | general

  @Column({ default: false })
  isPacked: boolean;

  @ManyToOne(() => Trip, (trip) => trip.packingItems, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tripId' })
  trip: Trip;

  @Column()
  tripId: string;

  @CreateDateColumn()
  createdAt: Date;
}
