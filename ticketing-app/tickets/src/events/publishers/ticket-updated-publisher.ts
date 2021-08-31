import { Publisher, Subjects, TicketUpdatedEvent } from "@ashad912packages/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}

