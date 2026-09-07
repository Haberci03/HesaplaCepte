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
