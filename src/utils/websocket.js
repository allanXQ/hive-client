import { io } from "socket.io-client";

const createWebSocket = (maxRetries = 3, retryInterval = 2000) => {
  let socket;
  let retries = 0;
  let shouldRetry = true;

  const connect = () => {
    socket = io("http://localhost:2000", {
      withCredentials: true,
    });
    socket.on("connect_error", (error) => {
      if (error.message === "xhr poll error") {
        socket.close();
      }
      if (retries < maxRetries) {
        retries++;
        setTimeout(connect, retryInterval);
      }
    });

    socket.on("connect", () => {
      retries = 0;
    });

    socket.connect();
  };

  const close = () => {
    shouldRetry = false;
    socket.close();
  };

  const on = (event, callback) => {
    socket.on(event, callback);
  };

  const emit = (event, data) => {
    socket.emit(event, data);
  };

  return {
    connect,
    close,
    on,
    emit,
  };
};

export default createWebSocket;
