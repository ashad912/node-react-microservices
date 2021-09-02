import { Publisher, OrderCancelledEvent, Subjects } from "@ashad912packages/common";


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}