export interface FaqItem {
  question: string;
  answer: string;
}

export const SALARY_FAQ_ITEMS: FaqItem[] = [
  {
    question: "2026 gelir vergisi dilimleri nelerdir?",
    answer:
      "0 - 190.000 TL için %15, 190.000 - 400.000 TL için %20, 400.000 - 950.000 TL için %27, 950.000 - 3.000.000 TL için %35 ve 3.000.000 TL üzeri için %40 oranı uygulanır. Vergi, dilim usulüyle (artan oranlı) hesaplanır; yani tüm gelir en yüksek dilimin oranından değil, her dilime isabet eden kısım kendi oranından vergilendirilir.",
  },
  {
    question: "SGK ve işsizlik sigortası kesintisi nasıl hesaplanır?",
    answer:
      "Çalışan payı olarak brüt maaş üzerinden %14 SGK primi ve %1 işsizlik sigortası primi kesilir. Bu iki kesinti toplamı (%15), gelir vergisi matrahının hesaplanmasında brüt maaştan düşülür.",
  },
  {
    question: "Damga vergisi nedir, nasıl hesaplanır?",
    answer:
      "Damga vergisi, brüt maaş üzerinden binde 7,59 (%0,759) oranında hesaplanır ve maaş bordrosunda ayrı bir kesinti olarak yer alır.",
  },
  {
    question: "Asgari ücret istisnası nasıl uygulanıyor?",
    answer:
      "2022'den bu yana, asgari ücretin brüt tutarına isabet eden gelir vergisi ve damga vergisi tutarı istisna kapsamındadır. Bu hesaplayıcıda istisna, 2026 brüt asgari ücreti olan 33.030 TL üzerinden hesaplanmakta ve çalışanın hesaplanan vergisinden düşülmektedir.",
  },
  {
    question: "Tablodaki aylar arasında net maaş neden değişiyor?",
    answer:
      "Gelir vergisi dilimleri yıllık kümülatif matrah üzerinden işler. Aynı brüt maaşın yıl boyunca değişmeden alındığı varsayılırsa, ay ilerledikçe kümülatif matrah artar ve daha yüksek bir vergi dilimine geçilebilir. Bu durumda net maaş bir önceki aya göre azalır; tabloda bu aylar \"Dilim atladı\" etiketiyle işaretlenir.",
  },
  {
    question: "Bu hesaplayıcı resmi bordro yerine geçer mi?",
    answer:
      "Hayır. Bu araç yalnızca bilgilendirme amaçlıdır ve genel varsayımlara dayanır (ör. yıl boyunca sabit maaş, ek ödeme/prim olmaması). Kesin ve resmi hesaplama için işvereninizin bordro sistemine veya bir mali müşavire başvurmanız önerilir.",
  },
];

export const VAT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "KDV dahil ve KDV hariç fiyat arasındaki fark nedir?",
    answer:
      "KDV hariç fiyat, katma değer vergisi eklenmeden önceki tutardır. KDV dahil fiyat ise bu tutara ilgili KDV oranının eklenmiş halidir. Örneğin %20 oranında 100 TL'lik KDV hariç bir ürünün KDV dahil fiyatı 120 TL'dir.",
  },
  {
    question: "Hangi KDV oranını seçmeliyim?",
    answer:
      "Türkiye'de yaygın olarak uygulanan oranlar %1 (temel gıda, bazı tarım ürünleri gibi), %10 (bazı gıda ve tekstil ürünleri gibi) ve %20 (genel oran) şeklindedir. Ürün veya hizmetinize uygulanan oranı fatura ya da ilgili mevzuattan teyit etmeniz önerilir.",
  },
  {
    question: "KDV tutarı nasıl hesaplanır?",
    answer:
      "KDV hariç fiyattan başlanıyorsa, KDV tutarı = KDV hariç fiyat × KDV oranı olarak hesaplanır. KDV dahil fiyattan başlanıyorsa, önce KDV hariç fiyat = KDV dahil fiyat ÷ (1 + KDV oranı) formülüyle bulunur, ardından KDV tutarı bu iki değer arasındaki farktır.",
  },
  {
    question: "Bu hesaplayıcı resmi fatura/muhasebe kaydı yerine geçer mi?",
    answer:
      "Hayır. Bu araç yalnızca bilgilendirme ve hızlı hesaplama amaçlıdır. Fatura, beyanname veya muhasebe kayıtlarında kullanılacak kesin tutarlar için muhasebe sisteminizi veya mali müşavirinizi esas almanız önerilir.",
  },
];

export const SEVERANCE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Kıdem tazminatı nasıl hesaplanır?",
    answer:
      "Kıdem tazminatı, çalışanın son brüt maaşının (tavanı aşmıyorsa) her tam çalışma yılı için bir kez ödenmesiyle hesaplanır. Bir yıldan kısa süreler için ay kesirleri orantılı olarak (ay sayısı ÷ 12) hesaba katılır.",
  },
  {
    question: "Kıdem tazminatı tavanı nedir?",
    answer:
      "Devlet tarafından her yıl belirlenen bir tavan tutar bulunur; brüt maaşınız bu tutarı aşsa da hesaplama tavan üzerinden yapılır. Bu hesaplayıcıda 2026 yılı için tavan 73.729,87 TL olarak kullanılmaktadır.",
  },
  {
    question: "Kıdem tazminatından hangi kesintiler yapılır?",
    answer:
      "Kıdem tazminatı gelir vergisinden istisnadır; yalnızca %0,759 oranında damga vergisi kesilir. SGK ve işsizlik sigortası primi kıdem tazminatı üzerinden kesilmez.",
  },
  {
    question: "Ay kesirleri nasıl değerlendirilir?",
    answer:
      "Tam yıllara ek olarak çalışılan ay sayısı, o yılın oranına (ay ÷ 12) göre kıdem süresine eklenir. Örneğin 5 yıl 6 ay çalışan biri için kıdem süresi 5,5 yıl olarak hesaplanır.",
  },
  {
    question: "Bu hesaplayıcı kesin ve resmi bir tutar verir mi?",
    answer:
      "Hayır. Bu araç yalnızca bilgilendirme amaçlıdır ve genel varsayımlara dayanır. Kıdeme esas ücretin içine giren ek ödemeler (ikramiye, yol/yemek gibi süreklilik arz eden yardımlar) ve fesih koşulları gibi detaylar hesaba katılmamıştır. Kesin tutar için işvereninize veya bir mali müşavire başvurmanız önerilir.",
  },
];

export const LOAN_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Aylık kredi taksiti nasıl hesaplanır?",
    answer:
      "Aylık taksit, eşit taksitli (anüite) kredi formülüyle hesaplanır: Taksit = Anapara × r × (1+r)ⁿ ÷ ((1+r)ⁿ - 1). Burada r aylık faiz oranını (yıllık faiz oranı ÷ 12 ÷ 100), n ise vade ay sayısını ifade eder.",
  },
  {
    question: "Toplam faiz tutarı neyi gösterir?",
    answer:
      "Toplam faiz, vade boyunca ödenecek tüm taksitlerin toplamından (toplam ödeme) anaparanın çıkarılmasıyla bulunur. Bu tutar, krediyi kullanmanın size olan toplam maliyetini gösterir.",
  },
  {
    question: "Bu hesaplayıcı bankaların verdiği tekliflerle birebir aynı mı?",
    answer:
      "Hayır. Bu hesaplayıcı yalnızca anapara, faiz oranı ve vadeye dayalı matematiksel bir yaklaşımdır. Bankaların uyguladığı dosya masrafı, hayat/işsizlik sigortası, KKDF ve BSMV gibi ek maliyetler bu hesaplamaya dahil değildir; gerçek teklif için bankanızla görüşmeniz önerilir.",
  },
];

export const ANNUAL_LEAVE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Yıllık ücretli izin hakkı nasıl hesaplanır?",
    answer:
      "4857 sayılı İş Kanunu Madde 53'e göre, kıdemi 1 yıldan 5 yıla kadar (5 dahil) olan çalışanlara 14 gün, 5 yıldan fazla 15 yıldan az olanlara 20 gün, 15 yıl ve üzeri kıdemi olanlara 26 gün yıllık ücretli izin verilir.",
  },
  {
    question: "1 yıldan az çalışanların izin hakkı var mı?",
    answer:
      "Hayır, kural olarak işyerinde çalışma süresi 1 yılı doldurmayan çalışanlar yıllık ücretli izne hak kazanamaz. Kıdem 1 yılı doldurduktan sonra izin hakkı doğar.",
  },
  {
    question: "18 yaşından küçük ve 50 yaşından büyük çalışanlar için farklı bir kural var mı?",
    answer:
      "Evet. İş Kanunu Madde 53'e göre, 18 yaşından küçük ve 50 yaşından büyük işçilere verilecek yıllık ücretli izin süresi, kıdemleri ne olursa olsun 20 günden az olamaz.",
  },
  {
    question: "Bu hesaplayıcı toplu sözleşme veya şirket içi uygulamaları dikkate alır mı?",
    answer:
      "Hayır. Bu araç yalnızca İş Kanunu'nun belirlediği yasal asgari süreleri hesaplar. Toplu iş sözleşmesi veya bireysel iş sözleşmesiyle daha uzun izin süreleri kararlaştırılmış olabilir; bu durumda sözleşmenizdeki hükümler esas alınır.",
  },
];

export const NOTICE_PAY_FAQ_ITEMS: FaqItem[] = [
  {
    question: "İhbar tazminatı nedir ve kimler hak kazanır?",
    answer:
      "İhbar tazminatı, belirsiz süreli iş sözleşmesini fesheden tarafın (işveren veya çalışan) karşı tarafa önceden bildirimde bulunmaması durumunda ödediği tazminattır. İşveren, bildirim süresine uymadan işten çıkarırsa çalışana ihbar tazminatı öder.",
  },
  {
    question: "İhbar süreleri ne kadardır?",
    answer:
      "4857 sayılı İş Kanunu Madde 17'ye göre kıdem süresine göre bildirim süreleri: 6 aya kadar 2 hafta, 6 ay-1,5 yıl arası 4 hafta, 1,5-3 yıl arası 6 hafta, 3 yıldan fazla 8 haftadır.",
  },
  {
    question: "İhbar tazminatı nasıl hesaplanır?",
    answer:
      "İhbar tazminatı, brüt maaşın 30'a bölünmesiyle bulunan günlük ücretin 7 ile ve ilgili hafta sayısıyla çarpılmasıyla hesaplanır: İhbar Tazminatı = (Brüt Maaş ÷ 30) × 7 × Hafta Sayısı.",
  },
  {
    question: "İhbar tazminatından kesinti yapılır mı?",
    answer:
      "Evet. Kıdem tazminatının aksine ihbar tazminatı gelir vergisi ve damga vergisine tabidir. Bu hesaplayıcıda gösterilen tutar brüttür; net tutar bu kesintiler düşüldükten sonra ortaya çıkar.",
  },
  {
    question: "Bu hesaplayıcı kesin ve resmi bir tutar verir mi?",
    answer:
      "Hayır. Bu araç yalnızca bilgilendirme amaçlıdır. Fesih nedeni, haklı/haksız fesih ayrımı ve varsa vergi kesintileri gibi detaylar kişiye özel değerlendirme gerektirir. Kesin tutar için bir mali müşavir veya hukuk danışmanına başvurmanız önerilir.",
  },
];

export const PERCENTAGE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Bir sayının yüzdesi nasıl hesaplanır?",
    answer:
      "Bir X sayısının Y yüzdesini bulmak için X × Y ÷ 100 formülü kullanılır. Örneğin 100'ün %20'si, 100 × 20 ÷ 100 = 20'dir.",
  },
  {
    question: "Bir sayı diğerinin yüzde kaçı olduğu nasıl bulunur?",
    answer:
      "X sayısının Y sayısının yüzde kaçı olduğunu bulmak için (X ÷ Y) × 100 formülü kullanılır. Örneğin 20, 100'ün %(20 ÷ 100 × 100) = %20'sidir.",
  },
  {
    question: "Zam veya indirim yüzdesi nasıl hesaplanır?",
    answer:
      "Eski değerden (X) yeni değere (Y) değişim yüzdesi ((Y - X) ÷ X) × 100 formülüyle hesaplanır. Sonuç pozitifse artış (zam), negatifse azalış (indirim) anlamına gelir.",
  },
];

export const INFLATION_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Enflasyon (TÜFE) hesaplayıcısı nasıl çalışır?",
    answer:
      "Girdiğiniz tutar, seçtiğiniz başlangıç ve bitiş yılının Aralık ayı TÜFE endeks değerleri oranlanarak güncel karşılığına çevrilir: Bitiş Tutarı = Tutar × (Bitiş Yılı Endeksi ÷ Başlangıç Yılı Endeksi).",
  },
  {
    question: "TÜFE endeksi neyi ifade eder?",
    answer:
      "TÜFE (Tüketici Fiyat Endeksi), belirli bir sepetteki mal ve hizmetlerin fiyatlarındaki değişimi ölçer. Bu hesaplayıcıda 2012 Aralık ayı 100 baz alınarak, TÜİK'in resmi yıllık değişim oranlarından zincirleme olarak türetilmiş yıl sonu endeks değerleri kullanılmaktadır.",
  },
  {
    question: "Bu hesaplama neden yaklaşık kabul edilmeli?",
    answer:
      "Hesaplama, yalnızca yıl sonu (Aralık ayı) TÜFE endeks değerlerini karşılaştırır. Yıl içindeki belirli bir ay için hassas bir hesaplama gerekiyorsa, TÜİK'in aylık yayınladığı güncel TÜFE verilerine bakmanız gerekir.",
  },
  {
    question: "Toplam artış yüzdesi ne anlama gelir?",
    answer:
      "Toplam artış yüzdesi, seçilen iki yıl sonu arasında TÜFE endeksinin ne kadar arttığını gösterir; yani aynı satın alma gücünü korumak için tutarın yaklaşık ne kadar artması gerektiğini ifade eder.",
  },
];
