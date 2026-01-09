const quizData = {
    lesson1: [
        { q: "คอมพิวเตอร์คืออะไร?", options: ["เครื่องคำนวณอิเล็กทรอนิกส์", "เครื่องจักรไอน้ำ", "เครื่องใช้ไฟฟ้าทั่วไป", "ของเล่นเด็ก"], a: 0 },
        { q: "ข้อใดคือหน่วยรับข้อมูล (Input)?", options: ["จอภาพ", "เมาส์", "ลำโพง", "เครื่องพิมพ์"], a: 1 },
        { q: "CPU ย่อมาจากอะไร?", options: ["Central Processing Unit", "Central Power Unit", "Computer Power Unit", "Central Program Unit"], a: 0 },
        { q: "ข้อใดเป็นหน่วยแสดงผล (Output)?", options: ["คีย์บอร์ด", "ไมโครโฟน", "เครื่องพิมพ์", "สแกนเนอร์"], a: 2 },
        { q: "อุปกรณ์ใดใช้เก็บข้อมูลถาวร?", options: ["RAM", "Hard Disk", "CPU", "Monitor"], a: 1 },
        { q: "RAM ทำหน้าที่อะไร?", options: ["เก็บข้อมูลถาวร", "ประมวลผล", "เก็บข้อมูลชั่วคราวขณะเปิดเครื่อง", "แสดงภาพ"], a: 2 },
        { q: "Supercomputer เหมาะกับงานประเภทใด?", options: ["พิมงานทั่วไป", "พยากรณ์อากาศ", "เล่นเกม", "ดูหนัง"], a: 1 },
        { q: "Smartphone จัดเป็นคอมพิวเตอร์ประเภทใด?", options: ["Mainframe", "Supercomputer", "Mobile Device", "Server"], a: 2 },
        { q: "หัวใจสำคัญของคอมพิวเตอร์เปรียบได้กับอะไร?", options: ["CPU", "Mouse", "Keyboard", "Case"], a: 0 },
        { q: "ข้อใดไม่ใช่ฮาร์ดแวร์?", options: ["Windows", "Mouse", "Screen", "Keyboard"], a: 0 }
    ],
    lesson2: [
        { q: "OS ย่อมาจากอะไร?", options: ["Operating System", "Open System", "Over Server", "Operation Service"], a: 0 },
        { q: "ข้อใดไม่ใช่ระบบปฏิบัติการ?", options: ["Windows", "macOS", "Microsoft Word", "Linux"], a: 2 },
        { q: "ระบบปฏิบัติการใดเป็น Open Source?", options: ["Windows", "iOS", "Linux", "macOS"], a: 2 },
        { q: "ระบบปฏิบัติการใดนิยมใช้บนเครื่อง Mac?", options: ["Windows", "macOS", "Android", "Linux"], a: 1 },
        { q: "หน้าที่หลักของ OS คืออะไร?", options: ["พิมพ์เอกสาร", "จัดการทรัพยากรเครื่อง", "เล่นอินเทอร์เน็ต", "วาดรูป"], a: 1 },
        { q: "Windows เป็นของบริษัทใด?", options: ["Apple", "Google", "Microsoft", "Facebook"], a: 2 },
        { q: "Android เป็นระบบปฏิบัติการสำหรับอุปกรณ์ใด?", options: ["PC", "Server", "Mobile", "Supercomputer"], a: 2 },
        { q: "การอัปเดต OS มีประโยชน์อย่างไร?", options: ["ทำให้เครื่องสวยขึ้น", "อุดช่องโหว่ความปลอดภัย", "ทำให้เครื่องหนักขึ้น", "ไม่มีผลอะไร"], a: 1 },
        { q: "iOS เป็นระบบปฏิบัติการของอุปกรณ์ใด?", options: ["Samsung", "iPhone", "Huawei", "Xiaomi"], a: 1 },
        { q: "GUI ย่อมาจากอะไร?", options: ["Graphical User Interface", "Global User Internet", "General Use Interface", "Graphical Unit Input"], a: 0 }
    ],
    lesson3: [
        { q: "รหัสผ่านที่ปลอดภัยควรเป็นอย่างไร?", options: ["123456", "วันเกิดตัวเอง", "ผสมตัวเลขและตัวอักษร", "ชื่อเล่นภาษาอังกฤษ"], a: 2 },
        { q: "Phishing คืออะไร?", options: ["การตกปลา", "การหลอกลวงเอาข้อมูล", "การสแกนไวรัส", "การซ่อมคอมพิวเตอร์"], a: 1 },
        { q: "ถ้าเจอลิงก์แปลกปลอมในอีเมลควรทำอย่างไร?", options: ["คลิกทันที", "ส่งต่อให้เพื่อน", "ลบทิ้งและไม่คลิก", "ตอบกลับผู้ส่ง"], a: 2 },
        { q: "ข้อใดคือการยืนยันตัวตน 2 ชั้น (2FA)?", options: ["ใส่รหัสผ่าน 2 ครั้ง", "ใส่รหัสผ่าน + OTP", "ใช้กุญแจ 2 ดอก", "สแกนนิ้ว 2 นิ้ว"], a: 1 },
        { q: "ไวรัสคอมพิวเตอร์คืออะไร?", options: ["เชื้อโรคในคอม", "โปรแกรมประสงค์ร้าย", "ฝุ่นในเครื่อง", "โปรแกรมทำความสะอาด"], a: 1 },
        { q: "การ Backup ข้อมูลคืออะไร?", options: ["การลบข้อมูล", "การสำรองข้อมูล", "การกู้คืนข้อมูล", "การขายข้อมูล"], a: 1 },
        { q: "HTTPS คืออะไร?", options: ["เว็บที่ไม่ปลอดภัย", "เว็บที่มีการเข้ารหัสปลอดภัย", "โปรแกรมแชท", "ยี่ห้อคอมพิวเตอร์"], a: 1 },
        { q: "ไม่ควรโพสต์สิ่งใดบน Social Media?", options: ["รูปอาหาร", "สถานที่ท่องเที่ยว", "รหัสบัตรประชาชน", "ความรู้สึกดีๆ"], a: 2 },
        { q: "ข้อใดคือ Malware?", options: ["Microsoft Paint", "Trojan", "Google Chrome", "Notepad"], a: 1 },
        { q: "สัญลักษณ์กุญแจบน Browser หมายถึงอะไร?", options: ["เว็บนี้ล็อคอยู่", "เว็บนี้ปลอดภัย", "เว็บนี้เสีย", "เว็บนี้ห้ามเข้า"], a: 1 }
    ],
    lesson4: [
        { q: "Google เป็นเว็บไซต์ประเภทใด?", options: ["Social Media", "Search Engine", "Online Shop", "Gaming Site"], a: 1 },
        { q: "ต้องการค้นหาคำที่ตรงตัวเป๊ะๆ ต้องใช้เครื่องหมายใด?", options: ["( )", "# #", "\" \"", "* *"], a: 2 },
        { q: "ถ้าต้องการค้นหาไฟล์ PDF ต้องพิมพ์ว่าอะไร?", options: ["filetype:pdf", "find:pdf", "search:pdf", "look:pdf"], a: 0 },
        { q: "เครื่องหมายลบ (-) หน้าคำค้นหาหมายถึงอะไร?", options: ["เน้นคำนั้น", "ตัดคำนั้นออก", "ค้นหาคำใกล้เคียง", "ไม่มีความหมาย"], a: 1 },
        { q: "ข้อใดน่าเชื่อถือที่สุด?", options: ["บล็อกส่วนตัวไม่มีที่มา", "เว็บสถาบันการศึกษา (.ac.th)", "แชทไลน์ส่งต่อกันมา", "ความเห็นในเฟสบุ๊ค"], a: 1 },
        { q: "Keyword คืออะไร?", options: ["รหัสผ่าน", "คำค้นหา", "ยี่ห้อคีย์บอร์ด", "ชื่อเว็บไซต์"], a: 1 },
        { q: "ถ้าต้องการค้นหาเว็บรัฐบาลไทย ควรใช้นามสกุลใด?", options: [".com", ".go.th", ".org", ".net"], a: 1 },
        { q: "Fake News คืออะไร?", options: ["ข่าวจริง", "ข่าวด่วน", "ข่าวปลอม", "ข่าวเก่า"], a: 2 },
        { q: "การตรวจสอบวันที่ของข้อมูลเพื่ออะไร?", options: ["ดูความทันสมัย", "ดูความสวยงาม", "ดูคนเขียน", "ดูความยาว"], a: 0 },
        { q: "Wikipedia เชื่อถือได้ 100% หรือไม่?", options: ["ใช่", "ไม่ใช่ เพราะใครก็แก้ได้", "ใช่ เพราะมีคนตรวจเยอะ", "เชื่อถือได้มากที่สุดในโลก"], a: 1 }
    ],
    lesson5: [
        { q: "จริยธรรมคอมพิวเตอร์คืออะไร?", options: ["กฎหมาย", "ความถูกต้องดีงามในการใช้คอม", "วิธีการประกอบคอม", "ราคาคอมพิวเตอร์"], a: 1 },
        { q: "Cyberbullying คืออะไร?", options: ["การเล่นเกมออนไลน์", "การกลั่นแกล้งบนโลกออนไลน์", "การซื้อของออนไลน์", "การเรียนออนไลน์"], a: 1 },
        { q: "การนำรูปคนอื่นมาล้อเลียนผิดหรือไม่?", options: ["ไม่ผิด", "ผิดทั้งกฎหมายและจริยธรรม", "ผิดแค่จริยธรรม", "ทำได้ถ้าตลก"], a: 1 },
        { q: "พ.ร.บ. คอมพิวเตอร์ มีไว้เพื่ออะไร?", options: ["จับคนเล่นเกม", "ควบคุมดูแลการใช้คอมพิวเตอร์", "ขายอุปกรณ์คอม", "แจกเน็ตฟรี"], a: 1 },
        { q: "การแชร์ข่าวปลอมมีความผิดหรือไม่?", options: ["ไม่ผิด", "ผิดถ้ารู้ว่าเป็นข่าวปลอม", "ผิดตาม พ.ร.บ. คอมฯ", "แล้วแต่คนแชร์"], a: 2 },
        { q: "การแอบเข้า Facebook เพื่อนผิดหรือไม่?", options: ["ไม่ผิด เป็นเพื่อนกัน", "ผิดฐานเข้าถึงข้อมูลโดยมิชอบ", "ไม่ผิดถ้าไม่ได้โพสต์", "ผิดแค่เล็กน้อย"], a: 1 },
        { q: "Netiquette คืออะไร?", options: ["มารยาททางอินเทอร์เน็ต", "ความเร็วเน็ต", "ยี่ห้อเร้าเตอร์", "สายแลน"], a: 0 },
        { q: "Software ละเมิดลิขสิทธิ์คืออะไร?", options: ["ของแท้", "ของฟรี", "ของเถื่อน/ก๊อปปี้", "ของแถม"], a: 2 },
        { q: "Creative Commons คืออะไร?", options: ["ชื่อโปรแกรม", "สัญญาอนุญาตลิขสิทธิ์", "ยี่ห้อกล้อง", "ชื่อเว็บไซต์"], a: 1 },
        { q: "ถ้าโดน Cyberbully ควรทำอย่างไร?", options: ["ด่ากลับ", "บล็อกและแจ้งผู้ปกครอง", "ปิดคอมหนี", "ร้องไห้คนเดียว"], a: 1 }
    ],
    lesson6: [
        { q: "โปรแกรมใดใช้พิมพ์งานเอกสาร?", options: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Access"], a: 1 },
        { q: "โปรแกรมใดใช้คำนวณและทำตาราง?", options: ["Microsoft Word", "Microsoft Excel", "Photoshop", "PowerPoint"], a: 1 },
        { q: "โปรแกรมใดใช้นำเสนองาน (Presentation)?", options: ["Excel", "Word", "PowerPoint", "Outlook"], a: 2 },
        { q: "นามสกุลไฟล์ .docx คือโปรแกรมใด?", options: ["Word", "Excel", "PowerPoint", "PDF"], a: 0 },
        { q: "สูตรใน Excel ต้องขึ้นต้นด้วยเครื่องหมายใด?", options: ["+", "-", "=", "*"], a: 2 },
        { q: "หากต้องการทำกราฟสรุปยอดขาย ควรใช้โปรแกรมใด?", options: ["Word", "Excel", "PowerPoint", "Note"], a: 1 },
        { q: "ข้อใดคือ Cloud Storage ของ Microsoft?", options: ["Google Drive", "iCloud", "OneDrive", "Dropbox"], a: 2 },
        { q: "Shortcut 'Ctrl + C' ใช้ทำอะไร?", options: ["วาง", "ตัด", "คัดลอก", "ลบ"], a: 2 },
        { q: "Shortcut 'Ctrl + V' ใช้ทำอะไร?", options: ["วาง", "คัดลอก", "ย้อนกลับ", "เซฟ"], a: 0 },
        { q: "Google Docs ทำงานคล้ายกับโปรแกรมใด?", options: ["Excel", "Word", "PowerPoint", "Photoshop"], a: 1 }
    ],
    lesson7: [
        { q: "AI ย่อมาจากอะไร?", options: ["Artificial Intelligence", "Auto Internet", "Apple Inc.", "Advanced Input"], a: 0 },
        { q: "IoT คืออะไร?", options: ["Internet of Time", "Internet of Things", "Input of Text", "Image of Tech"], a: 1 },
        { q: "Cloud Computing เปรียบเหมือนอะไร?", options: ["ก้อนเมฆบนฟ้า", "การเช่าใช้ทรัพยากรผ่านเน็ต", "เครื่องคิดเลข", "สายพานการผลิต"], a: 1 },
        { q: "ข้อใดคือตัวอย่างของ AI?", options: ["เครื่องคิดเลข", "Siri / Google Assistant", "พัดลม", "หลอดไฟ"], a: 1 },
        { q: "Smart Home เกี่ยวข้องกับเทคโนโลยีใดมากที่สุด?", options: ["Blockchain", "IoT", "AR", "VR"], a: 1 },
        { q: "Big Data คืออะไร?", options: ["ข้อมูลขนาดใหญ่", "คอมพิวเตอร์ใหญ่", "คนตัวใหญ่", "บริษัทใหญ่"], a: 0 },
        { q: "5G มีจุดเด่นคืออะไร?", options: ["ราคาถูก", "ความเร็วสูงและความหน่วงต่ำ", "กันน้ำได้", "ใช้ได้ตลอดชีพ"], a: 1 },
        { q: "Generative AI สามารถทำอะไรได้?", options: ["ซ่อมคอม", "สร้างเนื้อหาใหม่ (รูป/ข้อความ)", "ทำความสะอาดบ้าน", "ขับรถ"], a: 1 },
        { q: "VR (Virtual Reality) คืออะไร?", options: ["โลกความจริง", "โลกเสมือนจริงผ่านแว่น", "โลกอนาคต", "โลกไซเบอร์"], a: 1 },
        { q: "เทคโนโลยีใดใช้เก็บข้อมูลแบบกระจายศูนย์?", options: ["Cloud", "Blockchain", "Server", "Database"], a: 1 }
    ]
};

let currentLesson = '';
let currentQuestionIndex = 0;
let score = 0;

function openQuiz(lessonId) {
    currentLesson = lessonId;
    currentQuestionIndex = 0;
    score = 0;

    // Create Modal HTML if not exists
    if (!document.getElementById('quiz-overlay')) {
        createQuizModal();
    }

    document.getElementById('quiz-overlay').style.display = 'flex';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-game').style.display = 'block';

    renderQuestion();
}

function createQuizModal() {
    const modalHTML = `
    <div id="quiz-overlay" class="quiz-overlay">
        <div class="quiz-modal">
            <button class="close-btn" onclick="closeQuiz()">&times;</button>
            
            <div id="quiz-game">
                <div class="quiz-header">
                    <span id="q-progress">ข้อที่ 1/10</span>
                </div>
                <h2 id="q-text" class="quiz-question">คำถาม...</h2>
                <div id="q-options" class="quiz-options">
                    <!-- Options will be here -->
                </div>
            </div>

            <div id="quiz-result" style="display: none; text-align: center;">
                <div class="score-circle">
                    <span id="final-score">0</span>
                    <span class="total">/10</span>
                </div>
                <h2>จบแบบทดสอบ!</h2>
                <p id="feedback-text">เก่งมาก!</p>
                <button class="btn" onclick="closeQuiz()">ปิดหน้าต่าง</button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function renderQuestion() {
    const questions = quizData[currentLesson];
    const q = questions[currentQuestionIndex];

    document.getElementById('q-progress').innerText = `ข้อที่ ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('q-text').innerText = q.q;

    const optionsContainer = document.getElementById('q-options');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const questions = quizData[currentLesson];
    const correctIndex = questions[currentQuestionIndex].a;

    if (selectedIndex === correctIndex) {
        score++;
        // Optional: Show correct feedback temporarily
    } else {
        // Optional: Show wrong feedback
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-game').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('final-score').innerText = score;

    const feedback = document.getElementById('feedback-text');
    if (score >= 8) feedback.innerText = "สุดยอด! คุณเข้าใจเนื้อหาดีเยี่ยม";
    else if (score >= 5) feedback.innerText = "ทำได้ดี! แต่ลองทบทวนอีกนิดนะ";
    else feedback.innerText = "พยายามอีกนิด! ลองอ่านบทเรียนใหม่นะ";
}

function closeQuiz() {
    document.getElementById('quiz-overlay').style.display = 'none';
}
