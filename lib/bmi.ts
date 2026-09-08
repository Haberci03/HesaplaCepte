import { BMI_CATEGORIES } from "./constants";

export interface BmiResult {
  boyCm: number;
  kiloKg: number;
  bmi: number;
  kategori: string;
}

export function calculateBmi(boyCm: number, kiloKg: number): BmiResult {
  const boyM = boyCm / 100;
  const bmi = kiloKg / (boyM * boyM);
  const kategori =
    BMI_CATEGORIES.find((c) => bmi < c.max)?.label ??
    BMI_CATEGORIES[BMI_CATEGORIES.length - 1].label;

  return { boyCm, kiloKg, bmi, kategori };
}
