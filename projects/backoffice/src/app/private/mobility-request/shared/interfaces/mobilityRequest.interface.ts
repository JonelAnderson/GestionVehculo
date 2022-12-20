export class MobilityRequest {
  id?: string;
  LicensePlate: string;
  ServiceNumber: string;
  UserArea: string;
  CommissionaryStaff: string;
  DateService: string;
  HourService: string;
  CommissionGoal: string;
  AssignedDriver: string;
  DepartureTime: string;
  ArrivalTime: string;
  DepartureKM: string;
  ArrivalKM: string;
  Entity: string;
  District: string;
  Observation: string;
  Address: string;
  Document: string;
  constructor(
    pLicensePlate: string,
    pServiceNumber: string,
    pUserArea: string,
    pCommissionaryStaff: string,
    pDateService: string,
    pHourService: string,
    pCommissionGoal: string,
    pAssignedDriver: string,
    pDepartureTime: string,
    pArrivalTime: string,
    pDepartureKM: string,
    pArrivalKM: string,
    pEntity: string,
    pDistrict: string,
    pObservation: string,
    pAddress: string,
    pDocument: string
  ) {
    this.LicensePlate = pLicensePlate;
    this.ServiceNumber = pServiceNumber;
    this.UserArea = pUserArea;
    this.CommissionaryStaff = pCommissionaryStaff;
    this.DateService = pDateService;
    this.HourService = pHourService;
    this.CommissionGoal = pCommissionGoal;
    this.AssignedDriver = pAssignedDriver;
    this.DepartureTime = pDepartureTime;
    this.ArrivalTime = pArrivalTime;
    this.DepartureKM = pDepartureKM;
    this.ArrivalKM = pArrivalKM;
    this.Entity = pEntity;
    this.District = pDistrict;
    this.Observation = pObservation;
    this.Address = pAddress;
    this.Document = pDocument;
  }
}
