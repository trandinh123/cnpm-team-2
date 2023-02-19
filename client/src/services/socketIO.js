import { io } from "socket.io-client";
import { SERVER_URL } from "../config";

const URL = SERVER_URL || "http://localhost:5000";
const socket = io(URL, { transports: ["websocket", "polling", "flashsocket"] });

export default socket;
