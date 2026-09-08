import {
  MINIMUM_PAYMENT_LIMIT_THRESHOLD,
  MINIMUM_PAYMENT_RATE_LOW,
  MINIMUM_PAYMENT_RATE_HIGH,
} from "./constants";

export interface CreditCardMinPaymentResult {
  kartLimiti: number;
  donemBorcu: number;
  oran: number;
  asgariOdeme: number;
  kalanBakiye: number;
}

export function calculateCreditCardMinPayment(
  kartLimiti: number,
  donemBorcu: number
): CreditCardMinPaymentResult {
  const oran =
    kartLimiti <= MINIMUM_PAYMENT_LIMIT_THRESHOLD
      ? MINIMUM_PAYMENT_RATE_LOW
      : MINIMUM_PAYMENT_RATE_HIGH;

  const asgariOdeme = donemBorcu * oran;
  const kalanBakiye = donemBorcu - asgariOdeme;

  return { kartLimiti, donemBorcu, oran, asgariOdeme, kalanBakiye };
}
