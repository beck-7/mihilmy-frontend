export interface Claim {
  claimId: string;
  subscriberId: string;
  memberSequence?: number;
  claimStatus: "Payable" | "Denied";
  billed: number;
  allowed: number;
  paid: number;
  paymentStatusDate: string;
}
