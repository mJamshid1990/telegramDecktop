if (!localStorage.getItem("users") && !localStorage.getItem("mode")) {
  localStorage.setItem(
    "users",
    JSON.stringify([
      {
        id: 1,
        name: "Anvar Narzullayev",
        profil: "assets/img/sariqdev.jpg",
        phone: "+998 99 000 11 22",
        username: "@sariqdev",
        bio: "Mohirdev.uz",
        messages: [
          {
            author: "me",
            date: "09:21",
            message: "mohirdev.uzga marhamat",
          },
        ],
      },
      {
        id: 2,
        name: "Bobur Akilkhanov",
        profil: "assets/img/boburaka.jpg",
        phone: "+998 00 000 00 00",
        username: "@bobirakilkhanov",
        bio: "akilkhanov_akademy",
        messages: [
          {
            author: "me",
            date: "12:42",
            message: "Python dasturlash tilini o'rganing",
          },
        ],
      },
      {
        id: 3,
        name: "Farxod Dadajoniv",
        profil: "assets/img/farxodDadajonov.jpg",
        phone: "+998 90 444 44 44",
        username: "@farxod_dadajonov",
        bio: "Virtual darsga xush kelibsiz",
        messages: [
          {
            author: "me",
            date: "01:22",
            message: "Assalomu Alaykum virtual darsga xush kelibsiz",
          },
        ],
      },
      {
        id: 4,
        name: "Akmal Kadirov",
        profil: "assets/img/kadirovDev.jpg",
        phone: "+998 94 000 00 00",
        username: "@kadirovDev",
        bio: "Full stack developer",

        messages: [
          {
            author: "me",
            date: "21:21",
            message: "Assalomu Alaykum",
          },
        ],
      },
      {
        id: 5,
        name: "Laziz Adhamov",
        profil: "assets/img/lazizaka.jpg",
        phone: "+998 90 123 45 67",
        username: "@laziz_adkhamov",
        bio: "SAP",
        messages: [
          {
            author: "me",
            date: "12:31",
            message: "Information Technology, busenessman",
          },
        ],
      },
      {
        id: 6,
        name: "Muhammadjavohir Sur'atov",
        profil: "assets/img/muhammadjavohir.jpg",
        phone: "+998 90 888 88 88",
        username: "@muhammadjavohir",
        bio: "Mohirdev o'quv bo'limi boshlig'i",
        messages: [
          {
            author: "me",
            date: "18:56",
            message: "Front End developer",
          },
        ],
      },
      {
        id: 7,
        name: "Muhammadyunus",
        profil: "assets/img/muhammadYunus.jpg",
        phone: "+998 90 445 66 77",
        username: "@muhammadyunus",
        bio: "full stack developer",
        messages: [
          {
            author: "me",
            date: "21:41",
            message: "Assalomu alaykum aka yaxshimisiz",
          },
        ],
      },
      {
        id: 8,
        name: "Qudrat Abdurahimov",
        profil: "assets/img/qudrataka.jpg",
        phone: "+998 93 456 78 90",
        username: "@giza",
        bio: "GIZA dasturlash akademiyasi",
        messages: [
          {
            author: "me",
            date: "23:45",
            message: "Assalomu alaykum",
          },
        ],
      },
      {
        id: 9,
        name: "Fulfil admin",
        profil: "assets/img/fulfil.jpg",
        phone: "+998 91 323 33 32",
        username: "@fulfiledu",
        bio: "Fulfil education!",
        messages: [
          {
            author: "me",
            date: "15:24",
            message: "Kursimiz haqida fikringiz?",
          },
        ],
      },
      {
        id: 10,
        name: "Saidbek Arislonov",
        profil: "assets/img/saidbek.jpg",
        phone: "+998 99 888 77 55",
        username: "@saidbekArislonov",
        bio: "Dasturlash",
        messages: [
          {
            author: "me",
            date: "23:36",
            message: "Welcome to City tech!",
          },
        ],
      },
      {
        id: 11,
        name: "Samar Badriddinov",
        profil: "assets/img/samarBadriddinov.jpg",
        phone: "+998 99 111 22 44",
        username: "@sammi",
        bio: "Full stack developer and freelancer",
        messages: [
          {
            author: "me",
            date: "23:36",
            message: "Welcome to Mohirdev MERN!",
          },
        ],
      },
      {
        id: 12,
        name: "Sardor Og'a",
        profil: "assets/img/sardoroga.jpg",
        phone: "+998 99 888 77 66",
        username: "@sardoroga",
        bio: "Full stack web developer",
        messages: [
          {
            author: "me",
            date: "23:36",
            message: "PHP best of the best!",
          },
        ],
      },
    ])
  );

  localStorage.setItem("mode", JSON.stringify([{ mode: "dark" }]));
} else {
}

const retrievedObject = localStorage.getItem("users");
users = JSON.parse(retrievedObject);

users.forEach((user) => {
  const chatItemsElement = document.querySelector(".chat-items");

  const UsersItemElement = document.createElement("div");
  UsersItemElement.classList.add("chat-item");
  UsersItemElement.setAttribute("key", user.id);
  UsersItemElement.setAttribute("name", user.name);

  const checkmarkImgElement = document.createElement("img");
  checkmarkImgElement.src =
    "https://img.icons8.com/emoji/48/undefined/check-mark-emoji.png";

  const messageOutgoingStatusElement = document.createElement("div");
  messageOutgoingStatusElement.classList.add("MessageOutgoingStatus");

  const timeElement = document.createElement("span");
  timeElement.classList.add("time");
  timeElement.textContent = user.messages[user.messages.length - 1].date;

  const lastMessageMetaElement = document.createElement("div");
  lastMessageMetaElement.classList.add("LastMessageMeta");

  const nameElement = document.createElement("h3");
  nameElement.textContent = user.name;

  const usersInfoElement = document.createElement("div");
  usersInfoElement.classList.add("user-info");

  //

  const subTitleElement = document.createElement("div");
  subTitleElement.classList.add("subtitle");

  const submessageElement = document.createElement("p");
  submessageElement.classList.add("last-message");
  submessageElement.textContent =
    user.messages[user.messages.length - 1].message;

  const userNameDivElement = document.createElement("div");
  userNameDivElement.classList.add("user-name");

  const userImgDivElement = document.createElement("div");
  userImgDivElement.classList.add("user-img");

  const userImgElement = document.createElement("img");
  userImgElement.src = user.profil;

  chatItemsElement.appendChild(UsersItemElement);
  UsersItemElement.appendChild(userImgDivElement);
  UsersItemElement.appendChild(userNameDivElement);
  userImgDivElement.appendChild(userImgElement);
  userNameDivElement.appendChild(usersInfoElement);
  usersInfoElement.appendChild(nameElement);
  usersInfoElement.appendChild(lastMessageMetaElement);
  lastMessageMetaElement.appendChild(messageOutgoingStatusElement);
  messageOutgoingStatusElement.appendChild(checkmarkImgElement);
  lastMessageMetaElement.appendChild(timeElement);
  userNameDivElement.appendChild(subTitleElement);
  subTitleElement.appendChild(submessageElement);
  // console.log(UsersItemElement);
});

const MiddleColumn = document.querySelector(".MiddleColumn");

const charSectionElement = document.createElement("div");
charSectionElement.classList.add("Chat-section");

const middleHeaderElement = document.createElement("div");
middleHeaderElement.classList.add("MiddleHeader");

const MiddleHeaderUserInfoElement = document.createElement("div");
MiddleHeaderUserInfoElement.classList.add("MiddleHeader-user-info");

const cancelChatBtnElement = document.createElement("div");
cancelChatBtnElement.classList.add("cancel-chat-btn");

const cancelBtnIcon = document.createElement("img");
cancelBtnIcon.src =
  "https://img.icons8.com/material-rounded/24/undefined/left.png";

const userImgDivElement = document.createElement("div");
userImgDivElement.classList.add("user-img");
userImgDivElement.classList.add("user-img-header");

const userImgElement = document.createElement("img");

const userNameDivElement = document.createElement("div");
userNameDivElement.classList.add("user-name");

const userInfo1Element = document.createElement("div");
userInfo1Element.classList.add("user-info1");

const userNameElement = document.createElement("h3");

const statusDivElement = document.createElement("div");
statusDivElement.classList.add("status");

const statusSpanElement = document.createElement("div");
statusSpanElement.classList.add("status-item");
statusSpanElement.textContent = "last seen recently";

const headerToolsElement = document.createElement("div");
headerToolsElement.classList.add("header-tools");

const headerActionsElement = document.createElement("div");
headerActionsElement.classList.add("HeaderActions");

const searchBtnElement = document.createElement("button");
searchBtnElement.classList.add("icon-search");
searchBtnElement.setAttribute("type", "button");

const searchIconElement = document.createElement("img");
searchIconElement.src = "assets/img/icons8-search.svg";

const settingBtnElement = document.createElement("button");
settingBtnElement.setAttribute("type", "button");

const settingIconElement = document.createElement("img");
settingIconElement.src =
  "https://img.icons8.com/ios-glyphs/30/817f7f/menu-2.png";

const messageChatElement = document.createElement("div");
messageChatElement.classList.add("messages-chat");

const chatElement = document.createElement("div");
chatElement.classList.add("chat");

const scrollMessageContainerElement = document.createElement("div");
scrollMessageContainerElement.classList.add("scroll-message-container");

const messageFooterElement = document.createElement("div");
messageFooterElement.classList.add("message-footer");
messageFooterElement.classList.add("container-message");

MiddleColumn.appendChild(charSectionElement);
charSectionElement.appendChild(middleHeaderElement);
charSectionElement.appendChild(messageChatElement);
middleHeaderElement.appendChild(MiddleHeaderUserInfoElement);

middleHeaderElement.appendChild(headerToolsElement);

MiddleHeaderUserInfoElement.appendChild(cancelChatBtnElement);
MiddleHeaderUserInfoElement.appendChild(userImgDivElement);
MiddleHeaderUserInfoElement.appendChild(userNameDivElement);

cancelChatBtnElement.appendChild(cancelBtnIcon);

userImgDivElement.appendChild(userImgElement);

userNameDivElement.appendChild(userInfo1Element);
userInfo1Element.appendChild(userNameElement);

userInfo1Element.appendChild(statusDivElement);
statusDivElement.appendChild(statusSpanElement);

headerToolsElement.appendChild(headerActionsElement);
headerActionsElement.appendChild(searchBtnElement);
headerActionsElement.appendChild(settingBtnElement);

messageChatElement.appendChild(chatElement);
messageChatElement.appendChild(messageFooterElement);
chatElement.appendChild(scrollMessageContainerElement);

const chatClickBtnElement = document.querySelectorAll(".chat-item");
charSectionElement.style.display = "none";
const containerMessageElement = document.createElement("div");
scrollMessageContainerElement.appendChild(containerMessageElement);
containerMessageElement.classList.add("container-message");
// containerMessageElement.setAttribute('key', user.id)
chatClickBtnElement.forEach((chatItem) => {
  chatItem.addEventListener("onfocus", (e) => {
    chatItem.classList.toggle("fucus-item");
  });
});

chatClickBtnElement.forEach((chatItem) => {
  chatItem.addEventListener("click", (e) => {
    chatItem.classList.add("focus-item");

    let key = chatItem.getAttribute("key");

    let users = JSON.parse(localStorage.getItem("users")) || [];
    containerMessageElement.textContent = "";
    messageFooterElement.textContent = "";
    let user = users.filter((user) => key == user.id)[0];
    let messages = user.messages;

    const userProfilImgBtnElement = document.querySelector(".user-img-header");
    const userInfoModalElement = document.querySelector(".user__info__modal");
    const closeUserInfoModalBtn = document.querySelector(".close__modal__btn");

    const userProfilImgElement = document.querySelector(".user__profil__img");
    const userInfoNameElement = document.querySelector(".user__info__name");
    const userInfoPhoneNumberElement = document.querySelector(".phone_number");
    const userInfoUserNameElement = document.querySelector(".username");
    const userInfoBioElement = document.querySelector(".bio");

    // console.log(userProfilImgBtnElement);
    userProfilImgBtnElement.addEventListener("click", (e) => {
      userInfoModalElement.style.display = "block";
      userProfilImgElement.src = user.profil;
      userInfoNameElement.textContent = user.name;
      userInfoPhoneNumberElement.textContent = user.phone;
      userInfoUserNameElement.textContent = user.username;
      userInfoBioElement.textContent = user.bio;
    });
    closeUserInfoModalBtn.addEventListener("click", (e) => {
      userInfoModalElement.style.display = "none";
    });

    const messageInputWrapperElement = document.createElement("div");
    messageInputWrapperElement.classList.add("message-input-wrapper");

    const sendMessageFormElement = document.createElement("form");
    sendMessageFormElement.classList.add("send-message-form");

    const smilesIconImgElement = document.createElement("img");
    smilesIconImgElement.classList.add("smile-icon");
    smilesIconImgElement.src =
      "https://img.icons8.com/windows/32/828282/happy--v1.png";

    const messageInputElement = document.createElement("input");
    messageInputElement.classList.add("message");
    messageInputElement.setAttribute("type", "text");
    messageInputElement.setAttribute("name", "message");
    messageInputElement.setAttribute("id", "message");
    messageInputElement.setAttribute("placeholder", "Message...");
    messageInputElement.setAttribute("autocomplete", "off");

    const linkIconImgElement = document.createElement("img");
    linkIconImgElement.classList.add("link-file");
    linkIconImgElement.src = "https://img.icons8.com/metro/30/828282/link.png";

    const sendMessageBtnElement = document.createElement("button");
    sendMessageBtnElement.classList.add("send-btn");
    sendMessageBtnElement.setAttribute("type", "submit");

    const sendMessageIconElement = document.createElement("img");
    sendMessageIconElement.classList.add("send-message-icon");
    sendMessageIconElement.src =
      "https://img.icons8.com/ios-glyphs/30/8378db/filled-sent.png";

    messageFooterElement.appendChild(messageInputWrapperElement);
    messageInputWrapperElement.appendChild(sendMessageFormElement);
    sendMessageFormElement.appendChild(smilesIconImgElement);
    sendMessageFormElement.appendChild(messageInputElement);
    sendMessageFormElement.appendChild(linkIconImgElement);
    sendMessageFormElement.appendChild(sendMessageBtnElement);
    sendMessageBtnElement.appendChild(sendMessageIconElement);

    function addMessage(messages) {
      localStorage.setItem("users", JSON.stringify(users));

      for (let i = 0; i < user.messages.length; i++) {
        if (messages[i].author == "me") {
          const messageMeElement = document.createElement("div");
          messageMeElement.classList.add("message-blue");

          const messageMeContentElement = document.createElement("p");
          messageMeContentElement.classList.add("message-content");
          messageMeContentElement.textContent = user.messages[i].message;

          const messageMeTimestampTightElement = document.createElement("div");
          messageMeTimestampTightElement.classList.add(
            "message-timestamp-left"
          );
          messageMeTimestampTightElement.textContent = user.messages.date;

          containerMessageElement.appendChild(messageMeElement);
          messageMeElement.appendChild(messageMeContentElement);
          messageMeElement.appendChild(messageMeTimestampTightElement);
        } else if (messages[i].author == "you") {
          const messageYouElement = document.createElement("div");
          messageYouElement.classList.add("message-orange");

          const messageContentElement = document.createElement("p");
          messageContentElement.classList.add("message-content");
          messageContentElement.textContent = user.messages[i].message;

          const messageTimestampTightElement = document.createElement("div");
          messageTimestampTightElement.classList.add("message-timestamp-right");
          messageTimestampTightElement.textContent = user.messages[i].date;

          containerMessageElement.appendChild(messageYouElement);
          messageYouElement.appendChild(messageContentElement);
          messageYouElement.appendChild(messageTimestampTightElement);
        }
      }
    }
    addMessage(messages);
    // console.log(messageInputElement.value);
    sendMessageBtnElement.addEventListener("click", (e) => {
      e.preventDefault();
      containerMessageElement.textContent = "";
      let today = new Date();
      // console.log(messageInputElement.value);
      if (messageInputElement.value.length > 0) {
        messages.push({
          author: "you",
          date: today.getHours() + ":" + today.getMinutes(),
          message: messageInputElement.value,
        });
      }
      addMessage(messages);
      messageInputElement.value = "";
    });

    userImgElement.src = user.profil;
    userNameElement.textContent = user.name;

    charSectionElement.style.display = "block";
    cancelChatBtn = document.querySelector(".cancel-chat-btn");
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        charSectionElement.style.display = "none";
      }
    });
    cancelChatBtn.addEventListener("click", () => {
      charSectionElement.style.display = "none";
    });
  });
});
function search_animal() {
  let telegramSearchInput = document.querySelector(".search-input").value;
  telegramSearchInput = telegramSearchInput.toLowerCase();

  for (let i = 0; i < chatClickBtnElement.length; i++) {
    if (
      !chatClickBtnElement[i].textContent
        .toLowerCase()
        .includes(telegramSearchInput)
    ) {
      chatClickBtnElement[i].style.display = "none";
    } else {
      chatClickBtnElement[i].style.display = "flex";
    }
  }
}
