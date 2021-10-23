$(document).ready( function(){
    let friendBtn = document.createElement('button');
    let friendBtnText = document.createTextNode("1. Click me!");
    friendBtn.id = "niceBtn";
    friendBtn.append(friendBtnText);
    $("#colorChange").append(friendBtn);

    $('#niceBtn').click(function() {
        alert("You look nice today");
    })

    $("#alertBtn").click(function() {
        alert($("input[id=textAlert]").val());
    })

    $(document).on('mouseover', '#colorChange', function() {
        console.log('hovering');
        $(this).css({
           'background-color': 'red',
        })
     })
     
     $(document).on('mouseleave', '#colorChange', function(){
        console.log('mouse has left');
        $(this).css({
           'background-color': 'white',
        })
     })
    

     var colors = ["magenta", "blue", "red", "grey", "green", "brown", "purple", "yellow"];

     function randomColor() {
         return colors[Math.floor(Math.random() * colors.length)]
     };

    $("#colorPara").click(function() {
            $("#colorPara").css('background', randomColor());
        }
    )

    $("#nameBtn").click(function(){
        let nameSpan = document.createElement('span');
        let nameText = document.createTextNode("Scott");
        nameSpan.append(nameText);
        $("#nameDiv").append(nameSpan);
    })

    let friends = [
        "Sarah",
        "Alice",
        "Ben",
        "Dylan",
        "Nick",
        "Amanda",
        "Sarah B.",
        "Gretchen",
        "Hannah",
        "Gabby"
    ];

    $("#friendList").click( function() {
        for (i = 0; i < friends.length; i++) {
        let listComp = document.createElement('li');
        listComp.innerHTML = friends[i];
        $("#unorderedFriends").append(listComp);
    }
    })
    

})