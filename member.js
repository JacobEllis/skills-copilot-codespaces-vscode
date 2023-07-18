function skillsMember() {
    var skill = document.getElementById("skill").value;
    var member = document.getElementById("member").value;
    if (skill == "" || member == "") {
        document.getElementById("result").innerHTML = "Please input skill and member";
    } else {
        document.getElementById("result").innerHTML = "Skill: " + skill + "<br>" + "Member: " + member;
    }
}
