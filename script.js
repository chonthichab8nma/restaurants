const pages = {
  home: "🍩 ยินดีต้อนรับสู่ร้านขนมหวาน!",
  cake: "🧁 เมนูขนมของเรา หอม หวาน สดใหม่ทุกวัน!",
  drink: "🛒 ตะกร้าของคุณ: ยังไม่มีขนมเลย~",
  bakery: "💖 รายการโปรดของคุณอยู่ที่นี่~"
};


const tabs = document.querySelectorAll(".tab-item");
const content = document.getElementById("page-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const page = tab.dataset.page;
    content.textContent = pages[page];
  });
});
