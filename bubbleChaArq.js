const SIZE = 60; // size of the chat button in pixels
const BTN_RAD = SIZE / 2; // radius of the chat button in pixels
const BG_CHAT = "#49CACD"; // background color of the chat button
const chatButtonLogo = `<svg fill="#FFFFFF" stroke-width="10" height="700px" width="700px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
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
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`;
// creat the chat button element
const chatButton = document.createElement("div");
// apply styles to the chat button
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

// create the chat button icon element
const chatButtonIcon = document.createElement("div");

// apply styles to the chat button icon
chatButtonIcon.style.display = "flex";
chatButtonIcon.style.alignItems = "center";
chatButtonIcon.style.justifyContent = "center";
chatButtonIcon.style.width = "100%";
chatButtonIcon.style.height = "100%";
chatButtonIcon.style.zIndex = 999999999;

// add the chat button icon to the chat button element
chatButtonIcon.innerHTML = chatButtonLogo;

chatButton.appendChild(chatButtonIcon);

chatButton.addEventListener("click", () => {
  // Toggle the chat component
  if (chat.style.display === "none") {
    chat.style.display = "flex";
    chatButtonIcon.innerHTML = chatButtonClose;
  } else {
    chat.style.display = "none";
    chatButtonIcon.innerHTML = chatButtonLogo;
  }
});

function adjustForSmallScreens() {
  const smallScreenHeight = 600;
  if (window.innerHeight < smallScreenHeight) {
    chat.style.height = "70vh";
  }
}

const chat = document.createElement("div");
chat.setAttribute("id", "chat-bubble-window");

chat.style.position = "fixed";
chat.style.flexDirection = "column";
chat.style.justifyContent = "space-between";
chat.style.bottom = "80px";
chat.style.width = "75vw";
chat.style.height = "70vh";
chat.style.boxShadow =
  "rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px";
chat.style.display = "none";
chat.style.borderRadius = "10px";
chat.style.zIndex = 999999999;
chat.style.overflow = "hidden";
window.addEventListener("resize", adjustForSmallScreens);

adjustForSmallScreens();

function init() {
  chat.innerHTML = `<iframe
    src="https://wisello.vercel.app/wisello"
    width="100%"
    height="100%"
    frameborder="0"
    ></iframe>`;

  document.body.appendChild(chat);
  const getColor = async () => {
    chatButton.style.right = "20px";
    chatButton.style.left = "unset";
    chat.style.right = "20px";
    chat.style.left = "unset";

    document.body.appendChild(chatButton);
  };

  getColor();
}
if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", init);
}

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 550px)");

function handleSizeChange(e) {
  // Check if the media query is true
  if (e.matches) {
    chat.style.height = "600px";
    chat.style.width = "450px";
  }
}

// Register event listener
mediaQuery.addEventListener("change", handleSizeChange);

// Initial check
handleSizeChange(mediaQuery);
