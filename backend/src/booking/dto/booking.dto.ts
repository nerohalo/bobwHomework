import { IsNumber, IsString } from 'class-validator';

export class BookingDto {
	constructor(bookingDto: Partial<BookingDto>) {
		Object.assign(this, bookingDto);
	}

	@IsString()
	date!: string;

	@IsNumber()
	roomId!: number;

	@IsString()
	ccNumber!: string;
}
