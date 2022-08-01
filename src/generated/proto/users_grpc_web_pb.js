/**
 * @fileoverview gRPC-Web generated client stub for users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.users = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.users.UsersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.users.UsersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.users.UserRequest,
 *   !proto.users.User>}
 */
const methodDescriptor_Users_GetUser = new grpc.web.MethodDescriptor(
  '/users.Users/GetUser',
  grpc.web.MethodType.UNARY,
  proto.users.UserRequest,
  proto.users.User,
  /**
   * @param {!proto.users.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.User.deserializeBinary
);


/**
 * @param {!proto.users.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.users.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UsersClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.Users/GetUser',
      request,
      metadata || {},
      methodDescriptor_Users_GetUser,
      callback);
};


/**
 * @param {!proto.users.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.User>}
 *     Promise that resolves to the response
 */
proto.users.UsersPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/users.Users/GetUser',
      request,
      metadata || {},
      methodDescriptor_Users_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.users.User>}
 */
const methodDescriptor_Users_GetUsers = new grpc.web.MethodDescriptor(
  '/users.Users/GetUsers',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.users.User,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.User.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.users.User>}
 *     The XHR Node Readable Stream
 */
proto.users.UsersClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/users.Users/GetUsers',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsers);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.users.User>}
 *     The XHR Node Readable Stream
 */
proto.users.UsersPromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/users.Users/GetUsers',
      request,
      metadata || {},
      methodDescriptor_Users_GetUsers);
};


module.exports = proto.users;

