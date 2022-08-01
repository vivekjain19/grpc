/**
 * @fileoverview gRPC-Web generated client stub for users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_users_pb from '../proto/users_pb';


export class UsersClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetUser = new grpcWeb.MethodDescriptor(
    '/users.Users/GetUser',
    grpcWeb.MethodType.UNARY,
    proto_users_pb.UserRequest,
    proto_users_pb.User,
    (request: proto_users_pb.UserRequest) => {
      return request.serializeBinary();
    },
    proto_users_pb.User.deserializeBinary
  );

  getUser(
    request: proto_users_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_users_pb.User>;

  getUser(
    request: proto_users_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_users_pb.User) => void): grpcWeb.ClientReadableStream<proto_users_pb.User>;

  getUser(
    request: proto_users_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_users_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.Users/GetUser',
        request,
        metadata || {},
        this.methodDescriptorGetUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.Users/GetUser',
    request,
    metadata || {},
    this.methodDescriptorGetUser);
  }

  methodDescriptorGetUsers = new grpcWeb.MethodDescriptor(
    '/users.Users/GetUsers',
    grpcWeb.MethodType.SERVER_STREAMING,
    google_protobuf_empty_pb.Empty,
    proto_users_pb.User,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proto_users_pb.User.deserializeBinary
  );

  getUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_users_pb.User> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/users.Users/GetUsers',
      request,
      metadata || {},
      this.methodDescriptorGetUsers);
  }

}

