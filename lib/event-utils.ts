export function getParticipantCount(participantsStr: string): number {
  if (!participantsStr) return 1;
  
  const str = participantsStr.toLowerCase().trim();
  
  if (str.includes("1 (each)") || str.includes("1 each")) {
    return 2;
  }
  
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
  
  const num = parseInt(str.replace(/[^0-9]/g, ""), 10);
  return isNaN(num) ? 1 : num;
}
