export interface CompoundInterestResult {
  anaPara: number;
  aylikEkYatirim: number;
  vadeYil: number;
  vadeSonuTutar: number;
  toplamYatirilanAnapara: number;
  toplamKazanc: number;
}

// yillikFaizOrani yüzde olarak (ör. 40), vadeYil yıl cinsinden, aylikEkYatirim opsiyonel.
// Aylık bileşikleme ve ay sonunda yapılan ek yatırım varsayımıyla hesaplanır.
export function calculateCompoundInterest(
  anaPara: number,
  yillikFaizOrani: number,
  vadeYil: number,
  aylikEkYatirim: number = 0
): CompoundInterestResult {
  const r = yillikFaizOrani / 12 / 100;
  const n = vadeYil * 12;
  const buyumeKatsayisi = Math.pow(1 + r, n);

  const anaParaBuyume = anaPara * buyumeKatsayisi;
  const ekYatirimBuyume =
    r === 0 ? aylikEkYatirim * n : aylikEkYatirim * ((buyumeKatsayisi - 1) / r);

  const vadeSonuTutar = anaParaBuyume + ekYatirimBuyume;
  const toplamYatirilanAnapara = anaPara + aylikEkYatirim * n;
  const toplamKazanc = vadeSonuTutar - toplamYatirilanAnapara;

  return {
    anaPara,
    aylikEkYatirim,
    vadeYil,
    vadeSonuTutar,
    toplamYatirilanAnapara,
    toplamKazanc,
  };
}
