function saklar(command, type) {

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    let sound = document.getElementById("saklar-sound")

    sound.currentTime = 0;
    sound.play();

    if (command == "on") {
        if (type == "lampu1") {
            lampu1.src = 'asset/images/on.gif';
        }
        if (type == "lampu2") {
            lampu2.src = 'asset/images/on.gif';
        }
        if (type == "lampu3") {
            lampu3.src = 'asset/images/on.gif';
        }

    } else if (command == "off") {
        if (type == "lampu1")
            lampu1.src = 'asset/images/off.gif';
        if (type == "lampu2")
            lampu2.src = 'asset/images/off.gif';
        if (type == "lampu3")
            lampu3.src = 'asset/images/off.gif';
    }
    return lampu1;

}