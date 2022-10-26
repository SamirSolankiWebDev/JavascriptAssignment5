/*
    Assignment 5
    Samir Solanki
*/

$(document).ready(function () {
    // your code here
    let randomID = () => {
      let rand = Math.floor(Math.random() * 26) + Date.now();
      return rand;
    };
  
    class ContentCard {
      constructor(title, description, categoryType) {
        this.id = randomID();
        this.title = title;
        this.description = description;
        this.categoryType = categoryType;
      }
  
      updateContent(title, description, categoryType) {
        title ? (this.title = title) : null;
        description ? (this.description = description) : null;
        categoryType ? (this.categoryType = categoryType) : null;
      }
  
      toString() {
        let containerIDINT = "container-".concat(this.id.toString());
        let container = $(document.createElement("div"));
        let titleElementStr = $("<h2>" + this.title + "</h2>");
        let descriptionStr = $("<p>" + this.description + "</p>");
        let categoryStr = $("<div>" + this.categoryType + "</div>");
  
        container.append(titleElementStr, descriptionStr, categoryStr);
        return container
          .css({ border: "1px solid black" })
          .attr("id", containerIDINT);
      }
    }
  
    let contentCards = [
      {
        title: "Steps to achieve an aim",
        description:
          "To reach your goals, you need to remember some non-avoidable points that aid your success. A person with eagerness to achieve his intentions must be proactive, well-balanced, embrace failure, stay positive, keep track of your goals, and tell everyone with confidence.",
        categoryType: "Target",
      },
      {
        title: "My Aim in Life",
        description:
          "Education is a booming sector that gives a person the power to change the world. A teacher is a potter that makes molds the individuals throughout their life. According to Willian Arthur Ward, the unexceptional teacher teaches his/her students, a good teacher explains thoroughly, a superior teacher performs demonstrations, while the most excellent teacher inspires young minds.",
        categoryType: "My Aim",
      },
      {
        title: "Achieve your goals",
        description:
          "To achieve your goals, you need to set the right purpose and break them into small sections and prepare a timeline to make them.",
        categoryType: "Achievement",
      },
      {
        title: "Avoid Negativity",
        description:
          "Avoid all negativity around you, seek guidance when needed from others, be open to feedback and criticisms, and reset your goal.",
        categoryType: "Negativity",
      },
      {
        title: "My goal",
        description:
          "As my goal, I wish to impart the right education and inculcate refined qualities among young minds and make them the torch-bearers of the country.",
        categoryType: "Goal",
      },
    ];
  
    contentCards.forEach((contentCard) => {
      let content = new ContentCard(
        contentCard.title,
        contentCard.description,
        contentCard.categoryType
      );
      $("#content-list").append(content.toString());
     });
  });

