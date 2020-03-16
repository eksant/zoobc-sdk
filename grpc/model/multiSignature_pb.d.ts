// package: model
// file: model/multiSignature.proto

import * as jspb from "google-protobuf";
import * as model_pagination_pb from "../model/pagination_pb";

export class MultiSignatureInfo extends jspb.Message {
  getMinimumsignatures(): number;
  setMinimumsignatures(value: number): void;

  getNonce(): string;
  setNonce(value: string): void;

  clearAddressesList(): void;
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

  getMultisigaddress(): string;
  setMultisigaddress(value: string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSignatureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSignatureInfo): MultiSignatureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiSignatureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSignatureInfo;
  static deserializeBinaryFromReader(message: MultiSignatureInfo, reader: jspb.BinaryReader): MultiSignatureInfo;
}

export namespace MultiSignatureInfo {
  export type AsObject = {
    minimumsignatures: number,
    nonce: string,
    addressesList: Array<string>,
    multisigaddress: string,
    blockheight: number,
    latest: boolean,
  }
}

export class SignatureInfo extends jspb.Message {
  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getSignaturesMap(): jspb.Map<string, Uint8Array | string>;
  clearSignaturesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureInfo): SignatureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureInfo;
  static deserializeBinaryFromReader(message: SignatureInfo, reader: jspb.BinaryReader): SignatureInfo;
}

export namespace SignatureInfo {
  export type AsObject = {
    transactionhash: Uint8Array | string,
    signaturesMap: Array<[string, Uint8Array | string]>,
  }
}

export class PendingSignature extends jspb.Message {
  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getAccountaddress(): string;
  setAccountaddress(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingSignature.AsObject;
  static toObject(includeInstance: boolean, msg: PendingSignature): PendingSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingSignature;
  static deserializeBinaryFromReader(message: PendingSignature, reader: jspb.BinaryReader): PendingSignature;
}

export namespace PendingSignature {
  export type AsObject = {
    transactionhash: Uint8Array | string,
    accountaddress: string,
    signature: Uint8Array | string,
    blockheight: number,
    latest: boolean,
  }
}

export class PendingTransaction extends jspb.Message {
  getSenderaddress(): string;
  setSenderaddress(value: string): void;

  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getTransactionbytes(): Uint8Array | string;
  getTransactionbytes_asU8(): Uint8Array;
  getTransactionbytes_asB64(): string;
  setTransactionbytes(value: Uint8Array | string): void;

  getStatus(): PendingTransactionStatusMap[keyof PendingTransactionStatusMap];
  setStatus(value: PendingTransactionStatusMap[keyof PendingTransactionStatusMap]): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: PendingTransaction): PendingTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingTransaction;
  static deserializeBinaryFromReader(message: PendingTransaction, reader: jspb.BinaryReader): PendingTransaction;
}

export namespace PendingTransaction {
  export type AsObject = {
    senderaddress: string,
    transactionhash: Uint8Array | string,
    transactionbytes: Uint8Array | string,
    status: PendingTransactionStatusMap[keyof PendingTransactionStatusMap],
    blockheight: number,
    latest: boolean,
  }
}

export class GetPendingTransactionByAddressRequest extends jspb.Message {
  getSenderaddress(): string;
  setSenderaddress(value: string): void;

  getStatus(): PendingTransactionStatusMap[keyof PendingTransactionStatusMap];
  setStatus(value: PendingTransactionStatusMap[keyof PendingTransactionStatusMap]): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionByAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionByAddressRequest): GetPendingTransactionByAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionByAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionByAddressRequest;
  static deserializeBinaryFromReader(message: GetPendingTransactionByAddressRequest, reader: jspb.BinaryReader): GetPendingTransactionByAddressRequest;
}

export namespace GetPendingTransactionByAddressRequest {
  export type AsObject = {
    senderaddress: string,
    status: PendingTransactionStatusMap[keyof PendingTransactionStatusMap],
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetPendingTransactionByAddressResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  clearPendingtransactionsList(): void;
  getPendingtransactionsList(): Array<PendingTransaction>;
  setPendingtransactionsList(value: Array<PendingTransaction>): void;
  addPendingtransactions(value?: PendingTransaction, index?: number): PendingTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionByAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionByAddressResponse): GetPendingTransactionByAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionByAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionByAddressResponse;
  static deserializeBinaryFromReader(message: GetPendingTransactionByAddressResponse, reader: jspb.BinaryReader): GetPendingTransactionByAddressResponse;
}

export namespace GetPendingTransactionByAddressResponse {
  export type AsObject = {
    count: number,
    page: number,
    pendingtransactionsList: Array<PendingTransaction.AsObject>,
  }
}

export class GetPendingTransactionDetailByTransactionHashRequest extends jspb.Message {
  getTransactionhashhex(): string;
  setTransactionhashhex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionDetailByTransactionHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionDetailByTransactionHashRequest): GetPendingTransactionDetailByTransactionHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionDetailByTransactionHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionDetailByTransactionHashRequest;
  static deserializeBinaryFromReader(message: GetPendingTransactionDetailByTransactionHashRequest, reader: jspb.BinaryReader): GetPendingTransactionDetailByTransactionHashRequest;
}

export namespace GetPendingTransactionDetailByTransactionHashRequest {
  export type AsObject = {
    transactionhashhex: string,
  }
}

export class GetPendingTransactionDetailByTransactionHashResponse extends jspb.Message {
  hasPendingtransaction(): boolean;
  clearPendingtransaction(): void;
  getPendingtransaction(): PendingTransaction | undefined;
  setPendingtransaction(value?: PendingTransaction): void;

  clearPendingsignaturesList(): void;
  getPendingsignaturesList(): Array<PendingSignature>;
  setPendingsignaturesList(value: Array<PendingSignature>): void;
  addPendingsignatures(value?: PendingSignature, index?: number): PendingSignature;

  hasMultisignatureinfo(): boolean;
  clearMultisignatureinfo(): void;
  getMultisignatureinfo(): MultiSignatureInfo | undefined;
  setMultisignatureinfo(value?: MultiSignatureInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionDetailByTransactionHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionDetailByTransactionHashResponse): GetPendingTransactionDetailByTransactionHashResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionDetailByTransactionHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionDetailByTransactionHashResponse;
  static deserializeBinaryFromReader(message: GetPendingTransactionDetailByTransactionHashResponse, reader: jspb.BinaryReader): GetPendingTransactionDetailByTransactionHashResponse;
}

export namespace GetPendingTransactionDetailByTransactionHashResponse {
  export type AsObject = {
    pendingtransaction?: PendingTransaction.AsObject,
    pendingsignaturesList: Array<PendingSignature.AsObject>,
    multisignatureinfo?: MultiSignatureInfo.AsObject,
  }
}

export interface PendingTransactionStatusMap {
  PENDINGTRANSACTIONPENDING: 0;
  PENDINGTRANSACTIONEXECUTED: 1;
  PENDINGTRANSACTIONNOOP: 2;
  PENDINGTRANSACTIONEXPIRED: 3;
}

export const PendingTransactionStatus: PendingTransactionStatusMap;

