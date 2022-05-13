const r = 0.997;

/*
@param R0: The reserve amount for starting coin in pool A
@param R1: The reserve amount for sister coin in pool A
@param R1_: The reserve amount for coin R1 in pool B
@param R2: The reserve amount for sister coin to R1_ in pool B
*/
export async function calcE0(R0: number, R1: number, R1_: number): Promise<number> {
    const E0 = (R0*R1_)/(R1_ + (R1*r));
    return E0;
}
export async function calcE1(R1_: number, R1: number, R2: number): Promise<number> {
    const E1 = (r*R1*R2) / (R1_ + (R1*r));
    return E1;
}
export async function findInputAmount(E0: number, E1: number): Promise<Number> {
    const a = (((E0*E1*r)**0.5) - E0) / r;
    return Number(a);
}
