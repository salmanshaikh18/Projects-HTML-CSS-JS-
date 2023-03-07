/* 3} Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
based on the following criteria:
| If color1 is "red" and color2 is "blue" or vice versa, print "purple"J
| If color1 is "red" and color2 is "yellow" or vice versa, print "orange"J
| If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"J
| If any other combination of colors is input, the program should print "Invalid color combination" */

function colorMixer(color1, color2) {

    let result;

    switch(`${color1}-${color2}`) {
        case "red-blue" :
        case "blue-red" :
            result = "purple";
            break;
        
        case "red-yellow" :
        case "yellow-red" :
            result = "orange"
            break;

        case "blue-yellow" :
        case "yellow-blue" :
            result = "green"
            break;

        default :
            console.log("Invalid color combination!");
        return result;
    }
    
    console.log(`The result of ${color1} and ${color2} is ${result}`)
}

colorMixer("red", "blue")
colorMixer("blue", "red")
colorMixer("red", "yellow")
colorMixer("yellow", "red")
colorMixer("blue", "yellow")
colorMixer("yellow", "blue")
