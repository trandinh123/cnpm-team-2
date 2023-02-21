import React from "react";
import Container from "react-bootstrap/Container";

function treatAsUTC(date) {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

function daysBetween(startDate = new Date(), endDate = new Date()) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

const formatMessageDate = (date = new Date()) => {
  date = new Date(date);
  if (daysBetween(date) > 1) {
    return date.toLocaleString();
  }
  return date.toLocaleTimeString();
};
export default function Message({ listMessage, isSenderMessage = false }) {
  return (
    <Container
      class="d-flex "
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: isSenderMessage ? "end" : "start",
      }}
    >
      {!isSenderMessage && (
        <img
          src={listMessage[0]?.sender?.picture}
          class="rounded-circle"
          style={{ width: "45px", height: "45px" }}
          alt=""
        ></img>
      )}
      <Container
        style={{ margin: "0" }}
        className={`d-flex flex-column ${
          isSenderMessage ? "align-items-end" : ""
        }`}
      >
        {listMessage.map((message) => (
          <p
            class="small p-2 ms-3 mb-1 rounded-3"
            style={{
              backgroundColor: isSenderMessage ? "#0d6efd" : "white",
              color: isSenderMessage ? "white" : "black",
              width: "fit-content",
              maxWidth: "60%",
              overflowWrap: "break-word",
            }}
          >
            {message.content}
          </p>
        ))}
        <p className="small ms-3 mb-3 rounded-3 text-muted">
          {formatMessageDate(listMessage.at(-1)?.createdAt)}
        </p>
      </Container>
      {isSenderMessage && (
        <img
          src={listMessage[0]?.sender?.picture}
          class="rounded-circle"
          style={{ width: "45px", height: "45px" }}
          alt=""
        ></img>
      )}
    </Container>
  );
}
