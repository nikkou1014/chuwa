// 1.=====================================================
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let title = document.getElementsByTagName("h1")[0];

let section1 = document.createElement("div");
section1.className = "section section1";
title.after(section1);

let table = document.createElement("table");
table.id = "students";
section1.append(table);

let tableHeader = document.createElement("tr");
table.append(tableHeader);

let ths = tableInfo.tableHeader.map((header) => {
  let th = document.createElement("th");
  th.textContent = header;
  return th;
});
tableHeader.append(...ths);

tableInfo.tableContent.map((student) => {
  let tr = document.createElement("tr");
  table.append(tr);

  let tds = Object.keys(student).map((key) => {
    let td = document.createElement("td");
    td.textContent = student[key];
    return td;
  });
  tr.append(...tds);
});

// 2.=====================================================
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let section2 = document.createElement("div");
section2.className = "section section2";
section1.after(section2);

let ol = document.createElement("ol");
section2.append(ol);

let langs = list.map((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  return li;
});
ol.append(...langs);

let ul = document.createElement("ul");
section2.append(ul);

let langs2 = list.map((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  return li;
});
ul.append(...langs2);

// 3.=====================================================
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let section3 = document.createElement("div");
section3.className = "section section3";
section2.after(section3);

let dropdown = document.createElement("div");
dropdown.className = "dropdown";
section3.append(dropdown);

let select = document.createElement("select");
select.className = "cities";
dropdown.append(select);

let options = dropDownList.map((option) => {
  let node = document.createElement("option");
  node.value = option.value;
  node.textContent = option.content;
  return node;
});
select.append(...options);

/*
// 1.
let title = $("h1");

let section1 = $("<div class='section section1'></div>");
title.after(section1);

let table = $("<table id='students'></table>");
section1.append(table);

let tableHeader = $("<tr></tr>");
table.append(tableHeader);

tableInfo.tableHeader.map((header) => {
  tableHeader.append($("<th></th>").text(header));
});

tableInfo.tableContent.map((student) => {
  let tr = $("<tr></tr>");
  table.append(tr);

  Object.keys(student).map((key) => {
    tr.append($("<td></td>").text(student[key]));
  });
});

// 2.
let section2 = $("<div class='section section2'></div>");
section1.after(section2);

let ol = $("<ol></ol>");
section2.append(ol);

list.map((lang) => {
  ol.append($("<li></li>").text(lang));
});

let ul = $("<ul></ul>");
section2.append(ul);

list.map((lang) => {
  ul.append($("<li></li>").text(lang));
});

// 3.
let section3 = $("<div class='section section3'></div>");
section2.after(section3);

let dropdown = $("<div class='dropdown'></div>");
section3.append(dropdown);

let select = $("<select class='cities'></select>");
dropdown.append(select);

dropDownList.map((option) => {
  select.append($("<option></option>").val(option.value).text(option.content));
});
*/
