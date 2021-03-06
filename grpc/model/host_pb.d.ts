// package: model
// file: model/host.proto

import * as jspb from "google-protobuf";
import * as model_node_pb from "../model/node_pb";
import * as model_peer_pb from "../model/peer_pb";
import * as model_blockchain_pb from "../model/blockchain_pb";

export class Host extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): model_node_pb.Node | undefined;
  setInfo(value?: model_node_pb.Node): void;

  getResolvedpeersMap(): jspb.Map<string, model_peer_pb.Peer>;
  clearResolvedpeersMap(): void;
  getUnresolvedpeersMap(): jspb.Map<string, model_peer_pb.Peer>;
  clearUnresolvedpeersMap(): void;
  getKnownpeersMap(): jspb.Map<string, model_peer_pb.Peer>;
  clearKnownpeersMap(): void;
  getBlacklistedpeersMap(): jspb.Map<string, model_peer_pb.Peer>;
  clearBlacklistedpeersMap(): void;
  getStopped(): boolean;
  setStopped(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Host.AsObject;
  static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Host;
  static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
  export type AsObject = {
    info?: model_node_pb.Node.AsObject,
    resolvedpeersMap: Array<[string, model_peer_pb.Peer.AsObject]>,
    unresolvedpeersMap: Array<[string, model_peer_pb.Peer.AsObject]>,
    knownpeersMap: Array<[string, model_peer_pb.Peer.AsObject]>,
    blacklistedpeersMap: Array<[string, model_peer_pb.Peer.AsObject]>,
    stopped: boolean,
  }
}

export class HostInfo extends jspb.Message {
  hasHost(): boolean;
  clearHost(): void;
  getHost(): Host | undefined;
  setHost(value?: Host): void;

  clearChainstatusesList(): void;
  getChainstatusesList(): Array<model_blockchain_pb.ChainStatus>;
  setChainstatusesList(value: Array<model_blockchain_pb.ChainStatus>): void;
  addChainstatuses(value?: model_blockchain_pb.ChainStatus, index?: number): model_blockchain_pb.ChainStatus;

  clearScramblednodesList(): void;
  getScramblednodesList(): Array<model_peer_pb.Peer>;
  setScramblednodesList(value: Array<model_peer_pb.Peer>): void;
  addScramblednodes(value?: model_peer_pb.Peer, index?: number): model_peer_pb.Peer;

  getScramblednodesheight(): number;
  setScramblednodesheight(value: number): void;

  getPrioritypeersMap(): jspb.Map<string, model_peer_pb.Peer>;
  clearPrioritypeersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HostInfo): HostInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HostInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostInfo;
  static deserializeBinaryFromReader(message: HostInfo, reader: jspb.BinaryReader): HostInfo;
}

export namespace HostInfo {
  export type AsObject = {
    host?: Host.AsObject,
    chainstatusesList: Array<model_blockchain_pb.ChainStatus.AsObject>,
    scramblednodesList: Array<model_peer_pb.Peer.AsObject>,
    scramblednodesheight: number,
    prioritypeersMap: Array<[string, model_peer_pb.Peer.AsObject]>,
  }
}

export class GetHostPeersResponse extends jspb.Message {
  getResolvedpeersMap(): jspb.Map<string, model_peer_pb.Peer>;
  clearResolvedpeersMap(): void;
  getUnresolvedpeersMap(): jspb.Map<string, model_peer_pb.Peer>;
  clearUnresolvedpeersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHostPeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHostPeersResponse): GetHostPeersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHostPeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHostPeersResponse;
  static deserializeBinaryFromReader(message: GetHostPeersResponse, reader: jspb.BinaryReader): GetHostPeersResponse;
}

export namespace GetHostPeersResponse {
  export type AsObject = {
    resolvedpeersMap: Array<[string, model_peer_pb.Peer.AsObject]>,
    unresolvedpeersMap: Array<[string, model_peer_pb.Peer.AsObject]>,
  }
}

