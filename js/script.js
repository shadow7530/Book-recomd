document.addEventListener('DOMContentLoaded', () => {
    const imagineBtn = document.getElementById('imagineBtn');
    const imagineResult = document.getElementById('imagineResult');
    const imagineText = document.getElementById('imagineText');

    const ideas = [
        'ลองมองรอยเปื้อนบนกระดาษ แล้วจินตนาการว่ามันอาจกลายเป็นสัตว์ตัวหนึ่ง',
        'หยิบของใกล้ตัวสักชิ้น แล้วคิดว่าถ้าวาดต่อจากรูปร่างของมันจะเกิดอะไรขึ้น',
        'ลองใช้สีสองสีมาผสมกัน แล้วตั้งชื่อสีใหม่ในแบบของคุณเอง',
        'ลองวาดสิ่งที่คุณชอบ โดยไม่ต้องกังวลว่าต้องวาดให้เหมือนจริง',
        'เลือกสิ่งของธรรมดา 1 อย่าง แล้วเปลี่ยนมันให้กลายเป็นตัวละครในจินตนาการ'
    ];

    let currentIdea = -1;

    imagineBtn?.addEventListener('click', () => {
        let nextIdea = Math.floor(Math.random() * ideas.length);
        while (nextIdea === currentIdea && ideas.length > 1) {
            nextIdea = Math.floor(Math.random() * ideas.length);
        }

        currentIdea = nextIdea;
        imagineText.textContent = ideas[currentIdea];
        imagineResult.classList.add('show');
    });

    // ปิดเมนู Bootstrap หลังคลิก anchor บนมือถือ
    document.querySelectorAll('.navbar .nav-link, .navbar .nav-cta').forEach(link => {
        link.addEventListener('click', () => {
            const collapseEl = document.getElementById('mainNav');
            if (collapseEl && collapseEl.classList.contains('show') && window.bootstrap) {
                const collapse = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl);
                collapse.hide();
            }
        });
    });
});
