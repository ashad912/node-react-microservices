import nats, { Message } from 'node-nats-streaming'
import { randomBytes } from 'crypto'

console.clear()

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
})

stan.on('connect', () => {
    console.log('Listener connected to NATS')

    stan.on('close', () => {
        console.log('NATS connection closed!')
        process.exit()
    })

    const options = stan
        .subscriptionOptions()
        .setManualAckMode(true)
        .setDeliverAllAvailable() //sending all (subject) events from history
        .setDurableName('accounting-service') // tracks which events from group/one listener, listener has procesed
    const subscription = stan.subscribe('ticket:created', "queue-group-name", options)

    subscription.on('message', (msg: Message) => {
        console.log('Message received')

        const data = msg.getData()

        if (typeof data === 'string') {
            console.log(`Received event #${msg.getSequence()}, with data ${data}`)
        }

        msg.ack()
    })
})

process.on('SIGINT', () => stan.close())
process.on('SIGTERM', () => stan.close())