const tabs = document.querySelectorAll(".tab-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const page = tab.dataset.page;
    // ✅ เปลี่ยนหน้าไปยังไฟล์ที่ตรงกับชื่อ data-page
    window.location.href = `${page}.html`;
  });
});

// ✅ ทำให้แท็บ active ตรงกับไฟล์ที่เปิดอยู่
const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

tabs.forEach(tab => {
  if (tab.dataset.page === currentPage) {
    tab.classList.add("active");
  } else {
    tab.classList.remove("active");
  }
});
function showMessage() {
      const msg = document.getElementById("message");
      msg.classList.add("show");
      setTimeout(() => {
        msg.classList.remove("show");
      }, 7000);
    }
function goLucky() {
      window.location.href = "lucky.html"; // ✅ ลิงก์ไปหน้า lucky.html
    }