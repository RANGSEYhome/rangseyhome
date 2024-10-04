import { createI18n } from "vue-i18n";

const messages ={
    en:{
        // Header
        BlogName: "Rangsey P. HENG",
        ShortBio: "Hi, I'm Rangsey, a multidisciplinary professional specializing in full-stack development and content creation.",
        FindMoreMe: "Find out more about me",
        AboutMe: "About Me",
        Resume: "Resume",
        Contact: "Contact",
        Blog: "Blog",
        DarkMode: "Dark Mode",
        ReadProj: "Read more about this project",
        // About
        ShortProf: "Full-stack developer, and content writer and marketer",
        AboutDesc1: "I'm a multidisciplinary professional specializing in full-stack development and content creation. I write about software development, content creation, and marketing on",
        MyBlog: "my blog",
        AboutDesc2: "Want to know how I may help your project? Check out my",
        MyOnlineCv: "online resume",
        ReadBlog: "Read Blog",
        ViewCv: "View Resume",
        WhatIDo: "What I Do",
        WhatIDoDesc: "I empowering businesses through full-stack development, content creation, digital marketing, and graphic design —driving user engagement, optimizing online presence, and fostering sustainable growth. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my",
        WhatIDoAnd: "and",
        ContactMeWork: "Contact Me for Work",
        Tests: "Testimonials",
        LatestPost: "Latest Blog Posts",
        // Resume
        OnlineCv: "My Online Resume",
        DownloadCv: "Download PDF Version",
        // Contact
        HireMe: "Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to",
        ConnectMe: "Want to get connected? Follow me on the social channels below.",
        GetInTouch: "Get In Touch",
        Name: "Name",
        Email: "Email",
        EnterMessage: "Enter your message",
        SendNow: "Send Now",
        // Blog
        ReadMore: "Read more",
        // Subcription
        SubsHeading: "New Updated Articles",
        SubsDesc: "Welcome to my blog. Subscribe and get my latest blog post in your inbox.",
        SubsInput: "Enter email",
        SubsButton: "Subscribe ",
    },
    khm:{
        // Header
        BlogName: "ហេង រង្សី",
        ShortBio: "សួស្តី! ខ្ញុំឈ្មោះ រង្សី, ជាអ្នកជំនាញពហុអាជីពដែលមានឯកទេសក្នុងការអភិវឌ្ឍកម្មវិធី និងការបង្កើតមាតិកា។",
        FindMoreMe: "ស្វែងយល់បន្ថែមអំពីខ្ញុំ",
        AboutMe: "អំពីខ្ញុំ",
        Resume: "ប្រវត្តិរូប",
        Contact: "ទាក់ទង",
        Blog: "អត្ថបទ",
        DarkMode: "ផ្ទៃងងឹត",
        ReadProj: "អានបន្ថែមអំពី Project នេះ",
        // About
        ShortProf: "អ្នកអភិវឌ្ឍន៍កម្មវិធី (Full-stack developer), អ្នកសរសេរមាតិកា និងអ្នកធ្វើទីផ្សារ",
        AboutDesc1: "ខ្ញុំជាអ្នកជំនាញពហុអាជីពដែលមានឯកទេសក្នុងការអភិវឌ្ឍកម្មវិធី និងការបង្កើតមាតិកា។ ខ្ញុំសរសេរអំពីការអភិវឌ្ឍន៍កម្មវិធី ការបង្កើតមាតិកា និងទីផ្សារនៅលើ",
        MyBlog: "ប្លុករបស់ខ្ញុំ",
        AboutDesc2: "ចង់ដឹងថា តើខ្ញុំអាចជួយគម្រោងរបស់អ្នកដោយរបៀបណា? មើល",
        MyOnlineCv: "ប្រវត្តិរូបរបស់ខ្ញុំ",
        ReadBlog: "អានអត្ថបទ",
        ViewCv: "មើលប្រវត្តិរូប",
        WhatIDo: "ការងាររបស់ខ្ញុំ",
        WhatIDoDesc: "ខ្ញុំជួយដល់អាជីវកម្ម តាមរយៈការអភិវឌ្ឍកម្មវិធី ការបង្កើតមាតិកា ទីផ្សារឌីជីថល និងការរចនាក្រាហ្វិកដែលជំរុញឱ្យមានការចូលរួមរបស់អ្នកប្រើប្រាស់ ការបង្កើនប្រសិទ្ធភាពនិងវត្តមានតាមប្រព័ន្ធអនឡាញ និងជំរុញកំណើនប្រកបដោយនិរន្តរភាព។ ខាងក្រោមនេះគឺជាការរៀបរាប់ត្រួសៗអំពីជំនាញបច្ចេកទេស និងបច្ចេកវិទ្យាសំខាន់ៗដែលខ្ញុំប្រើប្រាស់។ ចង់ស្វែងយល់បន្ថែមអំពីបទពិសោធន៍របស់ខ្ញុំ? សូមពិនិត្យមើល",
        WhatIDoAnd: "និង",
        ContactMeWork: "ទាក់ទងខ្ញុំសម្រាប់ការងារ",
        Tests: "មតិយោបល់ពីអតិថិជន",
        LatestPost: "អត្ថបទចុះផ្សាយថ្មីៗចុងក្រោយ",
        // Resume
        OnlineCv: "ប្រវត្តិរូបអនឡាញ",
        DownloadCv: "ទាញយកប្រវត្តិរូបជាទម្រង់ PDF",
        // Contact
        HireMe: "ចង់ភ្ជាប់ការទាក់ទងជាមួយខ្ញុំ ឬចាប់អារម្មណ៍ទាក់ទងខ្ញុំសម្រាប់ការងារ? អ្នកអាចបំពេញទម្រង់ខាងក្រោម ឬផ្ញើអ៊ីមែលមកខ្ញុំតាមរយៈ",
        ConnectMe: "ចង់ភ្ជាប់ការទាក់ទងជាមួយខ្ញុំលើបណ្តាញសង្គម? Follow ខ្ញុំតាមបណ្ដាញសង្គមខាងក្រោម។",
        GetInTouch: "ទាក់ទងខ្ញុំ",
        Name: "ឈ្មោះ",
        Email: "អ៊ីម៉ែល",
        EnterMessage: "វាយបញ្ចូលសាររបស់អ្នក",
        SendNow: "ផ្ញើឥលូវ",
        // Blog
        ReadMore: "អានបន្ត",
        // Subcription
        SubsHeading: "អត្ថបទចុះផ្សាយថ្មីៗ",
        SubsDesc: "សូមស្វាគមន៍មកកាន់ប្លុករបស់ខ្ញុំ! ភ្ជាប់ និងទទួលបានអត្ថបទចុងក្រោយបំផុតរបស់ខ្ញុំ នៅក្នុងប្រអប់សំបុត្ររបស់អ្នក។",
        SubsInput: "បញ្ចូលអាសយដ្ឋានអ៊ីម៉ែល",
        SubsButton: "ភ្ជាប់ ",
    },
}

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages
})

export default i18n