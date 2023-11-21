function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsTitle = document.getElementById("member-skills-title");
    var memberSkillsList = document.getElementById("member-skills-list");
    var memberSkillsListItems = document.getElementsByClassName("member-skills-list-item");
    var memberSkillsListItemsLength = memberSkillsListItems.length;

    memberSkillsList.style.width = member.offsetWidth + "px";
    memberSkillsList.style.height = member.offsetHeight + "px";

    memberSkillsTitle.style.width = member.offsetWidth + "px";
    memberSkillsTitle.style.height = member.offsetHeight + "px";

    memberSkillsTitle.style.top = member.offsetTop + "px";
    memberSkillsTitle.style.left = member.offsetLeft + "px";

    memberSkillsTitle.style.display = "block";

    memberSkillsList.style.top = member.offsetTop + "px";
    memberSkillsList.style.left = member.offsetLeft + "px";

    memberSkillsList.style.display = "block";

    for (var i = 0; i < memberSkillsListItemsLength; i++) {
        memberSkillsListItems[i].style.width = member.offsetWidth + "px";
        memberSkillsListItems[i].style.height = member.offsetHeight + "px";
    }

    memberSkills.style.width = member.offsetWidth + "px";
    memberSkills.style.height = member.offsetHeight + "px";

    memberSkills.style.top = member.offsetTop + "px";
    memberSkills.style.left = member.offsetLeft + "px";

    memberSkills.style.display = "block";

    memberSkillsTitle.style.opacity = "1";
    memberSkillsList.style.opacity = "1";
}
