const tabs = document.querySelectorAll(".tab-item");
const content = document.getElementById('content');

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

  function goBack() {
      window.location.href = "index.html"; // ✅ กลับไปหน้า index
    }

function loadPage(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });
}

// โหลดหน้าแรกตอนเปิดเว็บ
loadPage('index.html');

// เพิ่ม event ให้ link
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // เปลี่ยน active class
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // โหลดเนื้อหา
    const page = link.getAttribute('data-page');
    loadPage(page);
  });
});
