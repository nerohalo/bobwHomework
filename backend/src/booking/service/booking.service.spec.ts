import { Test } from '@nestjs/testing';
import { BookingService } from 'booking/service/booking.service';

describe('bookingService', () => {
	let bookingService: BookingService;

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			providers: [
				BookingService,
			],
		}).compile();

		bookingService = await module.get<BookingService>(BookingService);
	})

	it('bookingService - should be defined', () => {
		expect(bookingService).toBeDefined();
	});
});
