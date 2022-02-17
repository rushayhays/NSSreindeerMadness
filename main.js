// let's go through reindeer!!! And make them colors
// This answer is not as complicated as the intended answer

function createReindeerObj(arr1, arr2, num) {
    const reindeerObj = {
        name: arr1[num],
        color:arr2[num]
    }
    return reindeerObj;
}

function coloredReindeerBuilder() {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    coloredReindeerArray = [];
    // Write a for loop that looks at each reindeer
    for(let x=0; x<reindeer.length; x++) {
        // Invoke factory function to create reindeer object
        //console.log(reindeer[x])
        const aReindeerObj = createReindeerObj(reindeer, colors, x);
        coloredReindeerArray.push(aReindeerObj)
    }
    


    return coloredReindeerArray;
}

console.log(coloredReindeerBuilder());