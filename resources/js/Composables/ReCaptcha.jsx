import React from "react";

export function useRecaptcha() {
  if (document.contains(document.getElementById("recaptcha"))) {
    document.getElementById("recaptcha").remove();
  }

  let recaptchaScript = document.createElement("script");
  recaptchaScript.setAttribute("id", "recaptcha");
  recaptchaScript.setAttribute(
    "src",
    "https://www.google.com/recaptcha/api.js",
  );
  document.head.appendChild(recaptchaScript);
}
