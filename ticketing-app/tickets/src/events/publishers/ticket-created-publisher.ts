import { Publisher, Subjects, TicketCreatedEvent } from "@ashad912packages/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated
}

