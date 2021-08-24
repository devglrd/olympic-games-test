import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';
import { EventCategory } from './eventCategory.entity';
import { SportModule, SportService } from '../sport';

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventCategory])],
  exports: [EventService],
  providers: [EventService],
  controllers: [EventController],
})
export class EventModule {}