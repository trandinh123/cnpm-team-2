import { useEffect, useRef, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Peer from "peerjs";
import CallScreen from "../../components/CallScreen/CallScreen";
import { useSearchParams } from "react-router-dom";

function PrivateCall({ socket }) {
  const [friendName, setFriendName] = useState("");
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const { user } = useContext(UserContext);
  const [params] = useSearchParams();
  const img = params.get("img");
  useEffect(() => {
    const peer = new Peer(user._id);

    peer.on("call", (call) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream);
        call.on("stream", function (remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });

    socket.on("get a call", ({ fid, name }) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      setFriendName(name);
      getUserMedia({ audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        const call = peer.call(fid, mediaStream);
        call.on("stream", (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });
  }, [socket, user?._id]);

  return (
    <>
      <CallScreen img={img} />
      <div style={{ display: "none" }}>
        <video ref={currentUserVideoRef} muted={true} />
        <video ref={remoteVideoRef} />
      </div>
    </>
  );
}

export default PrivateCall;
