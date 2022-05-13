// @param index: either 0 or 1
// @param pairAddress: address of pair on either TS, Astroport or LOOP
// @param terraClient: lcd client
export async function getPoolAmount(terraClient, pairAddress, index) {
    const response = await terraClient.wasm.contractQuery(pairAddress, {
        pool: {}
    });
    return Number(response.assets[index].amount) / 1000000;
}
;
