import mongoose from 'mongoose'
import { Message } from 'node-nats-streaming'
import { TicketUpdatedEvent } from '@ashad912packages/common'
import { TicketUpdatedListener } from "../ticket-updated-listener"
import { natsWrapper } from '../../../nats-wrapper'
import { Ticket } from '../../../models/ticket'

it('finds, updates, and saves a ticket', async () => {
    const { listener, data, msg, ticket } = await setup()

    await listener.onMessage(data, msg)

    const updatedTicket = await Ticket.findById(ticket.id)

    expect(updatedTicket).toBeDefined()
    expect(updatedTicket!.title).toEqual(data.title)
    expect(updatedTicket!.price).toEqual(data.price)
    expect(updatedTicket!.version).toEqual(data.version)
})

it('acks the message', async () => {

    const { listener, data, msg } = await setup()

    // call the onMessage function with the data object + message object
    await listener.onMessage(data, msg)

    // write assertions to make sure a ack func was called
    expect(msg.ack).toHaveBeenCalled()
})

it('does not call ack if the event has a skipped version number', async () => {
    const { listener, data, msg, ticket } = await setup()

    data.version = 10

    await expect(listener.onMessage(data, msg)).rejects.toThrow()
    expect(msg.ack).not.toHaveBeenCalled()
})

async function setup() {
    // create an instance of the listener
    const listener = new TicketUpdatedListener(natsWrapper.client)
    // create a ticket
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 10,
    })
    await ticket.save()

    // create a fake data object
    const data: TicketUpdatedEvent['data'] = {
        version: ticket.version + 1,
        id: ticket.id,
        title: 'new concert',
        price: 999,
        userId: 'dsadsad'
    }
    // create a fake message object
    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    }

    // return all this stuff
    return { listener, data, msg, ticket }
}