
// 根据实际地址和端口进行修改，其他内容无需修改
function startConnection() {
    var message = document.getElementById("chargerID");
    //const uri = "ws://127.0.0.1:5000/" + message.value;
    const uri = "ws://192.168.31.162:5000/" + message.value;

    socket = new WebSocket(uri,["ocpp1.6",]);
    socket.onopen = function (e) {
        console.log("websocket estabished!");
    }

    socket.onclose = function (e) {
        console.log('websocket closed!');
    }

    socket.onmessage = function (e) {
        appendItem(list, e.data);
        console.log(e.data);
    }
}
// 获取DT模型request
function getDTModles() {
    //const uri = "ws://127.0.0.1:5000/GetDT";
    const uri = "ws://192.168.31.162:5000/GetDT";
    socket = new WebSocket(uri,["ocpp1.6",]);
    socket.onopen = function (e) {
        console.log("websocket estabished!");
    }

    socket.onclose = function (e) {
        console.log('websocket closed!');
    }

    socket.onmessage = function (e) {
        appendItem(list, e.data);
        console.log(e.data);
    }
}

const list = document.getElementById("messageList");
const sendBtnAuther = document.getElementById("sendBtnAuther");
const sendBtnBoot = document.getElementById("sendBtnBoot");
const connectBtn = document.getElementById("connectBtn");
const getDTBtn = document.getElementById("getDTBtn");
const sendBtnStatus = document.getElementById("sendBtnStatus");
const sendBtnStopTransaction = document.getElementById("sendBtnStopTransaction");
const sendBtnStartTransaction = document.getElementById("sendBtnStartTransation");
sendBtnAuther.addEventListener("click", function () {
    console.log("sending message~~~");
    let msg = JSON.stringify([2, 10, "Authorize", {
        idTag: "1234",
    }]);
    socket.send(msg)
})

sendBtnBoot.addEventListener("click", function () {
    let msg = JSON.stringify([2, 10, "BootNotification", {
        chargePointVendor: "test",
        chargePointModel: "test",
    }]);
    socket.send(msg)
})
connectBtn.addEventListener("click", function () {
    startConnection();
})
getDTBtn.addEventListener("click", function () {
    getDTModles();
})
sendBtnStatus.addEventListener("click", function () {
    let msg = JSON.stringify([2, 10, "StatusNotification", {
        connectorId: 21,
        errorCode: "NoError",
        status: "Available",
    }]);
    socket.send(msg)
})
sendBtnStartTransaction.addEventListener("click", function () {
    let msg = JSON.stringify([2, 10, "StartTransaction", {
        connectorId: 21,
        idTag: "1234",
        meterStart: 0,
        timestamp: getDatetime(),
    }]);
    socket.send(msg)
})
sendBtnStopTransaction.addEventListener("click", function () {
    let msg = JSON.stringify([2, 10, "StopTransaction", {
        transactionId:1,
        meterStop: 0,
        timestamp: getDatetime(),
    }]);
    socket.send(msg)
})

function getDatetime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var ss = now.getSeconds();
    var clock = year + "-";
    if (month < 10)
        clock += "0";
    clock += month + "-";
    if (day < 10)
        clock += "0";
    clock += day + "T";
    if (hh < 10)
        clock += "0";
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";
    if (ss < 10) clock += '0';
    clock += ss;
    return clock;
}

function appendItem(list, message) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    list.appendChild(li);
}