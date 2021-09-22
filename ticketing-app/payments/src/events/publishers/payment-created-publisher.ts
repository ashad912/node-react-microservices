import { Subjects, Publisher, PaymentCreatedEvent } from '@ashad912packages/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
