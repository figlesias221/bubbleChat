const SIZE = 60; // size of the chat button in pixels
const BTN_RAD = SIZE / 2; // radius of the chat button in pixels
const BG_CHAT = "#49CACD"; // background color of the chat button
const chatButtonLogo = `<svg fill="#FFFFFF" stroke-width="10" height="60px" width="700px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-80 -120 700 700" >
<g>
	<g>
		<g>
			<path d="M266.667,320c52.928,0,96-43.072,96-96v-64c0-52.928-43.072-96-96-96H96c-52.928,0-96,43.072-96,96v64
				c0,52.928,43.072,96,96,96h10.667v53.333c0,4.309,2.603,8.213,6.592,9.856c1.301,0.555,2.709,0.811,4.075,0.811
				c2.773,0,5.504-1.088,7.531-3.115L185.749,320H266.667z M173.781,301.803L128,347.584v-38.251
				c0-5.888-4.779-10.667-10.667-10.667H96c-41.173,0-74.667-33.493-74.667-74.667v-64c0-41.173,33.493-74.667,74.667-74.667
				h170.667c41.173,0,74.667,33.493,74.667,74.667v64c0,41.173-33.493,74.667-74.667,74.667h-85.333
				C178.496,298.667,175.787,299.797,173.781,301.803z"/>
			<path d="M416,128h-20.288c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667H416
				c41.173,0,74.667,33.493,74.667,74.667v64c0,41.173-33.493,74.667-74.667,74.667h-21.333c-5.888,0-10.667,4.779-10.667,10.667
				v38.251l-45.781-45.803c-2.005-1.984-4.715-3.115-7.552-3.115h-85.333c-15.317,0-30.101-4.757-42.795-13.76
				c-4.757-3.392-11.435-2.283-14.869,2.517c-3.392,4.8-2.283,11.456,2.539,14.869C206.528,377.877,225.579,384,245.333,384h80.917
				l60.864,60.885c2.048,2.027,4.779,3.115,7.552,3.115c1.365,0,2.773-0.256,4.075-0.811c3.989-1.643,6.592-5.547,6.592-9.856V384
				H416c52.928,0,96-43.072,96-96v-64C512,171.072,468.928,128,416,128z"/>
		</g>
	</g>
</g>
</svg>`;

const chatButtonClose = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#A9A9A9" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`;

const chatButtonCloseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`;

//Chat Button
const chatButton = document.createElement("div");

chatButton.setAttribute("id", "chat-bubble-button");
chatButton.style.position = "fixed";
chatButton.style.bottom = "20px";
chatButton.style.width = SIZE + "px";
chatButton.style.height = SIZE + "px";
chatButton.style.borderRadius = BTN_RAD + "px";
chatButton.style.backgroundColor = BG_CHAT;
chatButton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
chatButton.style.cursor = "pointer";
chatButton.style.zIndex = 999999999;
chatButton.style.transition = "all .2s ease-in-out";

chatButton.addEventListener("mouseenter", (event) => {
  chatButton.style.transform = "scale(1.05)";
});
chatButton.addEventListener("mouseleave", (event) => {
  chatButton.style.transform = "scale(1)";
});

chatButton.addEventListener("click", () => {
  if (chat.style.display === "none") {
    chat.style.display = "flex";
    chatButtonIcon.innerHTML = chatButtonCloseIcon;
    overlay.style.display = "block";
  } else {
    chat.style.display = "none";
    chatButtonIcon.innerHTML = chatButtonLogo;
    overlay.style.display = "none";
  }
});

//Chat Button Icon
const chatButtonIcon = document.createElement("div");
chatButtonIcon.style.display = "flex";
chatButtonIcon.style.alignItems = "center";
chatButtonIcon.style.justifyContent = "center";
chatButtonIcon.style.width = "100%";
chatButtonIcon.style.height = "100%";
chatButtonIcon.style.zIndex = 999999999;
chatButtonIcon.innerHTML = chatButtonLogo;
chatButton.appendChild(chatButtonIcon);

// Blur
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Adjust the opacity as desired
overlay.style.backdropFilter = "blur(1px)"; // Apply the blur effect
overlay.style.zIndex = "999999998"; // Ensure the overlay is below the chat window
overlay.style.display = "none";

overlay.addEventListener("click", () => {
  chat.style.display = "none";
  chatButtonIcon.innerHTML = chatButtonLogo;
  overlay.style.display = "none";
});

// Responsive
function adjustForSmallScreens() {
  const smallScreenWidth = 550;

  if (window.innerWidth < smallScreenWidth) {
    chat.style.position = "fixed";
    chat.style.top = "0";
    chat.style.left = "0";
    chat.style.transform = "none";
    chat.style.width = "100%";
    chat.style.height = "100%";
    chat.style.right = "unset";
    chat.style.borderRadius = "5px";
  } else {
    chat.style.position = "fixed";
    chat.style.top = "45%";
    chat.style.left = "50%";
    chat.style.transform = "translate(-50%, -50%)";
    chat.style.width = "60vw";
    chat.style.height = "70vh";
    chat.style.boxShadow =
      "rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px";
  }
}

//Initailize Chat
const chat = document.createElement("div");
chat.setAttribute("id", "chat-bubble-window");
chat.style.display = "none";
chat.style.zIndex = 999999999;
chat.style.borderRadius = "5px";

const chatCloseButton = document.createElement("div");
chatCloseButton.style.position = "absolute";
chatCloseButton.style.top = "10px";
chatCloseButton.style.right = "10px";
chatCloseButton.style.width = "24px";
chatCloseButton.style.height = "24px";
chatCloseButton.style.cursor = "pointer";
chatCloseButton.innerHTML = chatButtonClose;
chatCloseButton.addEventListener("click", () => {
  chat.style.display = "none";
  chatButton.style.display = "flex";
  overlay.style.display = "none";
  chatButtonIcon.innerHTML = chatButtonLogo;
});
chat.appendChild(chatCloseButton);

window.addEventListener("resize", adjustForSmallScreens);

adjustForSmallScreens();

const scriptTag = document.currentScript;
let botID = scriptTag.id;

function init() {
  chat.innerHTML = `<iframe
    src="https://wisello.vercel.app/${scriptTag.id}"
    width="100%"
    height="100%"
    frameborder="0"
    style="border-radius: 5px;"
  ></iframe>`;

  const getColor = async () => {
    chatButton.style.right = "20px";
    chatButton.style.left = "unset";
    chat.style.position = "fixed";
    chat.style.top = "45%";
    chat.style.left = "50%";
    chat.style.transform = "translate(-50%, -50%)";
    chat.style.width = "60vw";
    chat.style.height = "70vh";
    chat.style.boxShadow =
      "rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px";
    chat.style.display = "none";
    chat.style.zIndex = 999999999;
    chat.style.borderRadius = "5px";

    document.body.appendChild(chatButton);
    document.body.appendChild(overlay);
    document.body.appendChild(chat);
    chat.appendChild(chatCloseButton);
  };

  getColor();
  adjustForSmallScreens();
}

if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", init);
}
