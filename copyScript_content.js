function myFunc() {
    alert("HELLOW WORLD");
};


var app2 = {
    init: function() {
        alert(document.getElementsByClassName("qa-grid__row ng-scope is-active")[0].innerText);
        // if (document.getElementById("initialdata")) {
        //     var adData = JSON.parse(document.getElementById("initialdata").innerHTML),
        //         libId = adData.campaignId,
        //         creativeId = adData.previewId,
        //         fileName = adData.creatives.list[0].name;

        //     if (adData.hasDynamic) {
        //         // if ad is dynamic activate mutal observer
        //         // Select the node that will be observed for mutations
        //         var targetNode = document.getElementsByClassName('c-tabs__content')[0];

        //         // Options for the observer (which mutations to observe)
        //         var config = {
        //             attributes: true,
        //             childList: true
        //         };

        //         // Callback function to execute when mutations are observed
        //         var callback = function(mutationsList, observer) {
        //             for (var mutation of mutationsList) {
        //                 if (mutation.addedNodes[0] !== undefined) {
        //                     if (mutation.addedNodes[0].className == "c-sidenav__content o-scroll-container ") {
        //                         callForLoop();
        //                     }
        //                 }
        //             }
        //         };
        //         // Create an observer instance linked to the callback function
        //         var observer = new MutationObserver(callback);

        //         // Start observing the target node for configured mutations
        //         observer.observe(targetNode, config);
        //     } else {
        //         callForLoop();
        //     }
        // }

        // function callForLoop() {
        //     var ele = document.getElementsByClassName("c-sidenav__content")[0];
        //     var elements = ele.getElementsByTagName("li");

        //     for (var i = 0; i < elements.length; i++) {
        //         var element = elements[i];
        //         console.log(elements[i].childNodes);
        //         for (var j = 0; j < element.childNodes.length; j++) {
        //             var node = element.childNodes[j];
        //             // console.log("//NODE//");
        //             // console.log(node.nodeType);
        //             if (node.nodeType == 3 && node !== "Not available") {
        //                 console.log("ran node");
        //                 console.log(node);
        //                 // var text = node.nodeValue;
        //                 if (node.parentNode !== null || node.parentNode !== "Not available" || node.parentNode !== "N/A") {
        //                     // console.log(node);
        //                     // console.log(node.parentNode);
        //                     //CREATES LINK TO CREATIVE LIBRARY IN CRM
        //                     if (node.parentNode.firstChild.innerHTML == "Library ID") {
        //                         //recreates lib id elements and adds link
        //                         var newLibName = document.createElement("b");
        //                         newLibName.innerHTML = "Library ID";
        //                         var newBr = document.createElement("br");
        //                         var newLibLink = document.createElement("a");
        //                         newLibLink.href = "https://creativemanager.flashtalking.net/campaigns/" + libId;
        //                         newLibLink.target = "_blank";
        //                         newLibLink.style.color = "#2d7ebf";
        //                         newLibLink.style.padding = "0px";
        //                         newLibLink.innerHTML = libId;
        //                         //adds an id to current element to make finding easier
        //                         node.parentNode.id = "libidid";
        //                         //clears all children of current element
        //                         node.parentNode.innerHTML = "";
        //                         //appends all the new children created above
        //                         document.getElementById("libidid").appendChild(newLibName);
        //                         document.getElementById("libidid").appendChild(newBr);
        //                         document.getElementById("libidid").appendChild(newLibLink);
        //                     } else if (node.parentNode.firstChild.innerHTML == "Filename") {
        //                         //CREATES DOWNLOAD LINK
        //                         //recreates filename elements and adds link
        //                         var newFileName = document.createElement("b");
        //                         newFileName.innerHTML = "Filename";
        //                         var newBr = document.createElement("br");
        //                         var newFileLink = document.createElement("a");
        //                         newFileLink.href = "https://creativemanager.flashtalking.net/service/creatives/" + creativeId + "/download/" + fileName
        //                         newFileLink.style.color = "#2d7ebf";
        //                         newFileLink.style.padding = "0px";
        //                         newFileLink.innerHTML = fileName;
        //                         //adds an id to current element to make finding easier
        //                         node.parentNode.id = "fileidid";
        //                         //clears all children of current element
        //                         node.parentNode.innerHTML = "";
        //                         //appends all the new children created above
        //                         document.getElementById("fileidid").appendChild(newFileName);
        //                         document.getElementById("fileidid").appendChild(newBr);
        //                         document.getElementById("fileidid").appendChild(newFileLink);
        //                     } else if (node.parentNode.firstChild.innerHTML == "Creative ID") {
        //                         //CREATES LINK TO CREATIVE IN CRM AND DEFINES CREATIVEID
        //                         //recreates lib id elements and adds link
        //                         var newCreativeName = document.createElement("b");
        //                         newCreativeName.innerHTML = "CreativeID";
        //                         var newBr = document.createElement("br");
        //                         var newCreativeLink = document.createElement("a");
        //                         if (adData.hasDynamic) {
        //                             newCreativeLink.href = "https://creativemanager.flashtalking.net/campaigns/" + libId + "/creatives/" + creativeId + "/instant-ads";
        //                         } else {
        //                             newCreativeLink.href = "https://creativemanager.flashtalking.net/campaigns/" + libId + "/creatives/" + creativeId + "/preview";
        //                         }
        //                         newCreativeLink.target = "_blank";
        //                         newCreativeLink.style.color = "#2d7ebf";
        //                         newCreativeLink.style.padding = "0px";
        //                         newCreativeLink.innerHTML = creativeId;
        //                         //adds an id to current element to make finding easier
        //                         node.parentNode.id = "creativeidid";
        //                         //clears all children of current element
        //                         node.parentNode.innerHTML = "";
        //                         //appends all the new children created above
        //                         document.getElementById("creativeidid").appendChild(newCreativeName);
        //                         document.getElementById("creativeidid").appendChild(newBr);
        //                         document.getElementById("creativeidid").appendChild(newCreativeLink);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        //document.getElementsByClassName("is-active")[2].getElementsByClassName("name-field")[0].innerText;



        //////////////
        // ENTIRE ACTIVE ROW: document.getElementsByClassName("qa-grid__row ng-scope is-active");
        /////////////
        ///1. run loop on the above and add in .getElementsByClassName("name-field")[0].innerText to get the actual name.
    }
}

// app2.init();

document.getElementById("subClicked").addEventListener("click", app2.init());