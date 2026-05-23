// 📝 Muhammed Turgut - Statik Blog Yazıları Veritabanı
// Yeni bir blog yazısı eklemek için bu listeye yeni bir obje ekleyebilirsiniz.

const BLOG_POSTS = [
    {
        id: 1,
        title: "Jetpack Compose: Android Arayüz Geliştirmede Yeni Bir Çağ",
        category: "Android",
        summary: "XML tabanlı tasarımlardan deklaratif (declarative) arayüz geliştirmeye geçiş. Jetpack Compose'un sunduğu hız, kolaylık ve performans avantajları.",
        content: `
            <p>Android ekosisteminde uzun yıllardır kullandığımız XML tabanlı görünüm (View) hiyerarşisi, yerini tamamen modern ve deklaratif bir yaklaşım olan <strong>Jetpack Compose</strong>'a bırakıyor. Bu yazımda, Jetpack Compose'a geçiş sürecimi ve edindiğim deneyimleri paylaşacağım.</p>
            
            <h3>Deklaratif UI Nedir?</h3>
            <p>Geleneksel XML yapısında, arayüz elemanlarını XML ile tanımlar ve Kotlin tarafında <code>findViewById</code> veya ViewBinding kullanarak bu elemanların durumlarını manuel olarak güncellerdik. Bu durum, veri ve arayüz senkronizasyonunu zorlaştırır ve hatalara (NullPointerException vb.) yol açardı.</p>
            <p>Declarative (Deklaratif) yapıda ise arayüzün "nasıl görüneceğini" değil, "hangi veri durumunda nasıl davranacağını" tanımlarız. Veri (state) değiştiğinde, sistem otomatik olarak sadece etkilenen arayüz elemanlarını yeniden çizer (Recomposition).</p>
            
            <h3>Neden Jetpack Compose?</h3>
            <ul>
                <li><strong>Daha Az Kod:</strong> XML dosyaları, binding sınıfları ve karmaşık geçiş kodları ortadan kalkar. Sadece Kotlin yazarak tüm arayüzü çok daha az satırla geliştirebilirsiniz.</li>
                <li><strong>Sezgisel Yapı:</strong> Arayüzü kodlarken sadece arayüz elemanlarını üst üste veya yan yana koyan fonksiyonlar (Row, Column, Box) kullanırsınız.</li>
                <li><strong>Kolay Önizleme (Preview):</strong> Yazdığınız kodların çıktısını emülatör çalıştırmadan anında yan panelde farklı ekran boyutları ve koyu/açık tema modlarında görebilirsiniz.</li>
                <li><strong>Mükemmel Animasyon Desteği:</strong> Çok karmaşık animasyonları bile sadece birkaç satır Compose koduyla akıcı bir şekilde hayata geçirebilirsiniz.</li>
            </ul>
            
            <blockquote>
                "Jetpack Compose ile uygulama geliştirmek, adeta yapboz parçalarını birleştirmek gibi eğlenceli ve son derece hızlı."
            </blockquote>
            
            <h3>Küçük Bir Örnek:</h3>
            <pre><code>@Composable
fun Greeting(name: String) {
    var isExpanded by remember { mutableStateOf(false) }
    
    Column(modifier = Modifier.padding(16.dp)) {
        Text(text = "Merhaba, $name!")
        Button(onClick = { isExpanded = !isExpanded }) {
            Text(if (isExpanded) "Daha Az Göster" else "Detayları Göster")
        }
        if (isExpanded) {
            Text("Jetpack Compose dünyasına hoş geldiniz! Bu alan dinamik olarak açıldı.")
        }
    }
}</code></pre>
            
            <p>Sonuç olarak, yeni bir Android projesine başlıyorsanız kesinlikle Jetpack Compose kullanmalısınız. QRitik projemde de Compose kullanarak kod kalitesini ve geliştirme hızını inanılmaz derecede artırdım.</p>
        `,
        date: "23 Mayıs 2026",
        readTime: "4 dk oku",
        image: "assets/image/qr_app_image.png",
        tags: ["Kotlin", "Jetpack Compose", "Android", "Modern UI"]
    },
    {
        id: 2,
        title: "Flutter ile Performanslı Mobil Uygulamalar Geliştirme Rehberi",
        category: "Flutter",
        summary: "Gereksiz rebuild işlemlerinden kaçınmak, resim optimizasyonları ve verimli durum yönetimi (State Management) ile uygulamanızı hızlandırın.",
        content: `
            <p>Flutter, tek bir kod tabanıyla hem Android hem de iOS platformlarında harika performans sunan uygulamalar geliştirmemizi sağlıyor. Ancak yanlış kodlama pratikleri, uygulamanın saniyede 60 FPS altına düşmesine ve donmalara yol açabilir. Bu yazıda uygulamanızı uçuracak optimizasyon yöntemlerini inceleyeceğiz.</p>
            
            <h3>1. Const Constructor Kullanımını Alışkanlık Haline Getirin</h3>
            <p>Flutter'da değişmeyecek arayüz elemanlarının başına mutlaka <code>const</code> anahtar kelimesini ekleyin. Bu sayede Flutter engine, sayfa yeniden çizilirken (rebuild) const olan widget'ları tekrar oluşturmaz, hafızada tuttuğu aynı örneği kullanır.</p>
            
            <h3>2. Gereksiz Rebuild İşlemlerinden Kaçının</h3>
            <p>State Management (Provider, Bloc, Riverpod vb.) kullanırken tüm sayfayı kapsayacak şekilde durum güncellemeleri yapmayın. Sadece değişecek küçük parçaları dinleyin.</p>
            <ul>
                <li><strong>Provider:</strong> <code>context.watch()</code> yerine sadece ilgili widget'ı saran <code>Consumer</code> kullanın ya da veriyi sadece okumak için <code>context.read()</code> tercih edin.</li>
                <li><strong>Widget Bölümleme:</strong> Sayfanızı büyük tek bir Build metodunda yazmak yerine, küçük stateless veya stateful widget'lara bölün.</li>
            </ul>
            
            <h3>3. Resim Optimizasyonu (Image Optimization)</h3>
            <p>Uygulamada kullandığınız yüksek çözünürlüklü resimler en büyük bellek (RAM) tüketim kaynağıdır. Arayüzde 100x100 piksel boyutunda göstereceğiniz bir resmi 4K çözünürlükte yüklemeyin. <code>cacheWidth</code> ve <code>cacheHeight</code> özelliklerini kullanarak resimlerin bellekte sadece gösterileceği boyutta yer kaplamasını sağlayın.</p>
            <pre><code>Image.asset(
  'assets/images/user_avatar.png',
  cacheWidth: 200,
  cacheHeight: 200,
)</code></pre>
            
            <h3>4. Ağır İşlemleri İzole Edin (Isolates)</h3>
            <p>Flutter, varsayılan olarak tek bir işlem parçacığında (Single Thread / Main UI Thread) çalışır. Büyük JSON dosyalarını parse etmek veya görüntü işlemek gibi ağır matematiksel işlemleri doğrudan çalıştırırsanız arayüzde kasmalar yaşanır. Bu gibi durumlar için <code>compute</code> fonksiyonu veya <code>Isolate</code> yapısını kullanarak arka planda ayrı bir thread çalıştırın.</p>
            
            <p>Bu basit ama kritik kurallara dikkat ederek, kullanıcılara ipeksi pürüzsüzlükte akan mobil deneyimler sunabilirsiniz!</p>
        `,
        date: "18 Mayıs 2026",
        readTime: "5 dk oku",
        image: "assets/image/care_mate_app.png",
        tags: ["Flutter", "Dart", "Performance", "Optimization"]
    },
    {
        id: 3,
        title: "Kullanıcı Odaklı Tasarım: Figma'da Mikro-Etkileşimlerin Gücü",
        category: "UI/UX",
        summary: "Arayüz tasarımında kullanıcıyı şaşırtacak ve bağlayacak mikro-animasyonlar nasıl tasarlanır? Figma üzerinde pratik yöntemler.",
        content: `
            <p>Bir uygulamanın sadece "çalışması" artık yeterli değil. Kullanıcılar, etkileşime girdiklerinde uygulamanın canlı hissettirmesini, hareketleriyle uyumlu tepkiler vermesini istiyor. İşte tam bu noktada <strong>Mikro-Etkileşimler (Micro-interactions)</strong> devreye giriyor.</p>
            
            <h3>Mikro-Etkileşim Nedir?</h3>
            <p>Mikro-etkileşimler, bir arayüzde tek bir görevi yerine getiren küçük, işlevsel anlardır. Örneğin:</p>
            <ul>
                <li>Bir butona basıldığında butonun hafifçe içeri çökmesi ve renk değiştirmesi.</li>
                <li>Beğen butonuna tıklandığında kalp ikonunun zıplayarak kırmızıya dönmesi.</li>
                <li>Sayfa yenilenirken beliren akıcı, özelleştirilmiş bir yükleniyor (loader) halkası.</li>
                <li>Formda şifre girerken beliren "şifre gücü" barının renkli geçişi.</li>
            </ul>
            
            <h3>Neden Bu Kadar Önemliler?</h3>
            <p>Mikro-etkileşimler, kullanıcıya yaptığı eylemin sonucunu bildirir (Görsel Geri Bildirim). Kullanıcıya sistemin kontrolünde olduğu hissini verir ve uygulamayı kullanmayı çok daha eğlenceli hale getirir. İyi tasarlanmış mikro-etkileşimler, sıradan bir arayüzü "premium" bir ürüne dönüştürür.</p>
            
            <h3>Figma'da Mikro-Etkileşim Tasarımı (Interactive Components)</h3>
            <p>Figma'nın <strong>Interactive Components</strong> özelliği sayesinde artık tasarımlarımıza doğrudan prototip düzeyinde mikro-etkileşimler ekleyebiliyoruz. İşte basit bir buton hover animasyonu adımları:</p>
            <ol>
                <li>Butonunuzun normal durumunu (Default) ve hover durumunu (Hovered) tasarlayıp birer Component yapın.</li>
                <li>Bunları seçip sağ panelden <strong>"Combine as variants"</strong> seçeneğine tıklayın.</li>
                <li>Prototip sekmesine geçerek Default butondan Hovered butona bir ok çekin.</li>
                <li>Tetikleyiciyi <code>While hovering</code>, animasyon tipini ise <code>Smart Animate - Ease Out (200ms)</code> olarak ayarlayın.</li>
            </ol>
            <p>Artık bu butonu tasarımınızın neresinde kullanırsanız kullanın, fare üzerine geldiğinde otomatik olarak akıcı bir şekilde parlayacak veya genişleyecektir.</p>
            
            <blockquote>
                "Büyük tasarımlar detaylarda gizlidir. Kullanıcılar genel tasarımı fark etmeyebilirler ama kötü mikro-etkileşimleri mutlaka hissederler."
            </blockquote>
            
            <p>Tasarım yaparken her zaman kullanıcının hareketlerine minik görsel sürprizler eklemeyi unutmayın!</p>
        `,
        date: "05 Mayıs 2026",
        readTime: "3 dk oku",
        image: "assets/image/avatar_app_image.png",
        tags: ["Figma", "UI/UX", "Micro-interactions", "Design System"]
    }
];
