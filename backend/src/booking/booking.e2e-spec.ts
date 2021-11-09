import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { BookingService } from 'booking/service/booking.service';
import { bookingDtoFixture } from 'fixtures';
import { BookingModule } from 'booking/module/booking.module';

describe('Booking e2e', () => {
	let app: INestApplication;
	const bookingService = { saveBooking: () => null };

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [BookingModule],
		})
			.overrideProvider(BookingService)
			.useValue(bookingService)
			.compile();

		app = moduleRef.createNestApplication();
		await app.init();
	});

	it('/Post booking successful flow', () => {
		return request(app.getHttpServer())
			.post('/booking')
			.send({
				...bookingDtoFixture()
			})
			.expect(200)
			.expect({});
	});

	it('/Post booking validation error', () => {
		return request(app.getHttpServer())
			.post('/booking')
			.send({
				roomId: '3'
			})
			.expect(400)
	});

	afterAll(async () => {
		await app.close();
	});
});
