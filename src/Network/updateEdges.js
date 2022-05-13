import { getPoolAmount } from "../utils/queries.js";
import { network } from "./createGraph.js";
import { LCDClient } from "@terra-money/terra.js";
import { tsPoolArray } from "../PoolAddresses/tsPools.js";
import { astroPoolArray } from "../PoolAddresses/astroPools.js";
import { loopPoolArray } from "../PoolAddresses/loopPools.js";
import { calcE0, calcE1, findInputAmount } from "../Calc/findArb.js";
console.time('start');
const lcd = new LCDClient({
    URL: "https://twilight-rough-bird.terra-mainnet.quiknode.pro/610ab031e2a8f2dbf508ea457ad7af701fd3507e/",
    chainID: "columbus-5"
});
// while(1){
// update UST-LUNA edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[0], 0);
var temp1 = await getPoolAmount(lcd, tsPoolArray[0], 1);
network.updateEdgeAttribute('UST-LUNA', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-LUNA', 'tsLUNAPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[0], 0);
var temp3 = await getPoolAmount(lcd, astroPoolArray[0], 1);
network.updateEdgeAttribute('UST-LUNA', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize', n => temp3);
var temp4 = await getPoolAmount(lcd, loopPoolArray[0], 0);
var temp5 = await getPoolAmount(lcd, loopPoolArray[0], 1);
network.updateEdgeAttribute('UST-LUNA', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-LUNA', 'loopLUNAPoolSize', n => temp5);
var temp0 = await getPoolAmount(lcd, tsPoolArray[1], 0);
var temp1 = await getPoolAmount(lcd, tsPoolArray[1], 1);
network.updateEdgeAttribute('UST-bETH', 'tsUSTPoolSize', n => temp1);
network.updateEdgeAttribute('UST-bETH', 'tsbETHPoolSize', n => temp0);
var temp2 = await getPoolAmount(lcd, astroPoolArray[1], 0);
var temp3 = await getPoolAmount(lcd, astroPoolArray[1], 1);
network.updateEdgeAttribute('UST-bETH', 'astroUSTPoolSize', n => temp3);
network.updateEdgeAttribute('UST-bETH', 'astrobETHPoolSize', n => temp2);
const E0 = await calcE0(network.getEdgeAttribute('UST-LUNA', 'tsUSTPoolSize'), network.getEdgeAttribute('UST-LUNA', 'tsLUNAPoolSize'), network.getEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize'));
const E1 = await calcE1(network.getEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize'), network.getEdgeAttribute('UST-LUNA', 'tsLUNAPoolSize'), network.getEdgeAttribute('UST-LUNA', 'astroUSTPoolSize'));
const test = await findInputAmount(12, 13);
console.log(test);
console.log(E0);
console.log(E1);
console.log('UST Pool Size on Terraswap: ' + network.getEdgeAttribute('UST-LUNA', 'tsUSTPoolSize'));
console.log('LUNA Pool Size on Terraswap: ' + network.getEdgeAttribute('UST-LUNA', 'tsLUNAPoolSize'));
console.log('UST Pool Size on Astroport: ' + network.getEdgeAttribute('UST-LUNA', 'astroUSTPoolSize'));
console.log('LUNA Pool Size on Astroport: ' + network.getEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize'));
console.log('----------------------------------------------');
console.log('UST Pool Size on Terraswap: ' + network.getEdgeAttribute('UST-bETH', 'tsUSTPoolSize'));
console.log('bETH Pool Size on Terraswap: ' + network.getEdgeAttribute('UST-bETH', 'tsbETHPoolSize'));
console.log('UST Pool Size on Astro: ' + network.getEdgeAttribute('UST-bETH', 'astroUSTPoolSize'));
console.log('bETH Pool Size on Astro: ' + network.getEdgeAttribute('UST-bETH', 'astrobETHPoolSize'));
// console.log('UST Pool Size on Astroport: ' + network.getEdgeAttribute('UST-LUNA', 'astroUSTPoolSize'));
// console.log('LUNA Pool Size on Astroport: ' + network.getEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize'));
// console.log('UST Pool Size on LOOP: ' + network.getEdgeAttribute('UST-LUNA', 'loopUSTPoolSize'));
// console.log('LUNA Pool Size on LOOP: ' + network.getEdgeAttribute('UST-LUNA', 'loopLUNAPoolSize'));
//     await delay(1000);
// }
console.timeEnd('start');
// function delay(ms: number) {
//     return new Promise( resolve => setTimeout(resolve, ms) );
// }
