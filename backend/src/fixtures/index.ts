import { Fixture } from 'types';
import { BookingDto } from 'booking/dto/booking.dto';

export const bookingDtoFixture: Fixture<BookingDto> = (state) => new BookingDto({
	date: '2021-11-03T22:00:00.000Z',
	roomId: 1,
	ccNumber: '4111111145551142',
	...state,
});
