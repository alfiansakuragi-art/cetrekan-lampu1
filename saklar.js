function saklar(command) {

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (command == "on") {
        lampu1.src = 'asset/images/on.gif';
    } else if (command == "off") {
        console.log("off");
        lampu1.src = 'asset/images/off.gif';
    }
    return lampu1;

}