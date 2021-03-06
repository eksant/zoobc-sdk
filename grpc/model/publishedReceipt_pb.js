// source: model/publishedReceipt.proto
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

var model_receipt_pb = require('../model/receipt_pb.js');
goog.object.extend(proto, model_receipt_pb);
goog.exportSymbol('proto.model.GetPublishedReceiptsRequest', null, global);
goog.exportSymbol('proto.model.GetPublishedReceiptsResponse', null, global);
goog.exportSymbol('proto.model.PublishedReceipt', null, global);
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
proto.model.PublishedReceipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.PublishedReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.PublishedReceipt.displayName = 'proto.model.PublishedReceipt';
}
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
proto.model.GetPublishedReceiptsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.GetPublishedReceiptsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.GetPublishedReceiptsRequest.displayName = 'proto.model.GetPublishedReceiptsRequest';
}
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
proto.model.GetPublishedReceiptsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.model.GetPublishedReceiptsResponse.repeatedFields_, null);
};
goog.inherits(proto.model.GetPublishedReceiptsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.GetPublishedReceiptsResponse.displayName = 'proto.model.GetPublishedReceiptsResponse';
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
proto.model.PublishedReceipt.prototype.toObject = function(opt_includeInstance) {
  return proto.model.PublishedReceipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.PublishedReceipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.PublishedReceipt.toObject = function(includeInstance, msg) {
  var f, obj = {
    receipt: (f = msg.getReceipt()) && model_receipt_pb.Receipt.toObject(includeInstance, f),
    intermediatehashes: msg.getIntermediatehashes_asB64(),
    blockheight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    publishedindex: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rmrlinked: msg.getRmrlinked_asB64(),
    rmrlinkedindex: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.model.PublishedReceipt}
 */
proto.model.PublishedReceipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.PublishedReceipt;
  return proto.model.PublishedReceipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.PublishedReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.PublishedReceipt}
 */
proto.model.PublishedReceipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new model_receipt_pb.Receipt;
      reader.readMessage(value,model_receipt_pb.Receipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIntermediatehashes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockheight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPublishedindex(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRmrlinked(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRmrlinkedindex(value);
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
proto.model.PublishedReceipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.PublishedReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.PublishedReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.PublishedReceipt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      model_receipt_pb.Receipt.serializeBinaryToWriter
    );
  }
  f = message.getIntermediatehashes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getBlockheight();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPublishedindex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getRmrlinked_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getRmrlinkedindex();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional Receipt Receipt = 1;
 * @return {?proto.model.Receipt}
 */
proto.model.PublishedReceipt.prototype.getReceipt = function() {
  return /** @type{?proto.model.Receipt} */ (
    jspb.Message.getWrapperField(this, model_receipt_pb.Receipt, 1));
};


/** @param {?proto.model.Receipt|undefined} value */
proto.model.PublishedReceipt.prototype.setReceipt = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.model.PublishedReceipt.prototype.clearReceipt = function() {
  this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.PublishedReceipt.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes IntermediateHashes = 2;
 * @return {!(string|Uint8Array)}
 */
proto.model.PublishedReceipt.prototype.getIntermediatehashes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes IntermediateHashes = 2;
 * This is a type-conversion wrapper around `getIntermediatehashes()`
 * @return {string}
 */
proto.model.PublishedReceipt.prototype.getIntermediatehashes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIntermediatehashes()));
};


/**
 * optional bytes IntermediateHashes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIntermediatehashes()`
 * @return {!Uint8Array}
 */
proto.model.PublishedReceipt.prototype.getIntermediatehashes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIntermediatehashes()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.PublishedReceipt.prototype.setIntermediatehashes = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 BlockHeight = 3;
 * @return {number}
 */
proto.model.PublishedReceipt.prototype.getBlockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.model.PublishedReceipt.prototype.setBlockheight = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 PublishedIndex = 4;
 * @return {number}
 */
proto.model.PublishedReceipt.prototype.getPublishedindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.model.PublishedReceipt.prototype.setPublishedindex = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes RMRLinked = 5;
 * @return {!(string|Uint8Array)}
 */
proto.model.PublishedReceipt.prototype.getRmrlinked = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes RMRLinked = 5;
 * This is a type-conversion wrapper around `getRmrlinked()`
 * @return {string}
 */
proto.model.PublishedReceipt.prototype.getRmrlinked_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRmrlinked()));
};


/**
 * optional bytes RMRLinked = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRmrlinked()`
 * @return {!Uint8Array}
 */
proto.model.PublishedReceipt.prototype.getRmrlinked_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRmrlinked()));
};


/** @param {!(string|Uint8Array)} value */
proto.model.PublishedReceipt.prototype.setRmrlinked = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint32 RMRLinkedIndex = 6;
 * @return {number}
 */
proto.model.PublishedReceipt.prototype.getRmrlinkedindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.model.PublishedReceipt.prototype.setRmrlinkedindex = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};





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
proto.model.GetPublishedReceiptsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.model.GetPublishedReceiptsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.GetPublishedReceiptsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetPublishedReceiptsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromheight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toheight: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.model.GetPublishedReceiptsRequest}
 */
proto.model.GetPublishedReceiptsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.GetPublishedReceiptsRequest;
  return proto.model.GetPublishedReceiptsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.GetPublishedReceiptsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.GetPublishedReceiptsRequest}
 */
proto.model.GetPublishedReceiptsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFromheight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setToheight(value);
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
proto.model.GetPublishedReceiptsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.GetPublishedReceiptsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.GetPublishedReceiptsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetPublishedReceiptsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromheight();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToheight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 FromHeight = 1;
 * @return {number}
 */
proto.model.GetPublishedReceiptsRequest.prototype.getFromheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.model.GetPublishedReceiptsRequest.prototype.setFromheight = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 ToHeight = 2;
 * @return {number}
 */
proto.model.GetPublishedReceiptsRequest.prototype.getToheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.model.GetPublishedReceiptsRequest.prototype.setToheight = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.model.GetPublishedReceiptsResponse.repeatedFields_ = [1];



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
proto.model.GetPublishedReceiptsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.model.GetPublishedReceiptsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.GetPublishedReceiptsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetPublishedReceiptsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    publishedreceiptsList: jspb.Message.toObjectList(msg.getPublishedreceiptsList(),
    proto.model.PublishedReceipt.toObject, includeInstance)
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
 * @return {!proto.model.GetPublishedReceiptsResponse}
 */
proto.model.GetPublishedReceiptsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.GetPublishedReceiptsResponse;
  return proto.model.GetPublishedReceiptsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.GetPublishedReceiptsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.GetPublishedReceiptsResponse}
 */
proto.model.GetPublishedReceiptsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.model.PublishedReceipt;
      reader.readMessage(value,proto.model.PublishedReceipt.deserializeBinaryFromReader);
      msg.addPublishedreceipts(value);
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
proto.model.GetPublishedReceiptsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.GetPublishedReceiptsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.GetPublishedReceiptsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetPublishedReceiptsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishedreceiptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.model.PublishedReceipt.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PublishedReceipt PublishedReceipts = 1;
 * @return {!Array<!proto.model.PublishedReceipt>}
 */
proto.model.GetPublishedReceiptsResponse.prototype.getPublishedreceiptsList = function() {
  return /** @type{!Array<!proto.model.PublishedReceipt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.model.PublishedReceipt, 1));
};


/** @param {!Array<!proto.model.PublishedReceipt>} value */
proto.model.GetPublishedReceiptsResponse.prototype.setPublishedreceiptsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.model.PublishedReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.PublishedReceipt}
 */
proto.model.GetPublishedReceiptsResponse.prototype.addPublishedreceipts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.model.PublishedReceipt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.model.GetPublishedReceiptsResponse.prototype.clearPublishedreceiptsList = function() {
  this.setPublishedreceiptsList([]);
};


goog.object.extend(exports, proto.model);
