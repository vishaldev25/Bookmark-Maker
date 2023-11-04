// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let myfomrEl = document.getElementById("bookmarkForm");

let siteNameEl = document.getElementById("siteNameInput");
let siteNameErrmsgEl = document.getElementById("siteNameErrMsg");

let siteUrlEl = document.getElementById("siteUrlInput");
let siteUrlErrmsgEl = document.getElementById("siteUrlErrMsg");

let submitBtnEl = document.getElementById("submitBtn");
let unorderedEl = document.getElementById("bookmarksList");

let formData = {
    siteName: "",
    siteUrl: ""
};

siteNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrmsgEl.textContent = "Required*";
    } else {
        siteNameErrmsgEl.textContent = "";
    }
    formData.siteName = event.target.value;
});

siteUrlEl.addEventListener("change", function(event) {
    formData.siteUrl = event.target.value;
});

function validateSiteName(formData) {
    let {
        siteName
    } = formData;
    if (siteName === "") {
        siteUrlErrmsgEl.textContent = "Required*";
    } else {
        siteUrlErrmsgEl.textContent = "";
    }
}

function validateSiteUrl(formData) {
    let {
        siteUrl
    } = formData;
    if (siteUrl === "") {
        siteUrlErrmsgEl.textContent = "Required*";
    } else {
        siteUrlErrmsgEl.textContent = "";
    }
}

myfomrEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateSiteName(formData);
    validateSiteUrl(formData);
});

submitBtnEl.onclick = function() {
    let containerEl = document.createElement("div");
    containerEl.classList.add("bookmarks", 'd-flex', "flex-column", "justify-content-center", "mr-4", "ml-4", "mb-3");
    unorderedEl.appendChild(containerEl);

    let headingNameEl = document.createElement("h1");
    let headingVal = formData.siteName;
    headingNameEl.textContent = headingVal;
    headingNameEl.classList.add("sitename-heading");
    containerEl.appendChild(headingNameEl);

    let urlNameEl = document.createElement("a");
    let urlVal = formData.siteUrl;
    urlNameEl.textContent = urlVal;
    urlNameEl.href = urlVal;
    urlNameEl.target = "_blank";
    urlNameEl.classList.add("url-value");
    containerEl.appendChild(urlNameEl);
}