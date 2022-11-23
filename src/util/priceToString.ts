export function priceToString(price: number): string {
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const totalPrice: string = price.toString();
  const changedPrice: string = totalPrice.replace(priceRegex, ",");

  return changedPrice;
}
