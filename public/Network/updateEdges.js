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
// UST-LUNA edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[0], 0);
var temp1 = await getPoolAmount(lcd, tsPoolArray[0], 1);
network.updateEdgeAttribute('UST-LUNA', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-LUNA', 'tsLUNAPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[0], 0);
var temp3 = await getPoolAmount(lcd, astroPoolArray[0], 1);
network.updateEdgeAttribute('UST-LUNA', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize', n => temp3);
var temp4 = await getPoolAmount(lcd, loopPoolArray[0], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[0], 0);
network.updateEdgeAttribute('UST-LUNA', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-LUNA', 'loopLUNAPoolSize', n => temp5);
// UST-bETH edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[1], 0);
var temp1 = await getPoolAmount(lcd, tsPoolArray[1], 1);
network.updateEdgeAttribute('UST-bETH', 'tsUSTPoolSize', n => temp1);
network.updateEdgeAttribute('UST-bETH', 'tsbETHPoolSize', n => temp0);
var temp2 = await getPoolAmount(lcd, astroPoolArray[1], 0);
var temp3 = await getPoolAmount(lcd, astroPoolArray[1], 1);
network.updateEdgeAttribute('UST-bETH', 'astroUSTPoolSize', n => temp3);
network.updateEdgeAttribute('UST-bETH', 'astrobETHPoolSize', n => temp2);
// UST-ANC edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[2], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[2], 0);
network.updateEdgeAttribute('UST-ANC', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-ANC', 'tsANCPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[2], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[2], 0);
network.updateEdgeAttribute('UST-ANC', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-ANC', 'astroANCPoolSize', n => temp3);
var temp4 = await getPoolAmount(lcd, loopPoolArray[2], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[2], 0);
network.updateEdgeAttribute('UST-ANC', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-ANC', 'loopANCPoolSize', n => temp5);
// UST-KUJI edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[3], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[3], 0);
network.updateEdgeAttribute('UST-KUJI', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-KUJI', 'tsKUJIPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[3], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[3], 0);
network.updateEdgeAttribute('UST-KUJI', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-KUJI', 'astroKUJIPoolSize', n => temp3);
// UST-ASTRO edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[4], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[4], 0);
network.updateEdgeAttribute('UST-ASTRO', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-ASTRO', 'tsASTROPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[4], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[4], 0);
network.updateEdgeAttribute('UST-ASTRO', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-ASTRO', 'astroASTROPoolSize', n => temp3);
// UST-STT edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[5], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[5], 0);
network.updateEdgeAttribute('UST-STT', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-STT', 'tsSTTPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[5], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[5], 0);
network.updateEdgeAttribute('UST-STT', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-STT', 'astroSTTPoolSize', n => temp3);
var temp4 = await getPoolAmount(lcd, loopPoolArray[5], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[5], 0);
network.updateEdgeAttribute('UST-STT', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-STT', 'loopSTTPoolSize', n => temp5);
// UST-PSI edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[6], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[6], 0);
network.updateEdgeAttribute('UST-PSI', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-PSI', 'tsPSIPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[6], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[6], 0);
network.updateEdgeAttribute('UST-PSI', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-PSI', 'astroPSIPoolSize', n => temp3);
// UST-VKR edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[7], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[7], 0);
network.updateEdgeAttribute('UST-VKR', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-VKR', 'tsVKRPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[7], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[7], 0);
network.updateEdgeAttribute('UST-VKR', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-VKR', 'astroVKRPoolSize', n => temp3);
// UST-SPEC edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[8], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[8], 0);
network.updateEdgeAttribute('UST-SPEC', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-SPEC', 'tsSPECPoolSize', n => temp1);
var temp4 = await getPoolAmount(lcd, loopPoolArray[8], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[8], 0);
network.updateEdgeAttribute('UST-SPEC', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-SPEC', 'loopSPECPoolSize', n => temp5);
// UST-LOOP edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[9], 0);
var temp1 = await getPoolAmount(lcd, tsPoolArray[9], 1);
network.updateEdgeAttribute('UST-LOOP', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-LOOP', 'tsLOOPPoolSize', n => temp1);
var temp4 = await getPoolAmount(lcd, loopPoolArray[9], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[9], 0);
network.updateEdgeAttribute('UST-LOOP', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-LOOP', 'loopLOOPPoolSize', n => temp5);
// UST-MINE edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[10], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[10], 0);
network.updateEdgeAttribute('UST-MINE', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-MINE', 'tsMINEPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[10], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[10], 0);
network.updateEdgeAttribute('UST-MINE', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-MINE', 'astroMINEPoolSize', n => temp3);
var temp4 = await getPoolAmount(lcd, loopPoolArray[10], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[10], 0);
network.updateEdgeAttribute('UST-MINE', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-MINE', 'loopMINEPoolSize', n => temp5);
// UST-LOTA edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[11], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[11], 0);
network.updateEdgeAttribute('UST-LOTA', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-LOTA', 'tsLOTAPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[11], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[11], 0);
network.updateEdgeAttribute('UST-LOTA', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-LOTA', 'astroLOTAPoolSize', n => temp3);
var temp4 = await getPoolAmount(lcd, loopPoolArray[11], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[11], 0);
network.updateEdgeAttribute('UST-LOTA', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-LOTA', 'loopLOTAPoolSize', n => temp5);
// UST-MARS edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[12], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[12], 0);
network.updateEdgeAttribute('UST-MARS', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-MARS', 'tsMARSPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[12], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[12], 0);
network.updateEdgeAttribute('UST-MARS', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-MARS', 'astroMARSPoolSize', n => temp3);
// UST-MIR edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[13], 0);
var temp1 = await getPoolAmount(lcd, tsPoolArray[13], 1);
network.updateEdgeAttribute('UST-MIR', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-MIR', 'tsMIRPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[13], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[13], 0);
network.updateEdgeAttribute('UST-MIR', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-MIR', 'astroMIRPoolSize', n => temp3);
var temp4 = await getPoolAmount(lcd, loopPoolArray[13], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[13], 0);
network.updateEdgeAttribute('UST-MIR', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-MIR', 'loopMIRPoolSize', n => temp5);
// UST-ORION edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[14], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[14], 0);
network.updateEdgeAttribute('UST-ORION', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-ORION', 'tsORIONPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[14], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[14], 0);
network.updateEdgeAttribute('UST-ORION', 'astroUSTPoolSize', n => temp2);
network.updateEdgeAttribute('UST-ORION', 'astroORIONPoolSize', n => temp3);
// UST-LOOPR edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[15], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[15], 0);
network.updateEdgeAttribute('UST-LOOPR', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-LOOPR', 'tsLOOPRPoolSize', n => temp1);
var temp4 = await getPoolAmount(lcd, loopPoolArray[15], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[15], 0);
network.updateEdgeAttribute('UST-LOOPR', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-LOOPR', 'loopLOOPRPoolSize', n => temp5);
// LUNA-LUNAX edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[16], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[16], 0);
network.updateEdgeAttribute('LUNA-LUNAX', 'tsLUNAPoolSize', n => temp0);
network.updateEdgeAttribute('LUNA-LUNAX', 'tsLUNAXPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[16], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[16], 0);
network.updateEdgeAttribute('LUNA-LUNAX', 'astroLUNAPoolSize', n => temp2);
network.updateEdgeAttribute('LUNA-LUNAX', 'astroLUNAXPoolSize', n => temp3);
// LUNA-bLUNA edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[17], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[17], 0);
network.updateEdgeAttribute('LUNA-bLUNA', 'tsLUNAPoolSize', n => temp0);
network.updateEdgeAttribute('LUNA-bLUNA', 'tsbLUNAPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[17], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[17], 0);
network.updateEdgeAttribute('LUNA-bLUNA', 'astroLUNAPoolSize', n => temp2);
network.updateEdgeAttribute('LUNA-bLUNA', 'astrobLUNAPoolSize', n => temp3);
// LUNA-cLUNA edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[18], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[18], 0);
network.updateEdgeAttribute('LUNA-cLUNA', 'tsLUNAPoolSize', n => temp0);
network.updateEdgeAttribute('LUNA-cLUNA', 'tscLUNAPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[18], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[18], 0);
network.updateEdgeAttribute('LUNA-cLUNA', 'astroLUNAPoolSize', n => temp2);
network.updateEdgeAttribute('LUNA-cLUNA', 'astrocLUNAPoolSize', n => temp3);
// LUNA-stLUNA edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[19], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[19], 0);
network.updateEdgeAttribute('LUNA-stLUNA', 'tsLUNAPoolSize', n => temp0);
network.updateEdgeAttribute('LUNA-stLUNA', 'tsstLUNAPoolSize', n => temp1);
var temp2 = await getPoolAmount(lcd, astroPoolArray[19], 1);
var temp3 = await getPoolAmount(lcd, astroPoolArray[19], 0);
network.updateEdgeAttribute('LUNA-stLUNA', 'astroLUNAPoolSize', n => temp2);
network.updateEdgeAttribute('LUNA-stLUNA', 'astrostLUNAPoolSize', n => temp3);
// UST-LUNAX edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[20], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[20], 0);
network.updateEdgeAttribute('UST-LUNAX', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-LUNAX', 'tsLUNAXPoolSize', n => temp1);
// LUNAX-bLUNA edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[21], 0);
var temp1 = await getPoolAmount(lcd, tsPoolArray[21], 1);
network.updateEdgeAttribute('LUNAX-bLUNA', 'tsLUNAXPoolSize', n => temp0);
network.updateEdgeAttribute('LUNAX-bLUNA', 'tsbLUNAPoolSize', n => temp1);
// UST-aUST edge
var temp0 = await getPoolAmount(lcd, tsPoolArray[22], 1);
var temp1 = await getPoolAmount(lcd, tsPoolArray[22], 0);
network.updateEdgeAttribute('UST-aUST', 'tsUSTPoolSize', n => temp0);
network.updateEdgeAttribute('UST-aUST', 'tsaUSTPoolSize', n => temp1);
var temp4 = await getPoolAmount(lcd, loopPoolArray[22], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[22], 0);
network.updateEdgeAttribute('UST-aUST', 'loopUSTPoolSize', n => temp4);
network.updateEdgeAttribute('UST-aUST', 'loopaUSTPoolSize', n => temp5);
// aUST-KUJI edge
var temp4 = await getPoolAmount(lcd, loopPoolArray[23], 1);
var temp5 = await getPoolAmount(lcd, loopPoolArray[23], 0);
network.updateEdgeAttribute('aUST-KUJI', 'loopaUSTPoolSize', n => temp4);
network.updateEdgeAttribute('aUST-KUJI', 'loopKUJIPoolSize', n => temp5);
// LOOP-ANC edge
var temp4 = await getPoolAmount(lcd, loopPoolArray[24], 0);
var temp5 = await getPoolAmount(lcd, loopPoolArray[24], 1);
network.updateEdgeAttribute('LOOP-ANC', 'loopLOOPPoolSize', n => temp4);
network.updateEdgeAttribute('LOOP-ANC', 'loopANCPoolSize', n => temp5);
// LOOP-LUNA edge
var temp4 = await getPoolAmount(lcd, loopPoolArray[25], 0);
var temp5 = await getPoolAmount(lcd, loopPoolArray[25], 1);
network.updateEdgeAttribute('LOOP-LUNA', 'loopLOOPPoolSize', n => temp4);
network.updateEdgeAttribute('LOOP-LUNA', 'loopLUNAPoolSize', n => temp5);
const E0 = await calcE0(network.getEdgeAttribute('UST-LUNA', 'tsUSTPoolSize'), network.getEdgeAttribute('UST-LUNA', 'tsLUNAPoolSize'), network.getEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize'));
const E1 = await calcE1(network.getEdgeAttribute('UST-LUNA', 'astroLUNAPoolSize'), network.getEdgeAttribute('UST-LUNA', 'tsLUNAPoolSize'), network.getEdgeAttribute('UST-LUNA', 'astroUSTPoolSize'));
const test = await findInputAmount(E0, E1);
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
console.timeEnd('start');
// function delay(ms: number) {
//     return new Promise( resolve => setTimeout(resolve, ms) );
// }
