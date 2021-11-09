import { Injectable } from '@nestjs/common';

import { BookingDto } from 'booking/dto/booking.dto';


@Injectable()
export class BookingService {
	constructor() {}

	async saveBooking(bookingDto: BookingDto): Promise<null> {
		console.log(bookingDto);

		// Add implementation here
		return null;
	}
}
