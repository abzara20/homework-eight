var userVarName = "abi"
var homeContent = "<h1>HOME</h1><p>This is a page</p>";
var aboutContent = "<h1>ABOUT</h1><p>This is a page</p>";




// this is an example of a named function

// function init(userName){
//     console.log("init here " + userName)
// }

function init(){
    //this is where the instructions go

    //add event listener to nav, it will get the link id;
    $("nav a").click(function (e) {
      
        // let btn = e.currentTarget.id;
        // console.log("clicked "+ btnId);
        let btn = this.id;
        let contentID = btn + "Content"
        $("#app").html(eval(contentID));3
        console.log(btn);

        // $("#app").html(btn);
        // $(app).append(btn);
        // $(app).prepend(contentID);   
    });
}

// this checks for all the elements to be read by the browser
$(document).ready(function(){
    // alert("4");
    // init(userVarName);
    init();
})