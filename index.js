
let one= document.getElementById('show')

function note() {
    one.innerHTML= ""
    let slat= ['الفاتحہ','البقرہ',' آل عمران','النساء','المائدہ','الأنعام','الأعراف','الأنفال',
    'التوبہ','یونس','ہود','یوسف','مریم','الرعد','ابراہیم','الحجر','النحل',
    'الإسراء','الکہف','طہ','الانبیاء','الحج','المؤمنون','النور','الفرقان',
    'الشعراء','النمل','القصص','العنکبوت','الروم','لقمان','السجدہ','الأحزاب',
    'سبا','فاطر','یٰس','الصافات','ص','الزمر','غافر','فصلت','الشوریٰ','الزخرف',
    'الدخان','الجاثیہ','الاحقاف','محمد','الفتح','الحجرات','ق','الذاریات',
    'الطور','النجم','القمر','الرحمن','الواقعہ','الحدید','المجادلہ','الحشر',
    'الممتحنہ','الصف','الجمعہ','المنافقون','التغابن','الطلاق','التحریم','الملک',
    'القلم','الحاقہ','المعارج','نوح','الجن','المزمل','المدثر','القیامہ',
    'الانسان','المرسلات','النبا','النازعات','عبس','التکویر','الانفطار','المطففین',
    'الانشقاق','البروج','الطارق','الأعلى','الغاشیہ','الفجر','البلد',
    'الشمس','اللیل','الضحیٰ','الشرح','التین','العلق','القدر','البینہ','الزلزلہ',
    'العادیات','القارعہ','التکاثر','العصر','الہمزہ','الفیل','قریش','الماعون',
    'الکوثر','الکافرون','النصر','المسد','الإخلاص','الفلق','الناس'
    
    ]
    let ibad=document.getElementById('surahname').value;
for (let index=0; index<slat.length; index++){
    one.innerHTML= slat[ibad]
}

}












