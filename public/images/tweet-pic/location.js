var sendPath = function(){
    var filename = "tweet.png";
    var path = __dirname+"/"+filename;
    var regularEX = /\\/g;
    var newPath = path.replace(regularEX,"/");
    return newPath;
};

exports.sendPath = sendPath;