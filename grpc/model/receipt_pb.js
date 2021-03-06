// source: model/receipt.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.model.Receipt', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.Receipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.Receipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Receipt.displayName = 'proto.model.Receipt';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.Receipt.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Receipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Receipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Receipt.toObject = function(includeInstance, msg) {
  var f, obj = {
    senderpublickey: msg.getSenderpublickey_asB64(),
    recipientpublickey: msg.getRecipientpublickey_asB64(),
    datumtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    datumhash: msg.getDatumhash_asB64(),
    referenceblockheight: jspb.Message.getFieldWithDefault(msg, 5, 0),
    referenceblockhash: msg.getReferenceblockhash_asB64(),
    rmr: msg.getRmr_asB64(),
    recipientsignature: msg.getRecipientsignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.Receipt}
 */
proto.model.Receipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Receipt;
  return proto.model.Receipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Receipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Receipt}
 */
proto.model.Receipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSenderpublickey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRecipientpublickey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDatumtype(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDatumhash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReferenceblockheight(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReferenceblockhash(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRmr(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRecipientsignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.Receipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Receipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Receipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Receipt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSenderpublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRecipientpublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDatumtype();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDatumhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getReferenceblockheight();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getReferenceblockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getRmr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getRecipientsignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional bytes SenderPublicKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.model.Receipt.prototype.getSenderpublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes SenderPublicKey = 1;
 * This is a type-conversion wrapper around `getSenderpublickey()`
 * @return {string}
 */
proto.model.Receipt.prototype.getSenderpublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSenderpublickey()));
};


/**
 * optional bytes SenderPublicKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderpublickey()`
 * @return {!Uint8Array}
 */
proto.model.Receipt.prototype.getSenderpublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderpublickey()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.Receipt.prototype.setSenderpublickey = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes RecipientPublicKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.model.Receipt.prototype.getRecipientpublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes RecipientPublicKey = 2;
 * This is a type-conversion wrapper around `getRecipientpublickey()`
 * @return {string}
 */
proto.model.Receipt.prototype.getRecipientpublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRecipientpublickey()));
};


/**
 * optional bytes RecipientPublicKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRecipientpublickey()`
 * @return {!Uint8Array}
 */
proto.model.Receipt.prototype.getRecipientpublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRecipientpublickey()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.Receipt.prototype.setRecipientpublickey = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 DatumType = 3;
 * @return {number}
 */
proto.model.Receipt.prototype.getDatumtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.model.Receipt.prototype.setDatumtype = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes DatumHash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.model.Receipt.prototype.getDatumhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes DatumHash = 4;
 * This is a type-conversion wrapper around `getDatumhash()`
 * @return {string}
 */
proto.model.Receipt.prototype.getDatumhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDatumhash()));
};


/**
 * optional bytes DatumHash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDatumhash()`
 * @return {!Uint8Array}
 */
proto.model.Receipt.prototype.getDatumhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDatumhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.Receipt.prototype.setDatumhash = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional uint32 ReferenceBlockHeight = 5;
 * @return {number}
 */
proto.model.Receipt.prototype.getReferenceblockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.model.Receipt.prototype.setReferenceblockheight = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes ReferenceBlockHash = 6;
 * @return {!(string|Uint8Array)}
 */
proto.model.Receipt.prototype.getReferenceblockhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes ReferenceBlockHash = 6;
 * This is a type-conversion wrapper around `getReferenceblockhash()`
 * @return {string}
 */
proto.model.Receipt.prototype.getReferenceblockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReferenceblockhash()));
};


/**
 * optional bytes ReferenceBlockHash = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReferenceblockhash()`
 * @return {!Uint8Array}
 */
proto.model.Receipt.prototype.getReferenceblockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReferenceblockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.Receipt.prototype.setReferenceblockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes RMR = 7;
 * @return {!(string|Uint8Array)}
 */
proto.model.Receipt.prototype.getRmr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes RMR = 7;
 * This is a type-conversion wrapper around `getRmr()`
 * @return {string}
 */
proto.model.Receipt.prototype.getRmr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRmr()));
};


/**
 * optional bytes RMR = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRmr()`
 * @return {!Uint8Array}
 */
proto.model.Receipt.prototype.getRmr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRmr()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.Receipt.prototype.setRmr = function(value) {
  jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes RecipientSignature = 8;
 * @return {!(string|Uint8Array)}
 */
proto.model.Receipt.prototype.getRecipientsignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes RecipientSignature = 8;
 * This is a type-conversion wrapper around `getRecipientsignature()`
 * @return {string}
 */
proto.model.Receipt.prototype.getRecipientsignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRecipientsignature()));
};


/**
 * optional bytes RecipientSignature = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRecipientsignature()`
 * @return {!Uint8Array}
 */
proto.model.Receipt.prototype.getRecipientsignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRecipientsignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.Receipt.prototype.setRecipientsignature = function(value) {
  jspb.Message.setProto3BytesField(this, 8, value);
};


goog.object.extend(exports, proto.model);
