const messages = [
    "Em chắc ròi ạ :<",
    "Thật sự lun sao :((",
    "Năn nỉ em iu luôn ạa",
    "Thoi mà plsss",
    "Anh chừa ạ huhu",
    "Nếu e nói ko, anh sẽ buồn lắm...",
    "Pls eiu xinh đẹp cutii vãi ò tha lỗi anh nhé...",
    "Oeoeoeoeoe...",
    "Được thôi, anh khong hỏi nữa...",
    "Đùa thoi, anh xin lỗi vợ nhìu lắm, thương lắm ạ ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Tăng kích thước nút "Yes" mỗi lần nhấn "No"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Ẩn phần câu hỏi ban đầu
    document.getElementById('main-container').style.display = 'none';
    // Hiển thị phần "Knew you would say yes!"
    document.getElementById('yes-container').style.display = 'block';
}
