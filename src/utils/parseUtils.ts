import { Claim } from "../types/claims";
import { ClaimsArraySchema } from "./claimsSchema";

export const parseCSVToClaims = (data: any[]): Claim[] => {
  const parsedClaims = data.map((row) => ({
    claimId: row["Claim ID"]?.toString().trim() || "",
    subscriberId: row["Subscriber ID"]?.toString().trim() || "",
    memberSequence: row["Member Sequence"]
      ? Number(row["Member Sequence"])
      : undefined,
    claimStatus:
      row["Claim Status"]?.trim() === "Payable" ||
      row["Claim Status"]?.trim() === "Denied"
        ? (row["Claim Status"].trim() as "Payable" | "Denied")
        : "Denied",
    billed: row["Billed"] ? parseFloat(row["Billed"]) : 0,
    allowed: row["Allowed"] ? parseFloat(row["Allowed"]) : 0,
    paid: row["Paid"] ? parseFloat(row["Paid"]) : 0,
    paymentStatusDate: row["Payment Status Date"]?.toString().trim() || "",
  }));

  const result = ClaimsArraySchema.safeParse(parsedClaims);

  if (!result.success) {
    console.error("Validation failed", result.error.format());
    return [];
  }

  return result.data;
};
