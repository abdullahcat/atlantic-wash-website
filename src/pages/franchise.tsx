import Head from "next/head";


const Franchise: React.FC = () => {

    return (
        <div>
            <Head>
                <title>Atlantic Franchise</title>
            </Head>
            <div className="relative flex justify-start items-end h-screen">
                <div className="absolute space-y-6 mx-auto px-4 py-20 z-10">
                    <h1 className="text-4xl font-bold text-white">Franchising</h1>
                    <p className="text-xl text-white">Dünyanın önde gelen oto yıkama Franchising Ailesi’ne katılarak başarı öykünüze yepyeni bir sayfa ekleyin.</p>
                    <a
                        href="applyfranchise.atlanticwash.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 uppercase font-mono font-semibold tracking-wider border-2 border-white hover:bg-atlantic-blue2 text-white inline-block"
                    >
                        Apply Now</a>

                </div>
                <img src='https://rocketcarwash.com/wp-content/uploads/RCW-O-Street-Update.jpg' alt='franchise_cover' className="blur-md absolute top-0 left-0 w-full h-screen object-cover">
                </img>
            </div>

            <div className="p-4 space-y-6 my-10">
                <h1 className="text-2xl font-bold mb-2">Atlantic Wash Franchising Sistemi</h1>

                <h2 className="text-xl text-atlantic-blue1 font-semibold mb-2">Atlantic Wash'ın Franchising Yapısı</h2>
                <p>
                    Atlantic Wash, endüstri lideri olmasının en büyük sebeplerinden biri, işletmecilerinin üstün niteliklerine ve profesyonelliğine dayanmaktadır. Bu başarının arkasında, Atlantic Wash tarafından sağlanan kapsamlı ve yüksek kaliteli eğitim programları bulunmaktadır.
                </p>
                <p>
                    Atlantic Wash, işletmecilere marka altında ticari faaliyette bulunma hakkı tanımak için kendi geliştirdiği restoran işletme lisansını verir.
                </p>
                <p>
                    Atlantic Wash, Türkiye'deki büyüme stratejileri doğrultusunda, potansiyel restoran açılacak bölgeleri belirleyip, bu bölgelerde uygun gayrimenkulü kiralama veya satın alma yoluna gider. Tüm tadilat, inşaat, dekorasyon ve ekipman yatırımını Atlantic Wash üstlenirken, işletmeciler restorana özel yatırımları (oturma grupları, mutfak ekipmanları, iç-dış reklam panoları vb.) gerçekleştirir.
                </p>

                <h2 className="text-xl text-atlantic-blue1 font-semibold mb-2">İdeal İşletmeci Profili</h2>
                <ul>
                    <li>Girişimcilik ruhu ve başarma arzusu taşımalıdır.</li>
                    <li>İnsan yönetimi ve finansal yönetim konularında deneyimli olmalıdır.</li>
                    <li>Atlantic Wash markasına uygun bir eğitim programını tamamlayabilme kapasitesine sahip olmalıdır.</li>
                    <li>Yatırımları öz sermayesi ile karşılayabilmelidir.</li>
                    <li>Askerlik görevini tamamlamış olmalıdır.</li>
                </ul>

                <h2 className="text-xl text-atlantic-blue1 font-semibold mb-2">Başvuru ve Eğitim Süreci</h2>
                <p>
                    Atlantic Wash işletmeciliğine başvuru süreci, web sitesi üzerinden doldurulan "Başvuru Formu" ve CV'nin gönderilmesiyle başlar. Başvurular, Atlantic Wash'ın yatırım planlarına göre değerlendirilir. Olumlu değerlendirilen başvurular için mülakat süreçleri başlatılır.
                </p>
                <p>
                    Eğitim programı, işletmecilerin Atlantic Wash kültürünü en ince detaylarına kadar öğrenmelerini sağlar. Tam zamanlı olan bu program, katılımcının performansına bağlı olarak 6-8 ay sürer.
                </p>
                <p>
                    Daha fazla bilgi için, Atlantic Wash Franchising Departmanı ile iletişime geçebilir veya web sitesi üzerinden başvuru formunu doldurabilirsiniz.
                </p>
            </div>
        </div>

    );
}

export default Franchise;
