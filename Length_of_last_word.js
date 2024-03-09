var lengthOfLastWord = function(s) {
    var splitData = s.split(' ');
    var splitData = splitData.filter(word=>word!='');
    return splitData[splitData.length-1].length;
};

const s = "fly to the moon    ";
console.log(lengthOfLastWord(s));