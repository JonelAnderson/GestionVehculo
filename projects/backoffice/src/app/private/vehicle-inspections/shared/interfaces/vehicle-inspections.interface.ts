export class VehicleInspections {
  id?: string;
  LicensePlate: string;
  Area: string;
  Responsible: string;
  Type: string;
  Mark: string;
  Model: string;
  Color: string;
  Year: number;
  NEngine: string;
  Serie: string;
  CertificateNumber: number;
  Enterprise: string;
  ReviewDate: string;
  ExpirationDate: string;
  Document: string;
  constructor(
    pLicensePlate: string,
    pArea: string,
    pResponsible: string,
    pType: string,
    pMark: string,
    pModel: string,
    pColor: string,
    pYear: number,
    pNEngine: string,
    pSerie: string,
    pCertificateNumber: number,
    pEnterprise: string,
    pReviewDate: string,
    pExpirationDate: string,
    pDocument: string
  ) {
    this.LicensePlate = pLicensePlate;
    this.Area = pArea;
    this.Responsible = pResponsible;
    this.Type = pType;
    this.Mark = pMark;
    this.Model = pModel;
    this.Color = pColor;
    this.Year = pYear;
    this.NEngine = pNEngine;
    this.Serie = pSerie;
    this.CertificateNumber = pCertificateNumber;
    this.Enterprise = pEnterprise;
    this.ReviewDate = pReviewDate;
    this.ExpirationDate = pExpirationDate;
    this.Document = pDocument;
  }
}
