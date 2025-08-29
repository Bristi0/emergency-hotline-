

### **1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

* **getElementById("idName")**
  👉 শুধুমাত্র *একটা element* select করে যার unique id থাকে।
  👉 সবসময় একটা element বা null রিটার্ন করে।

* **getElementsByClassName("className")**
  👉 একই class থাকা *একাধিক element* select করে।
  👉 HTMLCollection দেয় (array-এর মতো), কিন্তু এটা live collection (DOM পরিবর্তন হলে এটা সাথে সাথে update হয়)।

* **querySelector("cssSelector")**
  👉 CSS selector দিয়ে element select করা যায় (id, class, tag সবকিছু)।
  👉 শুধু *প্রথম element* রিটার্ন করে যেটা selector মিলে।

* **querySelectorAll("cssSelector")**
  👉 সবগুলো element select করে যেগুলো selector মিলে।
  👉 NodeList দেয় (array-এর মতো), এবং এটাতে forEach চালানো যায়।

---

### *2. How do you create and insert a new element into the DOM?*

Steps:

1. document.createElement("tagName") → নতুন element তৈরি করা।
2. element.textContent বা element.innerHTML দিয়ে text/HTML যোগ করা।
3. appendChild(), prepend(), বা insertBefore() দিয়ে DOM এ ঢোকানো।

👉 Example:

let newDiv = document.createElement("div"); 
newDiv.textContent = "Hello, I am new!";
document.body.appendChild(newDiv); 

---

### *3. What is Event Bubbling and how does it work?*

* Event Bubbling মানে হচ্ছে যখন একটা element এ কোনো event ঘটে (যেমন button এ click), তখন সেই event **child থেকে parent → document পর্যন্ত উপরে উপরে propagate হয়**।
* Example: যদি button এর উপর click করা হয়, তাহলে আগে button এর event trigger হবে → তারপর তার parent div → তারপর body → তারপর document পর্যন্ত যাবে।

👉 মানে event নিচ থেকে ওপরে যায় (bubble এর মতো)।

---

### *4. What is Event Delegation in JavaScript? Why is it useful?*

* *Event Delegation* মানে হচ্ছে অনেকগুলো child element এ আলাদা আলাদা event listener না দিয়ে parent element এ একটাই event listener বসানো।
* Parent listener event bubbling এর মাধ্যমে child এর event ধরতে পারে।

👉 *Why useful?*

1. Performance ভালো হয় (কম event listener use হয়)।
2. Dynamically added elements এর উপরও কাজ করে (কারণ parent সবসময় DOM এ থাকে)।

👉 Example:

document.getElementById("cardSection").addEventListener("click", function(e) {
  if(e.target.classList.contains("call-btn")) {
    alert("Call button clicked!");
  }
});

---

### **5. What is the difference between preventDefault() and stopPropagation() methods?**

* **preventDefault()**
  👉 Default behavior বন্ধ করে।
  👉 Example: Form submit করলে page reload হয়। event.preventDefault() দিলে reload হবে না।

* **stopPropagation()**
  Event bubbling বন্ধ করে দেয়।
  Example: Button এ click করলে div এর click event ও trigger হয়। কিন্তু event.stopPropagation() দিলে parent div এর event এ আর যাবে না।
