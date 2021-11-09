import { Module } from '@nestjs/common';

import { BookingController } from 'booking/controller/booking.controller';
import { BookingService } from 'booking/service/booking.service';

@Module({
	imports: [],
	controllers: [
		BookingController,
	],
	providers: [
		BookingService,
	],
})
export class BookingModule {}
