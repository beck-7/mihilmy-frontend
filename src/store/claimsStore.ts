import { makeAutoObservable } from "mobx";
import { Claim } from "../types/claims";

class ClaimsStore {
  claimsData: Claim[] = [];
  approvedClaims: Claim[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setClaimsData(data: Claim[]) {
    this.claimsData = data;
  }

  approveClaim(claim: Claim) {
    this.approvedClaims.push(claim);
  }
}

export default new ClaimsStore();
