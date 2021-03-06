// source: model/host.proto
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

var model_node_pb = require('../model/node_pb.js');
goog.object.extend(proto, model_node_pb);
var model_peer_pb = require('../model/peer_pb.js');
goog.object.extend(proto, model_peer_pb);
var model_blockchain_pb = require('../model/blockchain_pb.js');
goog.object.extend(proto, model_blockchain_pb);
goog.exportSymbol('proto.model.GetHostPeersResponse', null, global);
goog.exportSymbol('proto.model.Host', null, global);
goog.exportSymbol('proto.model.HostInfo', null, global);
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
proto.model.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Host.displayName = 'proto.model.Host';
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
proto.model.HostInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.model.HostInfo.repeatedFields_, null);
};
goog.inherits(proto.model.HostInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.HostInfo.displayName = 'proto.model.HostInfo';
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
proto.model.GetHostPeersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.GetHostPeersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.GetHostPeersResponse.displayName = 'proto.model.GetHostPeersResponse';
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
proto.model.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && model_node_pb.Node.toObject(includeInstance, f),
    resolvedpeersMap: (f = msg.getResolvedpeersMap()) ? f.toObject(includeInstance, proto.model.Peer.toObject) : [],
    unresolvedpeersMap: (f = msg.getUnresolvedpeersMap()) ? f.toObject(includeInstance, proto.model.Peer.toObject) : [],
    knownpeersMap: (f = msg.getKnownpeersMap()) ? f.toObject(includeInstance, proto.model.Peer.toObject) : [],
    blacklistedpeersMap: (f = msg.getBlacklistedpeersMap()) ? f.toObject(includeInstance, proto.model.Peer.toObject) : [],
    stopped: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.model.Host}
 */
proto.model.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Host;
  return proto.model.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Host}
 */
proto.model.Host.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new model_node_pb.Node;
      reader.readMessage(value,model_node_pb.Node.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = msg.getResolvedpeersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.model.Peer.deserializeBinaryFromReader, "");
         });
      break;
    case 3:
      var value = msg.getUnresolvedpeersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.model.Peer.deserializeBinaryFromReader, "");
         });
      break;
    case 4:
      var value = msg.getKnownpeersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.model.Peer.deserializeBinaryFromReader, "");
         });
      break;
    case 5:
      var value = msg.getBlacklistedpeersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.model.Peer.deserializeBinaryFromReader, "");
         });
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStopped(value);
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
proto.model.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Host.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      model_node_pb.Node.serializeBinaryToWriter
    );
  }
  f = message.getResolvedpeersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.model.Peer.serializeBinaryToWriter);
  }
  f = message.getUnresolvedpeersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.model.Peer.serializeBinaryToWriter);
  }
  f = message.getKnownpeersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.model.Peer.serializeBinaryToWriter);
  }
  f = message.getBlacklistedpeersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.model.Peer.serializeBinaryToWriter);
  }
  f = message.getStopped();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional Node Info = 1;
 * @return {?proto.model.Node}
 */
proto.model.Host.prototype.getInfo = function() {
  return /** @type{?proto.model.Node} */ (
    jspb.Message.getWrapperField(this, model_node_pb.Node, 1));
};


/** @param {?proto.model.Node|undefined} value */
proto.model.Host.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.model.Host.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Host.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, Peer> ResolvedPeers = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.model.Peer>}
 */
proto.model.Host.prototype.getResolvedpeersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.model.Peer>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.model.Peer));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.model.Host.prototype.clearResolvedpeersMap = function() {
  this.getResolvedpeersMap().clear();
};


/**
 * map<string, Peer> UnresolvedPeers = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.model.Peer>}
 */
proto.model.Host.prototype.getUnresolvedpeersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.model.Peer>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.model.Peer));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.model.Host.prototype.clearUnresolvedpeersMap = function() {
  this.getUnresolvedpeersMap().clear();
};


/**
 * map<string, Peer> KnownPeers = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.model.Peer>}
 */
proto.model.Host.prototype.getKnownpeersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.model.Peer>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.model.Peer));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.model.Host.prototype.clearKnownpeersMap = function() {
  this.getKnownpeersMap().clear();
};


/**
 * map<string, Peer> BlacklistedPeers = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.model.Peer>}
 */
proto.model.Host.prototype.getBlacklistedpeersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.model.Peer>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.model.Peer));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.model.Host.prototype.clearBlacklistedpeersMap = function() {
  this.getBlacklistedpeersMap().clear();
};


/**
 * optional bool Stopped = 6;
 * @return {boolean}
 */
proto.model.Host.prototype.getStopped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.model.Host.prototype.setStopped = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.model.HostInfo.repeatedFields_ = [2,3];



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
proto.model.HostInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.model.HostInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.HostInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.HostInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = msg.getHost()) && proto.model.Host.toObject(includeInstance, f),
    chainstatusesList: jspb.Message.toObjectList(msg.getChainstatusesList(),
    model_blockchain_pb.ChainStatus.toObject, includeInstance),
    scramblednodesList: jspb.Message.toObjectList(msg.getScramblednodesList(),
    model_peer_pb.Peer.toObject, includeInstance),
    scramblednodesheight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    prioritypeersMap: (f = msg.getPrioritypeersMap()) ? f.toObject(includeInstance, proto.model.Peer.toObject) : []
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
 * @return {!proto.model.HostInfo}
 */
proto.model.HostInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.HostInfo;
  return proto.model.HostInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.HostInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.HostInfo}
 */
proto.model.HostInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.model.Host;
      reader.readMessage(value,proto.model.Host.deserializeBinaryFromReader);
      msg.setHost(value);
      break;
    case 2:
      var value = new model_blockchain_pb.ChainStatus;
      reader.readMessage(value,model_blockchain_pb.ChainStatus.deserializeBinaryFromReader);
      msg.addChainstatuses(value);
      break;
    case 3:
      var value = new model_peer_pb.Peer;
      reader.readMessage(value,model_peer_pb.Peer.deserializeBinaryFromReader);
      msg.addScramblednodes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScramblednodesheight(value);
      break;
    case 5:
      var value = msg.getPrioritypeersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.model.Peer.deserializeBinaryFromReader, "");
         });
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
proto.model.HostInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.HostInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.HostInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.HostInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.model.Host.serializeBinaryToWriter
    );
  }
  f = message.getChainstatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      model_blockchain_pb.ChainStatus.serializeBinaryToWriter
    );
  }
  f = message.getScramblednodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      model_peer_pb.Peer.serializeBinaryToWriter
    );
  }
  f = message.getScramblednodesheight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPrioritypeersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.model.Peer.serializeBinaryToWriter);
  }
};


/**
 * optional Host Host = 1;
 * @return {?proto.model.Host}
 */
proto.model.HostInfo.prototype.getHost = function() {
  return /** @type{?proto.model.Host} */ (
    jspb.Message.getWrapperField(this, proto.model.Host, 1));
};


/** @param {?proto.model.Host|undefined} value */
proto.model.HostInfo.prototype.setHost = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.model.HostInfo.prototype.clearHost = function() {
  this.setHost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.HostInfo.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ChainStatus ChainStatuses = 2;
 * @return {!Array<!proto.model.ChainStatus>}
 */
proto.model.HostInfo.prototype.getChainstatusesList = function() {
  return /** @type{!Array<!proto.model.ChainStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, model_blockchain_pb.ChainStatus, 2));
};


/** @param {!Array<!proto.model.ChainStatus>} value */
proto.model.HostInfo.prototype.setChainstatusesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.model.ChainStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.ChainStatus}
 */
proto.model.HostInfo.prototype.addChainstatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.model.ChainStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.model.HostInfo.prototype.clearChainstatusesList = function() {
  this.setChainstatusesList([]);
};


/**
 * repeated Peer ScrambledNodes = 3;
 * @return {!Array<!proto.model.Peer>}
 */
proto.model.HostInfo.prototype.getScramblednodesList = function() {
  return /** @type{!Array<!proto.model.Peer>} */ (
    jspb.Message.getRepeatedWrapperField(this, model_peer_pb.Peer, 3));
};


/** @param {!Array<!proto.model.Peer>} value */
proto.model.HostInfo.prototype.setScramblednodesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.model.Peer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.Peer}
 */
proto.model.HostInfo.prototype.addScramblednodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.model.Peer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.model.HostInfo.prototype.clearScramblednodesList = function() {
  this.setScramblednodesList([]);
};


/**
 * optional uint32 ScrambledNodesHeight = 4;
 * @return {number}
 */
proto.model.HostInfo.prototype.getScramblednodesheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.model.HostInfo.prototype.setScramblednodesheight = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * map<string, Peer> PriorityPeers = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.model.Peer>}
 */
proto.model.HostInfo.prototype.getPrioritypeersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.model.Peer>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.model.Peer));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.model.HostInfo.prototype.clearPrioritypeersMap = function() {
  this.getPrioritypeersMap().clear();
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
proto.model.GetHostPeersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.model.GetHostPeersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.GetHostPeersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetHostPeersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resolvedpeersMap: (f = msg.getResolvedpeersMap()) ? f.toObject(includeInstance, proto.model.Peer.toObject) : [],
    unresolvedpeersMap: (f = msg.getUnresolvedpeersMap()) ? f.toObject(includeInstance, proto.model.Peer.toObject) : []
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
 * @return {!proto.model.GetHostPeersResponse}
 */
proto.model.GetHostPeersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.GetHostPeersResponse;
  return proto.model.GetHostPeersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.GetHostPeersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.GetHostPeersResponse}
 */
proto.model.GetHostPeersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getResolvedpeersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.model.Peer.deserializeBinaryFromReader, "");
         });
      break;
    case 2:
      var value = msg.getUnresolvedpeersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.model.Peer.deserializeBinaryFromReader, "");
         });
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
proto.model.GetHostPeersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.GetHostPeersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.GetHostPeersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetHostPeersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResolvedpeersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.model.Peer.serializeBinaryToWriter);
  }
  f = message.getUnresolvedpeersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.model.Peer.serializeBinaryToWriter);
  }
};


/**
 * map<string, Peer> ResolvedPeers = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.model.Peer>}
 */
proto.model.GetHostPeersResponse.prototype.getResolvedpeersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.model.Peer>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.model.Peer));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.model.GetHostPeersResponse.prototype.clearResolvedpeersMap = function() {
  this.getResolvedpeersMap().clear();
};


/**
 * map<string, Peer> UnresolvedPeers = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.model.Peer>}
 */
proto.model.GetHostPeersResponse.prototype.getUnresolvedpeersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.model.Peer>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.model.Peer));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.model.GetHostPeersResponse.prototype.clearUnresolvedpeersMap = function() {
  this.getUnresolvedpeersMap().clear();
};


goog.object.extend(exports, proto.model);
