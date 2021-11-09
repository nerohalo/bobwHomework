import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';

import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { BookingDto } from 'booking/dto/booking.dto';
import { BookingService } from 'booking/service/booking.service';

@Controller()
export class BookingController {
	constructor(private readonly bookingService: BookingService) {}

	@Post('booking')
	@UsePipes(ValidationPipe)
	@HttpCode(200)
	async saveBooking(@Body() bookingDto: BookingDto) {
		await this.bookingService.saveBooking(bookingDto);
	}
}
