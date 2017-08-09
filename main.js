// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function () {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------
let new_font = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
new_font.appendChild(link);
let container = document.querySelector("#fields");
for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === "select") {
    let input2 = document.createElement("select");

    for (let x = 0; x < formData[i].options.length; x++) {
      options = document.createElement("option");
      options.setAttribute("label", formData[i].options[x].label);
      options.setAttribute("value", formData[i].options[x].value);
      input2.appendChild(options);
      input2.style.width = "520px";
      container.appendChild(input2);
    }
  }
  else if (formData[i].type === "textarea") {
    let input1 = document.createElement("textarea");
    input1.setAttribute("type", formData[i].type);
    input1.setAttribute("placeholder", formData[i].label);
    input1.setAttribute("id", formData[i].id);
    input1.setAttribute("icon", formData[i].icon);
    input1.setAttribute("options", formData[i].options);
    input1.style.width = "486px";
    container.appendChild(input1);
  }
  else {
    let input1 = document.createElement("input");
    input1.setAttribute("type", formData[i].type);
    input1.setAttribute("placeholder", formData[i].label);
    input1.setAttribute("id", formData[i].id);
    input1.setAttribute("icon", formData[i].icon);
    input1.setAttribute("options", formData[i].options);
    container.appendChild(input1);
  }

}
