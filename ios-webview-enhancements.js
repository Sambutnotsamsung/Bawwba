(function () {
  "use strict";

  var APP_ID = "6ab7c0757100b6d847a14a81";
  var API_ORIGIN = "https://bawwaba.base44.app";
  var nativeFetch = window.fetch.bind(window);
  var nativeOpen = XMLHttpRequest.prototype.open;
  var nativeSetAttribute = Element.prototype.setAttribute;

  function apiUrl(value) {
    if (typeof value !== "string") return value;
    try {
      var parsed = new URL(value, window.location.origin);
      if (parsed.pathname.indexOf("/api/") === 0) {
        parsed = new URL(parsed.pathname + parsed.search, API_ORIGIN);
      }
      return parsed.toString();
    } catch (error) {
      return value;
    }
  }

  // The compatibility copy is static, so keep Base44's existing data/auth API
  // as the backend instead of replacing the app's current web behavior.
  window.fetch = function (input, init) {
    if (typeof input === "string") {
      return nativeFetch(apiUrl(input), init);
    }
    if (input && input.url) {
      return nativeFetch(new Request(apiUrl(input.url), input), init);
    }
    return nativeFetch(input, init);
  };

  XMLHttpRequest.prototype.open = function (method, url) {
    var args = Array.prototype.slice.call(arguments);
    args[1] = apiUrl(url);
    return nativeOpen.apply(this, args);
  };

  function setSystemTheme() {
    var dark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", Boolean(dark));
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }

  setSystemTheme();
  if (window.matchMedia) {
    var media = window.matchMedia("(prefers-color-scheme: dark)");
    if (media.addEventListener) media.addEventListener("change", setSystemTheme);
    else if (media.addListener) media.addListener(setSystemTheme);
  }

  function icon(mark) {
    var span = document.createElement("span");
    span.className = "ios-bottom-nav__icon";
    span.setAttribute("aria-hidden", "true");
    span.textContent = mark;
    return span;
  }

  function navigate(path) {
    if (window.location.pathname === path) return;
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  function activePath() {
    return window.location.pathname === "/registry" ? "/registry" : "/";
  }

  function updateNavState(nav) {
    var current = activePath();
    Array.prototype.forEach.call(nav.querySelectorAll("[data-path]"), function (item) {
      item.dataset.active = String(item.dataset.path === current);
    });
  }

  function openSettings() {
    var existing = document.querySelector("[data-ios-settings-sheet]");
    if (existing) {
      existing.remove();
      return;
    }

    var backdrop = document.createElement("div");
    backdrop.className = "ios-settings-sheet__backdrop";
    backdrop.dataset.iosSettingsSheet = "true";
    backdrop.setAttribute("role", "presentation");

    var sheet = document.createElement("section");
    sheet.className = "ios-settings-sheet";
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-modal", "true");
    sheet.setAttribute("aria-labelledby", "ios-settings-title");
    sheet.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    var handle = document.createElement("div");
    handle.className = "ios-settings-sheet__handle";
    var title = document.createElement("h2");
    title.id = "ios-settings-title";
    title.className = "font-heading text-2xl";
    title.textContent = "Settings";
    var copy = document.createElement("p");
    copy.className = "mt-2 text-sm text-muted-foreground";
    copy.textContent = "Manage your profile and account settings.";

    var warning = document.createElement("p");
    warning.className = "mt-5 rounded-xl border border-destructive/25 bg-destructive/5 p-3 text-sm";
    warning.textContent =
      "Deleting your account permanently removes your profile and associated data. This cannot be undone.";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "mt-5 w-full rounded-xl border border-border px-4 py-3 text-sm font-medium";
    close.textContent = "Close";
    close.addEventListener("click", function () { backdrop.remove(); });

    var remove = document.createElement("button");
    remove.type = "button";
    remove.className = "ios-settings-sheet__danger";
    remove.textContent = "Delete Account";
    remove.addEventListener("click", function () {
      var confirmed = window.confirm(
        "Delete your account and all associated data? This action cannot be undone."
      );
      if (!confirmed) return;
      remove.disabled = true;
      remove.textContent = "Deleting…";
      var token = null;
      try { token = localStorage.getItem("base44_access_token") || localStorage.getItem("token"); } catch (error) {}
      var headers = token ? { Authorization: "Bearer " + token } : {};
      window.fetch(API_ORIGIN + "/api/apps/" + APP_ID + "/entities/User/me", {
        method: "DELETE",
        headers: headers
      }).then(function (response) {
        if (!response.ok) throw new Error("Account deletion is not enabled for this deployment.");
        try {
          localStorage.removeItem("base44_access_token");
          localStorage.removeItem("token");
        } catch (error) {}
        window.location.href = "/login";
      }).catch(function (error) {
        remove.disabled = false;
        remove.textContent = "Delete Account";
        window.alert(error.message || "Unable to delete the account.");
      });
    });

    sheet.append(handle, title, copy, warning, remove, close);
    backdrop.append(sheet);
    backdrop.addEventListener("click", function () { backdrop.remove(); });
    document.body.append(backdrop);
    close.focus();
  }

  function addSettingsButton(target) {
    if (target.querySelector("[data-ios-settings-trigger]")) return;
    var button = document.createElement("button");
    button.type = "button";
    button.dataset.iosSettingsTrigger = "true";
    button.className = "rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:text-foreground";
    button.textContent = "Settings";
    button.addEventListener("click", openSettings);
    target.append(button);
  }

  function mountBottomNav() {
    if (document.querySelector("[data-ios-bottom-nav]")) return;
    var nav = document.createElement("nav");
    nav.className = "ios-bottom-nav";
    nav.dataset.iosBottomNav = "true";
    nav.setAttribute("aria-label", "Main navigation");

    [
      { path: "/", label: "Home", glyph: "⌂" },
      { path: "/registry", label: "Registry", glyph: "▤" }
    ].forEach(function (item) {
      var link = document.createElement("a");
      link.href = item.path;
      link.className = "ios-bottom-nav__item";
      link.dataset.path = item.path;
      link.append(icon(item.glyph), document.createTextNode(item.label));
      link.addEventListener("click", function (event) {
        event.preventDefault();
        navigate(item.path);
        updateNavState(nav);
      });
      nav.append(link);
    });

    var settings = document.createElement("button");
    settings.type = "button";
    settings.className = "ios-bottom-nav__item";
    settings.append(icon("⚙"), document.createTextNode("Settings"));
    settings.addEventListener("click", openSettings);
    nav.append(settings);
    document.body.append(nav);
    updateNavState(nav);
    window.addEventListener("popstate", function () { updateNavState(nav); });
  }

  function upgradeSelect(select) {
    if (select.dataset.iosSelectUpgraded === "true") return;
    select.dataset.iosSelectUpgraded = "true";
    select.classList.add("ios-native-select");

    var wrapper = document.createElement("div");
    wrapper.className = "ios-select";
    wrapper.dataset.open = "false";
    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "ios-select__trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    var label = document.createElement("span");
    var chevron = document.createElement("span");
    chevron.className = "ios-select__chevron";
    chevron.textContent = "⌄";
    trigger.append(label, chevron);

    var content = document.createElement("div");
    content.className = "ios-select__content";
    content.setAttribute("role", "listbox");
    Array.prototype.forEach.call(select.options, function (option, index) {
      var item = document.createElement("button");
      item.type = "button";
      item.className = "ios-select__option";
      item.textContent = option.textContent;
      item.dataset.value = option.value;
      item.setAttribute("role", "option");
      item.addEventListener("click", function () {
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        wrapper.dataset.open = "false";
        sync();
      });
      content.append(item);
    });

    function sync() {
      var selected = select.options[select.selectedIndex];
      label.textContent = selected ? selected.textContent : "";
      Array.prototype.forEach.call(content.children, function (item) {
        item.setAttribute("aria-selected", String(item.dataset.value === select.value));
      });
    }

    trigger.addEventListener("click", function () {
      wrapper.dataset.open = wrapper.dataset.open === "true" ? "false" : "true";
    });
    select.addEventListener("change", sync);
    wrapper.append(trigger, content);
    select.parentNode.insertBefore(wrapper, select);
    sync();
  }

  function enhance() {
    mountBottomNav();
    var header = document.querySelector("header");
    if (header) {
      var headerInner = header.querySelector("div.mx-auto") || header.firstElementChild;
      if (headerInner) addSettingsButton(headerInner);
    }
    Array.prototype.forEach.call(document.querySelectorAll("select"), upgradeSelect);
  }

  var scheduled = false;
  function scheduleEnhance() {
    if (scheduled) return;
    scheduled = true;
    window.setTimeout(function () {
      scheduled = false;
      enhance();
    }, 50);
  }

  new MutationObserver(scheduleEnhance).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".ios-select")) {
      Array.prototype.forEach.call(document.querySelectorAll(".ios-select"), function (select) {
        select.dataset.open = "false";
      });
    }
  });
  scheduleEnhance();
})();