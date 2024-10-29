import { z } from "zod";

export const ClaimSchema = z.object({
  claimId: z.string().min(1, "Claim ID is required"),
  subscriberId: z.string().min(1, "Subscriber ID is required"),
  memberSequence: z.number().optional(),
  claimStatus: z.enum(["Payable", "Denied"]),
  billed: z.number().min(0, "Billed amount must be 0 or greater"),
  allowed: z.number().min(0, "Allowed amount must be 0 or greater"),
  paid: z.number().min(0, "Paid amount must be 0 or greater"),
  paymentStatusDate: z.string().min(1, "Payment Status Date is required"),
});

export const ClaimsArraySchema = z.array(ClaimSchema);
