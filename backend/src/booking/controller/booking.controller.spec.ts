import { Test } from '@nestjs/testing';
import { bookingDtoFixture } from 'fixtures';
import { BookingController } from 'booking/controller/booking.controller';
import { BookingService } from 'booking/service/booking.service';

describe('BookingController', () => {
	let bookingController: BookingController;
	let bookingService: BookingService;

	beforeEach(async () => {
		const bookingServiceProvider = {
			provide: BookingService,
			useFactory: () => ({
				saveBooking: jest.fn(() => null),
			}),
		};
		const moduleRef = await Test.createTestingModule({
    	controllers: [BookingController],
    	providers: [BookingService, bookingServiceProvider],
		}).compile();

		bookingService = moduleRef.get<BookingService>(BookingService);
		bookingController = moduleRef.get<BookingController>(BookingController);
	});

	describe('bookingController', () => {
		it('saveBooking', async () => {
			const bookingDto = bookingDtoFixture();

			await bookingController.saveBooking(bookingDto)

			expect(bookingService.saveBooking).toHaveBeenCalled();
		});
	})
})
