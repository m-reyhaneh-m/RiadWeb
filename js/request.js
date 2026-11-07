const form = document.querySelector("#project-form");
const successPanel = document.querySelector("#success-panel");
const formStatus = document.querySelector("#form-status");
const submitButton = form?.querySelector(".submit-button");

if (form && successPanel && formStatus && submitButton) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    formStatus.textContent = "در حال ارسال درخواست...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        const message = result.errors?.map((error) => error.message).join(" ");

        throw new Error(message || "ارسال درخواست ناموفق بود.");
      }

      form.hidden = true;
      successPanel.hidden = false;
      successPanel.setAttribute("tabindex", "-1");
      successPanel.focus();

      form.reset();
    } catch (error) {
      formStatus.textContent =
        error.message || "ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید.";
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  });
}
