/*
React Lib Must learn
React
React Hooks (ไม่ใช่ lib แต่เป็น concept ที่ควรเข้าใจ)
React Router
Next.js
Axios (ยิง API)
Dayjs (จัดการเรื่องเวลาและวันที่)
Redux, Redux-saga, Redux-thunk (State management)
MUI/Boostrap (Component library)
Emotion/Tailwind (CSS Framework)
*/ 
text = 'overlay'
const overlay = document.getElementById("overlay")
console.log(overlay)

function openPopup(id){
    var popup = document.getElementById(id);
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(id){
    var popup = document.getElementById(id);
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

