// SQLInsights static landing page
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const contactPanel = document.querySelector("#contact-panel");
const contactOpeners = document.querySelectorAll("[data-contact-open]");
const contactClosers = document.querySelectorAll("[data-contact-close]");
const copyEmailButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("#copy-status");
const contactEmail = "pprandive@gmail.com";

function openContactPanel() {
  if (!contactPanel) return;
  contactPanel.classList.add("open");
  contactPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const closeButton = contactPanel.querySelector(".contact-close");
  if (closeButton) closeButton.focus();
}

function closeContactPanel() {
  if (!contactPanel) return;
  contactPanel.classList.remove("open");
  contactPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

contactOpeners.forEach(button => {
  button.addEventListener("click", openContactPanel);
});

contactClosers.forEach(button => {
  button.addEventListener("click", closeContactPanel);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && contactPanel?.classList.contains("open")) {
    closeContactPanel();
  }
});

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent = `Please copy this address: ${contactEmail}`;
    }
  });
}
