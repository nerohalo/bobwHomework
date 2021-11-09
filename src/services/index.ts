import api from 'helpers/apiInstance';

type BookingService = {
  bookRoom: (date: Date, roomId: number, ccNumber: string) => Promise<void>;
}

const bookingService: BookingService = {
  bookRoom: (date, roomId, ccNumber) => api.post<void>('/booking', { date, roomId, ccNumber }),
};

type ServiceProvider = {
  bookingService: BookingService;
}

const serviceProvider: ServiceProvider = {
  bookingService,
};

export default serviceProvider;
