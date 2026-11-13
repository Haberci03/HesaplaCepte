---
title: "Bileşik Faiz Nedir, Nasıl Hesaplanır? Formül ve Örnekler"
description: "Bileşik faiz ile basit faiz arasındaki fark, hesaplama formülü, aylık ve günlük bileşikleme örnekleri ve aylık düzenli yatırımın etkisi. Örnekler varsayımsaldır."
date: "2026-11-13"
slug: "bilesik-faiz-nedir-nasil-hesaplanir"
relatedCalculator: "/bilesik-faiz-hesaplama"
---

Bileşik faiz, kazanılan faizin de ana paraya eklenip bir sonraki dönemde faiz getirmesidir. Basit faizde ise faiz yalnızca ilk anaparaya işler; kazanılan faiz yeniden faiz getirmez.

Bu yazıdaki tüm faiz oranları tamamen varsayımsaldır ve yalnızca hesaplama mantığını göstermek için seçilmiştir. Güncel mevduat faizlerini veya fon getirilerini göstermez.

## Basit Faiz ile Bileşik Faiz Arasındaki Fark

100.000 TL'nin yıllık %30 varsayımsal oranla 3 yıl boyunca değerlendirildiğini düşünelim:

- **Basit faiz:** Her yıl yalnızca ilk anaparaya %30 faiz işler. 100.000 + (100.000 × 0,30 × 3) = **190.000 TL**
- **Yıllık bileşik faiz:** Her yılın sonunda faiz anaparaya eklenir. 100.000 × 1,30³ = **219.700 TL**
- **Aylık bileşik faiz:** Aylık oran, yıllık oranın 12'ye bölünmesiyle (%2,5) bulunur ve faiz her ay anaparaya eklenir. 100.000 × 1,025³⁶ = yaklaşık **243.254 TL**

Aradaki farkın nedeni, bileşik faizde kazanılan faizin de faiz kazanmasıdır. Faiz anaparaya ne kadar sık eklenirse, bir sonraki dönemde faiz işleyen tutar o kadar büyür. Bu yüzden aynı nominal oranla aylık bileşikleme, yıllık bileşiklemeden; yıllık bileşikleme de basit faizden daha yüksek sonuç verir.

## Bileşik Faiz Formülü

Bileşik faizin genel formülü şudur:

**A = P × (1 + r/m)^(m × n)**

- **A:** Vade sonu tutar
- **P:** Anapara
- **r:** Yıllık faiz oranı (ondalık olarak; %30 için 0,30)
- **m:** Yılda kaç kez bileşikleme yapıldığı (yıllık için 1, aylık için 12)
- **n:** Yıl sayısı

Hesaplayıcımız aylık bileşikleme kullanır; yani formülde m = 12 alınır. Girdiğiniz yıllık oran 12'ye bölünerek aylık oran bulunur ve anapara, vade boyunca her ay bu oranla büyütülür. Yukarıdaki 243.254 TL'lik sonuç da bu yöntemle hesaplanmıştır.

## Bileşikleme Sıklığı Neyi Değiştirir?

Aynı yıllık %30 nominal oranla bir yıl sonunda elde edilen etkin (gerçekleşen) getiri, bileşikleme sıklığına göre değişir:

- **Yıllık bileşikleme:** %30,00
- **Aylık bileşikleme:** (1 + 0,30/12)¹² − 1 = yaklaşık **%34,49**
- **Günlük bileşikleme (365 gün):** (1 + 0,30/365)³⁶⁵ − 1 = yaklaşık **%34,97**

Günlük bileşik faiz de aynı mantıkla çalışır; tek fark, bileşikleme dönemlerinin sıklaşmasıdır. Yıllık oran 365'e bölünür ve faiz her gün anaparaya eklenir. Görüldüğü gibi aylıktan günlüğe geçişin etkisi, yıllıktan aylığa geçişin etkisinden çok daha küçüktür; bileşikleme sıklaştıkça ek kazanç giderek azalır.

## Aylık Düzenli Yatırımın Etkisi

Bileşik faizin etkisi, düzenli eklenen küçük tutarlarda da görülür. Örnek varsayımlarımız şöyle:

- Başlangıç anaparası yok (0 TL)
- Her ay **5.000 TL** ek yatırım, **ay sonunda** ekleniyor
- Yıllık %30 varsayımsal oran, aylık bileşikleme
- Vade: 2 yıl (24 ay)

Bu durumda toplam yatırılan tutar 5.000 × 24 = **120.000 TL** olur. Vade sonunda ulaşılan tutar yaklaşık **161.745 TL**, toplam faiz kazancı ise yaklaşık **41.745 TL**'dir.

Hesaplayıcımız da ek yatırımları her ayın sonunda eklenmiş kabul eder. Bu nedenle her ayın katkısı, eklendiği aydan sonraki aydan itibaren faiz kazanmaya başlar. Ek yatırımlar ay başında eklenseydi, her katkı bir ay daha fazla faiz kazanacağı için sonuç biraz daha yüksek çıkardı.

## 72 Kuralı

Paranın kaç yılda ikiye katlanacağını kabaca bulmak için 72 sayısı yıllık faiz yüzdesine bölünür. Örneğin yıllık %12 faizle (yıllık bileşikleme) paranın ikiye katlanması için 72 / 12 = **6 yıl** gerekir; gerçek değer yaklaşık 6,1 yıldır.

72 kuralı düşük ve orta faiz oranlarında oldukça iyi bir tahmin verir. Ancak faiz oranı yükseldikçe kuralın sonucu gerçek değerden uzaklaşır; çok yüksek oranlarda kesin sonuç için formülle hesap yapmak gerekir.

## Gerçek Getiriyi Ne Etkiler?

Hesaplayıcının gösterdiği tutar brüt ve nominal bir sonuçtur. Elinize geçen gerçek getiriyi birkaç etken azaltabilir:

- **Stopaj ve diğer vergiler:** Faiz ve getiri gelirlerinden kesilen vergiler net kazancı düşürür.
- **Komisyon ve yönetim ücretleri:** Yatırım aracına göre alınan ücretler getiriden düşülür.
- **Enflasyon:** En önemli etkendir. Yüksek görünen bir nominal getiri, aynı dönemdeki enflasyonun altında kalırsa paranızın satın alma gücü aslında azalmış olur.

Paranızın satın alma gücünün zaman içinde nasıl değiştiğini görmek için [enflasyon hesaplayıcımızı](/enflasyon-hesaplama) kullanabilirsiniz.

## Sık Sorulan Sorular

### Bileşik faiz nedir?

Bileşik faiz, kazanılan faizin ana paraya eklenerek bir sonraki dönemde onun da faiz kazanmasıdır. Bu sayede para, basit faize göre daha hızlı büyür. Örneğin 100.000 TL, yıllık %30 varsayımsal oranla 3 yılda basit faizle 190.000 TL'ye, yıllık bileşik faizle 219.700 TL'ye ulaşır.

### Bileşik faiz hesaplama formülü nedir?

Formül A = P × (1 + r/m)^(m × n) şeklindedir. Burada A vade sonu tutarı, P anaparayı, r yıllık faiz oranını (ondalık), m yıllık bileşikleme sayısını, n ise yıl sayısını gösterir. Hesaplayıcımız aylık bileşikleme kullandığı için m = 12 alır.

### Günlük bileşik faiz nasıl hesaplanır?

Günlük bileşik faizde yıllık oran 365'e bölünür ve faiz her gün anaparaya eklenir; formülde m = 365 alınır. Yıllık %30 nominal oranla günlük bileşiklemenin bir yıllık etkin getirisi yaklaşık %34,97'dir. Bu, aylık bileşiklemedeki yaklaşık %34,49'dan yalnızca biraz yüksektir.

### Bileşik faiz ile basit faiz farkı nedir?

Basit faizde faiz yalnızca ilk anaparaya işler; bileşik faizde ise önceki dönemlerde kazanılan faiz de faiz getirir. Vade uzadıkça ve bileşikleme sıklaştıkça aradaki fark büyür. 100.000 TL, yıllık %30 varsayımsal oranla 3 yılda basit faizle 190.000 TL'ye, aylık bileşik faizle yaklaşık 243.254 TL'ye ulaşır.

## Kendi Hesabınızı Yapın

Kendi senaryonuzu denemek için bileşik faiz hesaplayıcımızı kullanabilirsiniz. Anapara, yıllık faiz oranı, vade ve isteğe bağlı aylık ek yatırım tutarını girerek vade sonu tutarınızı, toplam yatırdığınız parayı ve toplam faiz kazancınızı görebilirsiniz.

Bu yazı genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
