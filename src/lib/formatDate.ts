export function formatDate(dateStr: string): { month: string; year: string } {
  const parts = dateStr.split("-")
  const monthStr = parts[1]
  const yearStr = parts[0]
  if (monthStr && yearStr) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ]
    const monthIndex = parseInt(monthStr, 10) - 1
    return {
      month: months[monthIndex] ?? "",
      year: yearStr,
    }
  }
  return { month: "", year: dateStr }
}
