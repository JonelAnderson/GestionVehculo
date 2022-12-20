class Product {}

export class FuelSupplyContract {
  Id?: string;
  ContractNumber: string;
  FromContractDate: string;
  UntilContractDate: string;
  Concept: string;
  IdentityDocument: string;
  BusinessName: string;
  Address: string;
  Mail: string;
  Phone: string;
  Products: Product[];
  constructor(
    pId: string,
    pContractNumber: string,
    pFromContractDate: string,
    pUntilContractDate: string,
    pConcept: string,
    pIdentityDocument: string,
    pBusinessName: string,
    pAddress: string,
    pMail: string,
    pPhone: string,
    pProducts: Product[]
  ) {
    this.Id = pId;
    this.ContractNumber = pContractNumber;
    this.FromContractDate = pFromContractDate;
    this.UntilContractDate = pUntilContractDate;
    this.Concept = pConcept;
    this.IdentityDocument = pIdentityDocument;
    this.BusinessName = pBusinessName;
    this.Address = pAddress;
    this.Mail = pMail;
    this.Phone = pPhone;
    this.Products = pProducts;
  }
}
