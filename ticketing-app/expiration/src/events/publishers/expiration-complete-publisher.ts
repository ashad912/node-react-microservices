import { Publisher, ExpirationCompleteEvent, Subjects } from "@ashad912packages/common";


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}