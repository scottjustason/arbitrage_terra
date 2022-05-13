import { loopPoolArray } from "./PoolAddresses/loopPools.js";
import { LCDClient } from "@terra-money/terra.js";
import { getPoolAmount } from "./utils/queries.js";
import { network } from "./Network/createGraph.js";
const lcd = new LCDClient({
    URL: "https://twilight-rough-bird.terra-mainnet.quiknode.pro/610ab031e2a8f2dbf508ea457ad7af701fd3507e/",
    chainID: "columbus-5"
});
// LOOP-LUNA edge
var temp4 = await getPoolAmount(lcd, loopPoolArray[25], 0);
var temp5 = await getPoolAmount(lcd, loopPoolArray[25], 1);
network.updateEdgeAttribute('LOOP-LUNA', 'loopLOOPPoolSize', n => temp4);
network.updateEdgeAttribute('LOOP-LUNA', 'loopLUNAPoolSize', n => temp5);
console.log('UST Pool Size on LOOP: ' + network.getEdgeAttribute('LOOP-LUNA', 'loopLOOPPoolSize'));
console.log('- Pool Size on LOOP: ' + network.getEdgeAttribute('LOOP-LUNA', 'loopLUNAPoolSize'));
