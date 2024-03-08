var reverseWords = function(s) {
    const splitData = s.split(' ');
    var nextSplitData = splitData.filter(word=>word!=='');
    nextSplitData = nextSplitData.reverse();
    const ans = nextSplitData.join(' ');
    return ans;
};

var s = "  hello world  ";
const ans = reverseWords(s);
console.log(ans);