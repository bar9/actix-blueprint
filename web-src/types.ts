import {DtlsParameters, TransportOptions} from "mediasoup-client/lib/Transport";
import {MediaKind, RtpCapabilities, RtpParameters} from "mediasoup-client/lib/RtpParameters";

export type Brand<K, T> = K & { __brand: T };

export type ConsumerId = Brand<string, 'ConsumerId'>;
export type ProducerId = Brand<string, 'ProducerId'>;

export interface ServerInit {
    action: 'Init';
    consumerTransportOptions: TransportOptions;
    producerTransportOptions: TransportOptions;
    routerRtpCapabilities: RtpCapabilities;
}

export interface ServerConnectedProducerTransport {
    action: 'ConnectedProducerTransport';
}

export interface ServerProduced {
    action: 'Produced';
    id: ProducerId;
}

export interface ServerConnectedConsumerTransport {
    action: 'ConnectedConsumerTransport';
}

export interface ServerConsumed {
    action: 'Consumed';
    id: ConsumerId;
    kind: MediaKind;
    rtpParameters: RtpParameters;
}

export type ServerMessage =
    ServerInit |
    ServerConnectedProducerTransport |
    ServerProduced |
    ServerConnectedConsumerTransport |
    ServerConsumed;

export interface ClientInit {
    action: 'Init';
    rtpCapabilities: RtpCapabilities;
}

export interface ClientConnectProducerTransport {
    action: 'ConnectProducerTransport';
    dtlsParameters: DtlsParameters;
}

export interface ClientConnectConsumerTransport {
    action: 'ConnectConsumerTransport';
    dtlsParameters: DtlsParameters;
}

export interface ClientProduce {
    action: 'Produce';
    kind: MediaKind;
    rtpParameters: RtpParameters;
}

export interface ClientConsume {
    action: 'Consume';
    producerId: ProducerId;
}

export interface ClientConsumerResume {
    action: 'ConsumerResume';
    id: ConsumerId;
}

export type ClientMessage =
    ClientInit |
    ClientConnectProducerTransport |
    ClientProduce |
    ClientConnectConsumerTransport |
    ClientConsume |
    ClientConsumerResume;
