export function getParticipantCount(participantsStr: string): number {
  if (!participantsStr) return 1;
  
  const str = participantsStr.toLowerCase().trim();
  
  // Special case: "1 (each)" for English and Hindi elocution/writing
  if (str.includes("1 (each)") || str.includes("1 each")) {
    return 2;
  }
  
  // Format: "X + Y substitutes" or similar
  if (str.includes("+")) {
    const parts = str.split("+");
    let total = 0;
    for (const p of parts) {
      const num = parseInt(p.trim().replace(/[^0-9]/g, ""), 10);
      if (!isNaN(num)) {
        total += num;
      }
    }
    return total > 0 ? total : 1;
  }
  
  // Standard format: "12" or "2"
  const num = parseInt(str.replace(/[^0-9]/g, ""), 10);
  return isNaN(num) ? 1 : num;
}
