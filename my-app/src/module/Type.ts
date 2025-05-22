export type Type = {
  id: number;
  title: string;
}[];

export type RangkingType = {
  id: number;
  image: string;
  title: string;
  address: string | number;
  subtitle: string | number;
  percent: string | number;
}[];

export type BenefitType = {
  id: number;
  image: string;
  title: string;
  address: string | number;
  subtitle: string | number;
  percent: string | number;
  inspectionDate: string | number;
  moveInDate: string | number;
}[];

export type ImgProps = {
  src: string;
  className?: string;
  alt?: string;
};
