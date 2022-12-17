const convertMinutesToHours = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return String(hours) + "." + String(minutes);
}

const toRupiah = (number) => {
  const convert = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR"
  }).format(number)
  return `Rp ${convert}`
}

export { convertMinutesToHours, toRupiah }