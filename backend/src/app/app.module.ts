import { Module } from '@nestjs/common';

import { AppController } from 'app/app.controller';

import { AppService } from 'app/app.service';
import { BookingModule } from 'booking/module/booking.module';

@Module({
	imports: [BookingModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
