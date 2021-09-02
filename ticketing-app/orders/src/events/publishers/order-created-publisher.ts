import { Publisher, OrderCreatedEvent, Subjects } from "@ashad912packages/common";


export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated
}