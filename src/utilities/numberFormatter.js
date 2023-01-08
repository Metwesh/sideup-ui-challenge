export default function formatter(amount){
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// Could have used this but it shows currency as EGP not LE
// function currencyFormatter(number) {
//     return  new Intl.NumberFormat('EN', { style: 'currency', currency: 'EGP' }).format(number);
// }