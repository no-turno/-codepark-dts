import { serialize, memoryUsage, startRemoteDebugger } from "bun:jsc"

import { Database, constants, } from "bun:sqlite"
import { createStorage } from "unstorage"

const db = new Database("dev.sqlite", {
  create: true
});


const getTCPConnection = function <T = Record<string, any>>(hostname: string, port: number, onError: (error: Error) => void) {
  return Promise.resolve(Bun.listen<T>({
    hostname: hostname,
    port: port,
    data: {} as T,
    socket: {
      data(socket, data) {
      }, // message received from client
      open(socket) { }, // socket opened
      close(socket) { }, // socket closed
      drain(socket) { }, // socket ready for more data
      error(socket, error) { }, // error handler
    },
  })).then(conn => {
    if (process.env.NODE_ENV === "development") console.debug(Bun.inspect(conn))
    return conn
  }).catch(onError)
};


